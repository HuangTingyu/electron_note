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



### eslint配置

```
npm install -D eslint@9.5.0
```

```
npm install @eslint/js
```



```
npm init @eslint/config@latest
```

选项如下，

第一个选“problem”

```
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser                                           The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...

up to date in 619ms

39 packages are looking for funding
  run `npm fund` for details
Successfully created D:\00git\electron_note\code\eslint.config.mjs file.

```



最后项目底下会生成一个新文件

```
eslint.config.mjs
```

完成！
