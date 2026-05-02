# Maschine Coach Agent

Lokale desktop companion-app (Electron + TypeScript) die je stap voor stap coacht tijdens het produceren in **Native Instruments Maschine 3**.

## Features
- Nederlandse UI en coach-tekst.
- 10 genres met richtlijnen voor BPM, drums, bass, akkoorden en arrangement.
- Coachmodus met stappen en statusknoppen: **Klaar / Probleem**.
- MIDI-generator (drums, bassline, chords, melody idea).
- Exportmap: `Maschine Coach Exports` (in je Documenten-map).
- Lokale sessie-opslag via `electron-store`.

## Installatie
```bash
cd maschine-coach-agent
npm install
npm start
```

## Build
```bash
npm run build
```

Daarna vind je de gecompileerde bestanden in `dist/`.

## Structuur
- `src/main.ts`: Electron main proces + IPC.
- `src/preload.ts`: veilige bridge naar renderer.
- `src/renderer/`: desktop UI.
- `src/data/`: genres en coachstappen.
- `src/services/midi.ts`: MIDI-export generator.

## Codex Online openen
Naast de Electron desktop-app is er ook een webroute toegevoegd in deze repo:
- Start de Next.js app in de repository root.
- Open daarna: `/maschine-coach-agent`

Deze route biedt dezelfde coachflow en genre-informatie in browservorm, handig voor Codex Online preview.
