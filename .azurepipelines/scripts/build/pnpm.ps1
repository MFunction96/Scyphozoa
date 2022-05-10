$oldpath = [System.Environment]::GetEnvironmentVariable('PATH','user')
if ($oldpath -like "*AppData\Roaming\npm*")
{
    $newpath = "$oldpath;$env:appdata\npm"
    [Environment]::SetEnvironmentVariable("PATH", "$newpath", "User")
}

Write-Host "Install pnpm..."
npm -g install pnpm
Write-Host "Restore packages..."
pnpm install
Write-Host "Build React App..."
pnpm build
Write-Host "Test React App..."
pnpm test