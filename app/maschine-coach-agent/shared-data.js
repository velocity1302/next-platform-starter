export const genres = {
  hiphop: { naam: 'Hiphop', bpm: '82-94 BPM', drumstijl: 'Stevige kick/snare met swing', bassAanpak: 'Ronde sub met korte slides', akkoordIdee: 'Jazzy mineur 7e akkoorden', arrangement: 'Intro - Verse - Hook - Verse - Hook - Outro' },
  trap: { naam: 'Trap', bpm: '130-155 BPM', drumstijl: 'Rollende hi-hats en harde 808', bassAanpak: '808 met glides en stops', akkoordIdee: 'Donkere mineur triads', arrangement: 'Intro - Drop/Hook - Verse - Hook - Bridge' },
  house: { naam: 'House', bpm: '118-126 BPM', drumstijl: '4-on-the-floor kick met open hat', bassAanpak: 'Groovende off-beat baslijn', akkoordIdee: 'Heldere maj7 voicings', arrangement: 'Intro - Build - Drop - Break - Drop - Outro' },
  techno: { naam: 'Techno', bpm: '128-138 BPM', drumstijl: 'Rechte kick met percussie', bassAanpak: 'Repeterende sequencer bass', akkoordIdee: 'Minimale akkoordbeweging', arrangement: 'DJ intro - Groove - Build - Peak - Outro' },
  drum_bass: { naam: 'Drum & Bass', bpm: '168-176 BPM', drumstijl: 'Snelle breakbeats', bassAanpak: 'Reese/sub lagen', akkoordIdee: 'Mineur pads', arrangement: 'Intro - Build - Drop - Breakdown - Drop - Outro' },
  pop: { naam: 'Pop', bpm: '96-124 BPM', drumstijl: 'Strakke punchy kit', bassAanpak: 'Root-note + variatie', akkoordIdee: 'I-V-vi-IV variaties', arrangement: 'Intro - Verse - Pre - Chorus - Bridge - Chorus' },
  ambient: { naam: 'Ambient', bpm: '60-90 BPM', drumstijl: 'Lichte textuur', bassAanpak: 'Lange subtonen', akkoordIdee: 'Open sus2/sus4', arrangement: 'Evoluerende lagen' },
  afrobeat: { naam: 'Afrobeat', bpm: '95-115 BPM', drumstijl: 'Syncopische percussie', bassAanpak: 'Dansende bas', akkoordIdee: 'Pentatonische progressies', arrangement: 'Intro - Groove - Chorus - Groove' },
  reggaeton: { naam: 'Reggaeton', bpm: '88-98 BPM', drumstijl: 'Dembow patroon', bassAanpak: 'Korte punchy sub', akkoordIdee: 'Mineur loop met hook', arrangement: 'Intro - Chorus - Verse - Chorus' },
  lofi: { naam: 'Lo-fi', bpm: '68-84 BPM', drumstijl: 'Dusty drums met swing', bassAanpak: 'Warme eenvoudige bas', akkoordIdee: 'Jazzy 7e/9e akkoorden', arrangement: 'Loop-based structuur' }
};

export const coachSteps = [
  { id: 'project', titel: 'Project instellen', doel: 'Goed startpunt qua tempo en toonhoogte.', actie: 'Open Maschine 3 > New Project > stel BPM in op basis van genre en kies root key.', waarom: 'Correcte basis voorkomt latere timingproblemen.', luistercheck: 'Klinkt metronoom comfortabel?' },
  { id: 'groups', titel: 'Groups maken', doel: 'Overzichtelijke sessie-opbouw.', actie: 'Maak Groups voor Drums, Bass, Chords, Melody en FX.', waarom: 'Sneller werken en makkelijker arrangeren.', luistercheck: 'Is alles logisch gescheiden?' },
  { id: 'drums', titel: 'Drums maken', doel: 'Fundament neerzetten.', actie: 'Programmeer kick/snare/hat patroon en swing.', waarom: 'Drums bepalen energie.', luistercheck: 'Groovet het solo?' },
  { id: 'bass', titel: 'Bass maken', doel: 'Laag en groove koppelen.', actie: 'Schrijf bassline die kick ondersteunt.', waarom: 'Kick + bas vormen de motor.', luistercheck: 'Blijft laag strak?' },
  { id: 'chords', titel: 'Chords/melody maken', doel: 'Emotie en hook toevoegen.', actie: 'Maak simpele akkoordprogressie met lead.', waarom: 'Herkenbaarheid van track.', luistercheck: 'Blijft hook hangen?' },
  { id: 'scenes', titel: 'Scenes bouwen', doel: 'Variatie creëren.', actie: 'Maak minimaal 4 scenes.', waarom: 'Sneller arrangeren.', luistercheck: 'Duidelijke sectie-overgangen?' },
  { id: 'arrangement', titel: 'Arrangement maken', doel: 'Volledige songstructuur.', actie: 'Sleep scenes naar Song view.', waarom: 'Behoudt aandacht van luisteraar.', luistercheck: 'Logische energiecurve?' },
  { id: 'mix', titel: 'Simpele mix', doel: 'Balans verbeteren.', actie: 'Level, EQ-cuts en lichte compressie.', waarom: 'Betrouwbare productie-beslissingen.', luistercheck: 'Hoor je elk element?' },
  { id: 'export', titel: 'Export-check', doel: 'Klaar voor delen.', actie: 'Check headroom en exporteer WAV.', waarom: 'Voorkomt technische verrassingen.', luistercheck: 'Consistent op meerdere systemen?' }
];
