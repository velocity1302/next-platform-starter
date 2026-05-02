Write-Host "Maschine Coach Agent installatie (Windows)"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js ontbreekt. Installeer eerst Node.js 20+ vanaf https://nodejs.org"
  exit 1
}

$nodeVersion = node -v
Write-Host "Gedetecteerde Node versie: $nodeVersion"

Set-Location $PSScriptRoot\..

Write-Host "Dependencies installeren..."
npm install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Build uitvoeren..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "App starten..."
npm start
