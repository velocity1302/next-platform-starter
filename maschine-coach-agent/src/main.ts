import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { genres } from './data/genres';
import { coachSteps } from './data/steps';
import { generateMidiPack } from './services/midi';
import { GenreKey } from './types';

type SessionState = { lastGenre?: GenreKey; progress?: Record<string, string> };

function createMemoryStore() {
  let state: SessionState = {};
  return {
    get store() { return state; },
    set(key: keyof SessionState, value: any) { state = { ...state, [key]: value }; }
  };
}

function createSessionStore() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Store = require('electron-store');
    return new Store<SessionState>();
  } catch {
    return createMemoryStore();
  }
}

const store = createSessionStore();

function createWindow() {
  const win = new BrowserWindow({ width: 1100, height: 760, webPreferences: { preload: path.join(__dirname, 'preload.js') } });
  win.loadFile(path.join(__dirname, 'renderer/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('coach:get-data', () => ({ genres, coachSteps, session: store.store }));

  ipcMain.handle('coach:save-progress', (_, payload) => {
    store.set('lastGenre', payload.genre);
    store.set('progress', payload.progress);
    return { ok: true };
  });

  ipcMain.handle('coach:generate-midi', (_, genre: GenreKey) => {
    try {
      const exportDir = generateMidiPack(app.getPath('documents'), genre);
      return { ok: true, exportDir };
    } catch (error) {
      return {
        ok: false,
        message: `MIDI export mislukt. Installeer dependencies en probeer opnieuw. Details: ${(error as Error).message}`
      };
    }
  });
});
