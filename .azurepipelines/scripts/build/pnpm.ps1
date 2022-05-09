if ($env:Path -like "*AppData\Roaming\npm*")
{
    $env:Path += ";$env:appdata\npm"
}
Write-Host "Install pnpm..."
npm -g install pnpm
Write-Host "Restore packages..."
pnpm install
Write-Host "Build React App..."
pnpm build
Write-Host "Test React App..."
pnpm test