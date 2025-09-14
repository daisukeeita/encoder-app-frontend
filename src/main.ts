import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile("../index.html");
  mainWindow.on("closed", () => (mainWindow = null));
}

ipcMain.handle("search-vehicle", async (_event, { url, body }) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    return data;
  } catch (error: unknown) {
    return { success: false, error: error };
  }
});

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow == null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
