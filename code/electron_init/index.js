/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-09 14:38:58
 */
/*
global require,process,__dirname
*/
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const minWindow = function () {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			zoomFactor: 2, //调大界面
			preload: path.join(__dirname, 'preload.js')//__dirname +'\\preload.js'
			// nodeIntegration: true, // 允许渲染进程使用node模块
			// contextIsolation: false // 关闭js隔离，允许渲染进程使用Electron模块
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
