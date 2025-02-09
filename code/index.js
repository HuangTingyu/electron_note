/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-09 14:38:58
 */
const { app, BrowserWindow } = require('electron')
const minWindow = function () {
	let win = new BrowserWindow({
		width: 800,
		height: 600
	})
	win.loadFile('./page/index.html')
}
app.whenReady().then(() => {
	minWindow()
})
