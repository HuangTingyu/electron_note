/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-23 21:49:34
 */

/*
global require,process
*/
const { ipcRenderer, contextBridge } = require('electron')
console.log('preload test')

contextBridge.exposeInMainWorld('tools', {
	ipcSend: (msg) => {
		ipcRenderer.send(msg)
	},
	ipcInvoke: (msg) => {
		return ipcRenderer.invoke(msg)
	}
})


contextBridge.exposeInMainWorld('versions', {
	chrome: () => {
		return process.versions.chrome
	},
	electron: () => {
		return process.versions.electron
	},
	node: () => {
		return process.versions.node
	}
})