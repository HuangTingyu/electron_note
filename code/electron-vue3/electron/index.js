/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-24 20:09:48
 */
import { app, BrowserWindow } from "electron";

const createMainWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			zoomFactor: 2
		}
	})
	win.loadURL(process.env['VITE_DEV_SERVER_URL']) // VITE官方提供的，项目运行地址
}

app.whenReady().then(res => {
	createMainWindow()
})