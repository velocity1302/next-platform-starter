# Maschine Coach Agent

Lokale desktop companion-app (Electron + TypeScript) voor **Native Instruments Maschine 3**.

## Features
- Nederlandse coachflow met 10 genres.
- Per genre: BPM, drumstijl, bass-aanpak, akkoordidee, arrangement.
- Stapmodus met Doel / Actie / Waarom / Luistercheck + `Klaar`/`Probleem`.
- MIDI-generator (drums, bassline, chords, melody) naar `Documents/Maschine Coach Exports`.
- Lokale sessie-opslag met fallback als dependencies ontbreken.

## Installatie (op je eigen machine)
> In deze Codex runtime faalt `npm install` door policy (`403 Forbidden`).
> Voer installatie lokaal uit op je eigen computer.

1. Ga naar de map:
```bash
cd maschine-coach-agent
```
2. Installeer dependencies:
```bash
npm install
```
3. Build:
```bash
npm run build
```
4. Start de desktop-app:
```bash
npm start
```

## Fallback gedrag bij ontbrekende dependencies
- Als `electron-store` ontbreekt: app gebruikt tijdelijke in-memory sessie-opslag.
- Als `midi-writer-js` ontbreekt: MIDI-export toont duidelijke foutmelding in de UI met instructie om `npm install` uit te voeren.

## Codex Online / web preview
- Next.js route: `/maschine-coach-agent`
- Zero-dependency prototype: open `prototype/index.html` direct in browser.
