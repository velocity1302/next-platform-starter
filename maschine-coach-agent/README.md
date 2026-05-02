# Maschine Coach Agent

Lokale desktop companion-app (Electron + TypeScript) voor **Native Instruments Maschine 3**.

## Installeren op jouw pc

## 1) Vereisten
- Node.js 20 of hoger
- npm (zit bij Node.js)
- Windows 10/11, macOS of Linux

## 2) Snel installeren en starten
Ga in terminal naar deze map:
```bash
cd maschine-coach-agent
```

### Windows (PowerShell)
```powershell
./scripts/install-windows.ps1
```

### macOS / Linux
```bash
./scripts/install-macos-linux.sh
```

Deze scripts doen automatisch:
1. `npm install`
2. `npm run build`
3. `npm start`

## 3) Handmatig installeren (alternatief)
```bash
npm install
npm run build
npm start
```

## 4) Installer build (optioneel, op je eigen pc)
```bash
npm run dist:win
npm run dist:mac
```

## Fallback gedrag bij ontbrekende dependencies
- Als `electron-store` ontbreekt: app gebruikt tijdelijke in-memory sessie-opslag.
- Als `midi-writer-js` ontbreekt: MIDI-export toont duidelijke foutmelding in de UI met instructie om `npm install` uit te voeren.

## Web openen
- Next.js route: `http://localhost:3000/maschine-coach-agent`
- Prototype: `http://localhost:3000/prototype/index.html`
