---
layout: post
title: canvas绘制图片、保存图片
date: 2014-11-29 17:55:28
author: clearives
---
canvas这个 HTML 元素是为了客户端矢量图形而设计的。它自己没有行为，但却把一个绘图 API 展现给客户端 JavaScript 以使脚本能够把想绘制的东西都绘制到一块画布上。
<!--more-->
### canvas绘制图片
看了canvas的API的同学应该都知道要在画布上绘制一张图片，我们用到的是canvas元素的drawImage方法：

下面是一个绘制图像的函数：
```
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
}
```
这个函数就不多作解释了，就是一个drawImage函数，如果对参数不是很熟可以去看API。
### canvas保存图片
如果你在canvas画布上绘制的图像已经绘制完成，想保存到本地，其实很简单对吧，右键另存为，这个谁都知道，这里要说的是用一个函数自动保存下来，下面来看代码：

```
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}
```
这段代码就可以很方便的将canvas转变成PNG格式！这些在图片和画布之间转换的技术可能比你想象的要简单的多，对吧。
