'use client';
import { useMemo, useState } from 'react';
import { coachSteps, genres } from './shared-data';

export default function MaschineCoachAgentPage() {
  const [genre, setGenre] = useState('hiphop');
  const [stepIndex, setStepIndex] = useState(0);
  const [statusMap, setStatusMap] = useState({});
  const genreInfo = genres[genre];
  const step = coachSteps[stepIndex];
  const stepStatus = statusMap[step.id] || 'open';
  const exportItems = useMemo(() => [`${genre}_drums.mid`, `${genre}_bassline.mid`, `${genre}_chords.mid`, `${genre}_melody.mid`], [genre]);

  function markStep(value) {
    setStatusMap((prev) => ({ ...prev, [step.id]: value }));
    if (value === 'klaar') setStepIndex((prev) => Math.min(prev + 1, coachSteps.length - 1));
  }

  return (<main style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem' }}>
    <h1>Maschine Coach Agent (Codex Online)</h1>
    <p>Webversie om direct te openen in Codex Online via <code>/maschine-coach-agent</code>.</p>
    <label>Genre:&nbsp;<select value={genre} onChange={(e) => setGenre(e.target.value)}>{Object.entries(genres).map(([key, value]) => <option key={key} value={key}>{value.naam}</option>)}</select></label>
    <section style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginTop: 12 }}>
      <h2>{genreInfo.naam}</h2><ul><li><strong>BPM:</strong> {genreInfo.bpm}</li><li><strong>Drumstijl:</strong> {genreInfo.drumstijl}</li><li><strong>Bass-aanpak:</strong> {genreInfo.bassAanpak}</li><li><strong>Akkoordidee:</strong> {genreInfo.akkoordIdee}</li><li><strong>Arrangement:</strong> {genreInfo.arrangement}</li></ul>
    </section>
    <section style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginTop: 12 }}>
      <h2>Coachmodus</h2><h3>{stepIndex + 1}. {step.titel}</h3><p><strong>Doel:</strong> {step.doel}</p><p><strong>Actie in Maschine:</strong> {step.actie}</p><p><strong>Waarom:</strong> {step.waarom}</p><p><strong>Luistercheck:</strong> {step.luistercheck}</p><p><strong>Status:</strong> {stepStatus}</p>
      <button onClick={() => markStep('klaar')}>Klaar</button><button onClick={() => markStep('probleem')} style={{ marginLeft: 8 }}>Probleem</button>
    </section>
    <section style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginTop: 12 }}>
      <h2>MIDI-generator (Web)</h2><p>In Codex Online tonen we welke MIDI-bestanden je in de desktopversie automatisch exporteert:</p><ul>{exportItems.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  </main>);
}
