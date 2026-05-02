#!/usr/bin/env bash
set -euo pipefail

echo "Maschine Coach Agent installatie (macOS/Linux)"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js ontbreekt. Installeer eerst Node.js 20+ via https://nodejs.org" >&2
  exit 1
fi

echo "Gedetecteerde Node versie: $(node -v)"

cd "$(dirname "$0")/.."
echo "Dependencies installeren..."
npm install
echo "Build uitvoeren..."
npm run build
echo "App starten..."
npm start
