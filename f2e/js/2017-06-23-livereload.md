---
title: "Live​Reload实时刷新网页"
date: "2017-06-23"
permalink: "2017-06-23-livereload"
---

用习惯了webpack的热替换，一下子回到没用webpack的场景，频繁的F5让人烦躁，LiveReload是一款非常棒的插件，可以在浏览器中实时刷新页面，这样就可以做到保存就能立马看到效果。想想用着两块屏幕开发时的场景，可以做到实时刷新，再也不用F5。


<!--more-->
 - - -
### 准备

- 1、下载Sublime Text 3这款编辑器，然后在Sublime安装<a href="https://packagecontrol.io/packages/LiveReload" target="_blank">LiveReload</a>插件。

- 2、在Chrome浏览器安装<a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog" target="_blank">LiveReload</a>插件。

### Sublime Text 3安装LiveReload

> cmd + shift + p打开控制台install packages,搜索LiveReload安装即可，安装完成后进入包设置文件Preferences > Package Settings > LiveReload > Settings User，在里面添加下面这段：

```json
{"enabled_plugins": ["SimpleReloadPlugin","SimpleRefresh"]}
```

### 2、Chrome上安装LiveReload

> 打开chrome的应用程序商店搜索LiveReload安装即可，安装好以后可以在地址栏旁边看到LiveReload图标按钮在浏览器窗口。接着右键单击选择管理扩展程序，把允许访问网址文件这一选项勾选上。



到这里就完成所有配置了，可以尝试打开一个HTML文件，并点击浏览器地址栏旁边的LiveReload按钮，这时看到按钮变成实心的了，然后修改文件即可自动刷新，再也不用F5了。

参考下载：
> Sublime <a href="https://packagecontrol.io/packages/LiveReload" target="_blank">LiveReload</a>插件
> Chrome <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog" target="_blank">LiveReload</a>插件
