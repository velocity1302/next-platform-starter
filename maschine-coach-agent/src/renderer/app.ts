declare global {
  interface Window {
    coachApi: {
      getData: () => Promise<any>;
      saveProgress: (payload: any) => Promise<boolean>;
      generateMidi: (genre: string) => Promise<{ ok: boolean; exportDir?: string; message?: string }>; 
    };
  }
}

let currentStep = 0;
let selectedGenre = 'hiphop';
let steps: any[] = [];
const progress: Record<string, string> = {};

async function init() {
  const { genres, coachSteps, session } = await window.coachApi.getData();
  steps = coachSteps;
  const genreSelect = document.getElementById('genreSelect') as HTMLSelectElement;

  Object.entries(genres).forEach(([key, value]: [string, any]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = value.naam;
    genreSelect.appendChild(option);
  });

  selectedGenre = session.lastGenre ?? 'hiphop';
  genreSelect.value = selectedGenre;
  renderGenre(genres[selectedGenre]);
  renderStep();

  genreSelect.onchange = () => {
    selectedGenre = genreSelect.value;
    renderGenre(genres[selectedGenre]);
  };

  (document.getElementById('readyBtn') as HTMLButtonElement).onclick = async () => {
    progress[steps[currentStep].id] = 'klaar';
    currentStep = Math.min(currentStep + 1, steps.length - 1);
    renderStep();
    await window.coachApi.saveProgress({ genre: selectedGenre, progress });
  };

  (document.getElementById('problemBtn') as HTMLButtonElement).onclick = async () => {
    progress[steps[currentStep].id] = 'probleem';
    renderStep();
    await window.coachApi.saveProgress({ genre: selectedGenre, progress });
  };

  (document.getElementById('midiBtn') as HTMLButtonElement).onclick = async () => {
    const result = await window.coachApi.generateMidi(selectedGenre);
    (document.getElementById('midiStatus') as HTMLElement).textContent = result.ok
      ? `MIDI geëxporteerd naar: ${result.exportDir}`
      : (result.message || 'MIDI export mislukt.');
  };
}

function renderGenre(info: any) {
  document.getElementById('genreInfo')!.innerHTML = `
    <h2>${info.naam}</h2>
    <p><strong>BPM:</strong> ${info.bpm}</p>
    <p><strong>Drumstijl:</strong> ${info.drumstijl}</p>
    <p><strong>Bass-aanpak:</strong> ${info.bassAanpak}</p>
    <p><strong>Akkoordidee:</strong> ${info.akkoordIdee}</p>
    <p><strong>Arrangement:</strong> ${info.arrangement}</p>
  `;
}

function renderStep() {
  const s = steps[currentStep];
  document.getElementById('stepCard')!.innerHTML = `
    <h3>${currentStep + 1}. ${s.titel}</h3>
    <p><strong>Doel:</strong> ${s.doel}</p>
    <p><strong>Actie in Maschine:</strong> ${s.actie}</p>
    <p><strong>Waarom:</strong> ${s.waarom}</p>
    <p><strong>Luistercheck:</strong> ${s.luistercheck}</p>
    <p><strong>Status:</strong> ${progress[s.id] ?? 'open'}</p>
  `;
}

init();
