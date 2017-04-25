---
layout: post
title: 让IE6支持css3，让 IE7、IE8 都支持CSS3
date: 2014-10-11 11:23:19
author: clearives
---
但凡是前端工程师，都知道IE6，IE7，IE8不支持、或者不完全支持CSS3的属性。
CSS3 有很多很强大、绚丽的效果，比如，圆角，阴影，渐变透明，渐变背景，等等。
因为IE6时代，没有什么标准，而因为各种原因，IE6用户几乎不会更新IE版本。
让IE6，IE7，IE8支持CSS3效果，有一个思路就是利用 VML 模拟。
<!--more-->
VML是The Vector Markup Language(矢量可标记语言)，原本是微软自己开发的东西，很强大。
也就是说，IE下面，可以用 VML做出圆角 。半透明、阴影 、渐变背景。
早在去年的时候，就有老外这个思路写成了插件，方便前端程序员开发。。。
它可以让IE6，IE7，IE8 支持 CSS3特效……
之前的 bug 一直有一个严重 bug，今天上去看的时候，官方修正了这个Bug ，并且增加了js 渲染方法（之前是用behavior导入）。
看看如何调用：

### 1、在你的网页加载 PIE.js 脚本。

注意，用IE专用的注释，防止非IE浏览器下载。

代码如下:

```
<!--[if lt IE 10]>
<script type="text/javascript" src="PIE.js"></script>
<![endif]-->
```

### 2、用js 调用：

代码如下:
```
$(function() {
 if (window.PIE) {
 $('.rounded').each(function() { PIE.attach(this); });
 }
});
```

搞定;
——————————————————————————–
在让 IE6支持 CSS3 的所有插件中，这个应该是最好的插件了。

官方实时测试例子：http://css3pie.com/
官方下载：http://css3pie.com/download-latest
