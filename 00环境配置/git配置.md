### 配置

上网搜索

```
ssh github
```



继续搜索

如何修改host文件

在host文件末尾补上

```
140.82.113.4 github.com
```



命令行窗口输入

```
ssh -T git@github.com
```

正确结果

```
Hi HuangTingyu! You've successfully authenticated, but GitHub does not provide shell access.
```



尝试git clone



