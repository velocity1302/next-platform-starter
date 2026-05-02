import fs from 'node:fs';
import path from 'node:path';
import { GenreKey } from '../types';

const NOTE_MAP: Record<GenreKey, string[]> = {
  hiphop: ['C3', 'Eb3', 'G3', 'Bb3'], trap: ['C3', 'D#3', 'G3', 'A#3'], house: ['C3', 'E3', 'G3', 'A3'], techno: ['C3', 'G2', 'Bb2', 'D3'],
  drum_bass: ['D3', 'F3', 'A3', 'C4'], pop: ['C3', 'G3', 'A3', 'F3'], ambient: ['C3', 'G3', 'D4', 'A3'],
  afrobeat: ['C3', 'E3', 'G3', 'B3'], reggaeton: ['C3', 'Eb3', 'G3', 'Ab3'], lofi: ['C3', 'E3', 'G3', 'B3']
};

function getMidiWriter() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('midi-writer-js');
  } catch {
    throw new Error('Package "midi-writer-js" ontbreekt. Voer eerst "npm install" uit.');
  }
}

export function generateMidiPack(baseDir: string, genre: GenreKey): string {
  const MidiWriter = getMidiWriter();
  const exportDir = path.join(baseDir, 'Maschine Coach Exports');
  fs.mkdirSync(exportDir, { recursive: true });

  writeTrack(MidiWriter, path.join(exportDir, `${genre}_drums.mid`), buildDrumTrack(MidiWriter));
  writeTrack(MidiWriter, path.join(exportDir, `${genre}_bassline.mid`), buildBassTrack(MidiWriter, NOTE_MAP[genre]));
  writeTrack(MidiWriter, path.join(exportDir, `${genre}_chords.mid`), buildChordTrack(MidiWriter, NOTE_MAP[genre]));
  writeTrack(MidiWriter, path.join(exportDir, `${genre}_melody.mid`), buildMelodyTrack(MidiWriter, NOTE_MAP[genre]));

  return exportDir;
}

function writeTrack(MidiWriter: any, filePath: string, track: any) {
  const writer = new MidiWriter.Writer([track]);
  fs.writeFileSync(filePath, Buffer.from(writer.buildFile()));
}

function buildDrumTrack(MidiWriter: any) {
  const track = new MidiWriter.Track();
  track.setTempo(120);
  track.addEvent(new MidiWriter.NoteEvent({ pitch: ['C2'], duration: '4', startTick: 0 }));
  track.addEvent(new MidiWriter.NoteEvent({ pitch: ['D2'], duration: '4', startTick: 128 }));
  track.addEvent(new MidiWriter.NoteEvent({ pitch: ['C2'], duration: '4', startTick: 256 }));
  track.addEvent(new MidiWriter.NoteEvent({ pitch: ['D2'], duration: '4', startTick: 384 }));
  return track;
}

function buildBassTrack(MidiWriter: any, notes: string[]) {
  const track = new MidiWriter.Track();
  track.setTempo(120);
  notes.forEach((n) => track.addEvent(new MidiWriter.NoteEvent({ pitch: [n], duration: '4' })));
  return track;
}

function buildChordTrack(MidiWriter: any, notes: string[]) {
  const track = new MidiWriter.Track();
  track.setTempo(120);
  for (let i = 0; i < 4; i++) track.addEvent(new MidiWriter.NoteEvent({ pitch: [notes[0], notes[1], notes[2]], duration: '2' }));
  return track;
}

function buildMelodyTrack(MidiWriter: any, notes: string[]) {
  const track = new MidiWriter.Track();
  track.setTempo(120);
  track.addEvent(notes.map((n) => new MidiWriter.NoteEvent({ pitch: [n], duration: '8' })));
  return track;
}
