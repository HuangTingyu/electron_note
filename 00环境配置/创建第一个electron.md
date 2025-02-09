### nvm

先下载nvm

```
nvm install 20.11.1
```

```
nvm use 20.11.1
```

安装好node环境



### npm

设置npm镜像

```
npm config set registry https://registry.npmmirror.com
```

下载electron

```
npm install -D electron@30.0.0
```



### package.json设置

```
"scripts": {
    "dev": "electron .",
  },
```



### 启动窗口

`index.js`

```js
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
```



```
npm run dev
```



更新代码后，刷新窗口快捷键

```
ctrl+R
```

