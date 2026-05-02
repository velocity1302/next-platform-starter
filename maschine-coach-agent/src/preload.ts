import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('coachApi', {
  getData: () => ipcRenderer.invoke('coach:get-data'),
  saveProgress: (payload: unknown) => ipcRenderer.invoke('coach:save-progress', payload),
  generateMidi: (genre: string) => ipcRenderer.invoke('coach:generate-midi', genre)
});
