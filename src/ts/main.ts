import { app, BrowserWindow } from 'electron'

let mainWindow: Electron.BrowserWindow | null

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 768,
    webPreferences: {
      nativeWindowOpen: true
    },
    width: 1074
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

/* Mac Specific things */

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
