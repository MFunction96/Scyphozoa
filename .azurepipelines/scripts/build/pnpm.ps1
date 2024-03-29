Write-Host "Setup pnpm..."
pnpm setup
Write-Host "Restore packages..."
pnpm install
Write-Host "Build React App..."
pnpm build
Write-Host "Test React App..."
# pnpm test
Write-Host "Clean node_modules cache..."
Remove-Item -Path node_modules -Recurse -Force