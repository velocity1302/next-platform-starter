import { GenreGuide, GenreKey } from '../types';

export const genres: Record<GenreKey, GenreGuide> = {
  hiphop: {
    naam: 'Hiphop', bpm: '82-94 BPM', drumstijl: 'Stevige kick/snare met swing', bassAanpak: 'Ronde sub met korte slides', akkoordIdee: 'Jazzy mineur 7e akkoorden', arrangement: 'Intro - Verse - Hook - Verse - Hook - Outro'
  },
  trap: {
    naam: 'Trap', bpm: '130-155 BPM', drumstijl: 'Rollende hi-hats en harde 808', bassAanpak: '808 met glides en stops', akkoordIdee: 'Donkere mineur triads', arrangement: 'Intro - Drop/Hook - Verse - Hook - Bridge'
  },
  house: {
    naam: 'House', bpm: '118-126 BPM', drumstijl: '4-on-the-floor kick met open hat', bassAanpak: 'Groovende off-beat baslijn', akkoordIdee: 'Heldere maj7/mixolydian voicings', arrangement: 'Intro - Build - Drop - Break - Drop - Outro'
  },
  techno: {
    naam: 'Techno', bpm: '128-138 BPM', drumstijl: 'Rechte kick, percussieve loops', bassAanpak: 'Repeterende sequencer bass', akkoordIdee: 'Minimale 1-2 akkoord beweging', arrangement: 'DJ intro - Groove - Build - Peak - Outro'
  },
  drum_bass: {
    naam: 'Drum & Bass', bpm: '168-176 BPM', drumstijl: 'Snelle breakbeats met ghost notes', bassAanpak: 'Reese/sub lagen met modulatie', akkoordIdee: 'Mineur pads met spanning', arrangement: 'Intro - Build - Drop - Breakdown - Drop - Outro'
  },
  pop: {
    naam: 'Pop', bpm: '96-124 BPM', drumstijl: 'Strakke punchy kit', bassAanpak: 'Root-note bas met melodische variatie', akkoordIdee: 'I-V-vi-IV variaties', arrangement: 'Intro - Verse - Pre - Chorus - Verse - Chorus - Bridge - Chorus'
  },
  ambient: {
    naam: 'Ambient', bpm: '60-90 BPM', drumstijl: 'Lichte textuur of geen drums', bassAanpak: 'Lang aangehouden subtonen', akkoordIdee: 'Open sus2/sus4 klanken', arrangement: 'Evoluerende lagen zonder harde secties'
  },
  afrobeat: {
    naam: 'Afrobeat', bpm: '95-115 BPM', drumstijl: 'Syncopische percussie en rimshots', bassAanpak: 'Dansende melodische bas', akkoordIdee: 'Heldere pentatonische progressies', arrangement: 'Intro - Groove - Chorus - Groove - Chorus'
  },
  reggaeton: {
    naam: 'Reggaeton', bpm: '88-98 BPM', drumstijl: 'Dembow patroon centraal', bassAanpak: 'Korte punchy sub op downbeats', akkoordIdee: 'Mineur loop met hook', arrangement: 'Intro - Chorus - Verse - Chorus - Bridge - Chorus'
  },
  lofi: {
    naam: 'Lo-fi', bpm: '68-84 BPM', drumstijl: 'Dusty drums met swing', bassAanpak: 'Warme eenvoudige basnoten', akkoordIdee: '7e/9e jazzy akkoorden', arrangement: 'Loop-based: Intro - Main loop - Variatie - Outro'
  }
};
