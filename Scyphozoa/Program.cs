using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Scyphozoa.Data;
using Scyphozoa.Models;
using Pomelo.EntityFrameworkCore.MySql;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddUserSecrets<Program>();

// Add services to the container.
var connectionString = builder.Configuration.GetSection("Scyphozoa").GetConnectionString("DefaultConnection");
var getDbVersion = Version.TryParse(builder.Configuration.GetSection("Database")["MinimalVersion"], out var dbMinVersion) ;
if (!getDbVersion)
{
    Console.Error.WriteLine("Unable to fetch the minimal version of database!");
    Console.Error.WriteLine("Abort!");
    Environment.Exit(1);
}

var dbVersion = ServerVersion.AutoDetect(connectionString);
if (dbVersion.Version.CompareTo(dbMinVersion) < 0)
{
    Console.Error.WriteLine("Current database version is below the minimal version requirement!");
    Console.Error.WriteLine("Abort!");
    Environment.Exit(1);
}

builder.Services.AddDbContext<ApplicationDbContext>(options => options
        .UseMySql(connectionString, dbVersion));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt();

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapRazorPages();

app.MapFallbackToFile("index.html"); ;

app.Run();
