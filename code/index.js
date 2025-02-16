/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-09 14:38:58
 */
/*
global require,process
*/
const { app, BrowserWindow, ipcMain } = require('electron')
const minWindow = function () {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			zoomFactor: 2, //调大界面
			nodeIntegration: true,
			contextIsolation: false
		}
	})
	win.loadFile('./page/index.html')

	ipcMain.on('open-dev-tools', () => {
		win.webContents.openDevTools()
	})

	ipcMain.on('close-dev-tools', () => {
		win.webContents.closeDevTools()
	})

	ipcMain.handle('get-version', () => {
		return process.versions
	})
}
app.whenReady().then(() => {
	minWindow()
})
