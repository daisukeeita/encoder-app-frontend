import { contextBridge, ipcRenderer } from "electron";
import { electron } from "process";

contextBridge.exposeInMainWorld("api", {
  search: async (url: string, body: object) => {
    return await ipcRenderer.invoke("search-vehicle", {url, body});
  }
})