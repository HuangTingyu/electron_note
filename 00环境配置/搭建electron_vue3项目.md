### vue3

```
npm create vue@latest
```

新建vue3项目，起名为`electron-vue3`

安装项目依赖

```
npm install
npm run dev
```



### electron

```
npm install electron@30.0.0
npm install vite-plugin-electron -D
```



配置

首先新增目录`electron` ，新增`index.js`

```js
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
```



修改`vite.config.js`

```js
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    electron({
      entry: 'electron/index.js',
      vite: {
        build: {
          outDir:'./dist' //统一electron和vite的打包目录 
        }
      }
    })
  ],
})
```



`npm run dev`试跑一下，看看是否生成了`dist`目录



`package.json` 添加项目入口文件

```
"main": "dist/index.js",
```



