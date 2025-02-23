## 配置详解

```
new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			zoomFactor: 2, //调大界面
			nodeIntegration: true, // 允许渲染进程使用node模块
			contextIsolation: false // 关闭js隔离，允许渲染进程使用Electron模块
		}
	})
```

不使用预加载脚本

<img src=".\image\nodeIntegration.png" alt="nodeIntegration" style="zoom:50%;" />



### 预加载脚本

<img src=".\image\preload.png" alt="preload" style="zoom:50%;" />







### 代码

`index.js`

`__dirname`是`nodejs`自带的方法，用于获取当前目录路径

```js
webPreferences: {
			zoomFactor: 2, //调大界面
			preload: path.join(__dirname, 'preload.js')//__dirname +'\\preload.js'
		}
```



`preload.js`

定义哪些api能被渲染进程使用

```js
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
```



`index.html`

使用`preload.js` 中定义的api

```js
	// const { ipcRenderer } = require('electron')

	let openDevTools = document.getElementById('open-dev-tools')
	openDevTools.addEventListener('click',()=>{
		// ipcRenderer.send('open-dev-tools')
		window.tools.ipcSend('open-dev-tools')
	})

	let closeDevTools = document.getElementById('close-dev-tools')
	closeDevTools.addEventListener('click',()=>{
		// ipcRenderer.send('close-dev-tools')
		window.tools.ipcSend('close-dev-tools')	
	})

	let getVersionInfo = document.getElementById('get-version-info')
	getVersionInfo.addEventListener('click',()=>{
		document.getElementById('chrome-version').innerText=window.versions.chrome()
		document.getElementById('node-version').innerText=window.versions.node()
		document.getElementById('electron-version').innerText=window.versions.electron()
		document.getElementById('info-container').setAttribute('style','display:block')
		// ipcRenderer.invoke('get-version').then(versions=>{
		// window.tools.ipcInvoke('get-version').then(versions=>{
		// 	document.getElementById('chrome-version').innerText=versions.chrome
		// 	document.getElementById('node-version').innerText=versions.node
		// 	document.getElementById('electron-version').innerText=versions.electron
		// 	document.getElementById('info-container').setAttribute('style','display:block')
		// })	
	})

	console.log(window.versions.chrome())
```

