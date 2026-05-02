import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import Store from 'electron-store';
import { genres } from './data/genres';
import { coachSteps } from './data/steps';
import { generateMidiPack } from './services/midi';
import { GenreKey } from './types';

const store = new Store<{ lastGenre?: GenreKey; progress?: Record<string, string> }>();

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 760,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, 'renderer/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('coach:get-data', () => ({ genres, coachSteps, session: store.store }));

  ipcMain.handle('coach:save-progress', (_, payload) => {
    store.set('lastGenre', payload.genre);
    store.set('progress', payload.progress);
    return true;
  });

  ipcMain.handle('coach:generate-midi', (_, genre: GenreKey) => {
    const exportDir = generateMidiPack(app.getPath('documents'), genre);
    return exportDir;
  });
});
