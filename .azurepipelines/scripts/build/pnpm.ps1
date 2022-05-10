Write-Host "Install pnpm..."
npm -g install pnpm
Write-Host "Restore packages..."
pnpm install
Write-Host "Build React App..."
pnpm build
Write-Host "Test React App..."
pnpm test