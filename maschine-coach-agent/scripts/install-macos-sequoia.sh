#!/usr/bin/env bash
set -euo pipefail

echo "Maschine Coach Agent installatie (macOS Sequoia 15.x)"

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "Dit script is alleen voor macOS." >&2
  exit 1
fi

if ! command -v sw_vers >/dev/null 2>&1; then
  echo "Kan macOS versie niet bepalen." >&2
  exit 1
fi

MACOS_VERSION="$(sw_vers -productVersion)"
echo "Gedetecteerde macOS versie: ${MACOS_VERSION}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js ontbreekt. Installeer Node.js 20+ via https://nodejs.org" >&2
  exit 1
fi

echo "Node versie: $(node -v)"

cd "$(dirname "$0")/.."

echo "Dependencies installeren..."
npm install

echo "Build uitvoeren..."
npm run build

echo "App starten..."
npm start

echo "\nAls macOS Gatekeeper blokkeert, gebruik:"
echo "xattr -dr com.apple.quarantine ."
