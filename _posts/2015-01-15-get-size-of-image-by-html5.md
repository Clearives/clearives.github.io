---
layout: post
title: HTML5获取图片真实尺寸
date: 2015-01-15 17:21:57
author: clearives
---
HTML5新增了很多很多的属性，可能有的比较常用，大家都知道，比如说data这种，大家肯定用的也挺多，今天这里要说的两个属性也是HTML5的新属性，它们分别是 naturalWidth 和 naturalHeight。这两个属性的作用主要是用来获取图片元素的真实尺寸。
<!--more-->
我们在页面中插入一张599*424的图片：
```
<img src="16613.jpg"  id="img"alt=""/>
```
然后就是通过js来获取了：
```
window.onload = function () {
    var img = document.getElementById("img");
    var rw = img.naturalWidth;
    var rh = img.naturalHeight;
    console.log(rw+'---------------'+rh);
}
```
然后我们打开控制台可以看到：
![HTML5获取图片真实尺寸](http://7othoq.com1.z0.glb.clouddn.com/2015-01-06115109.png "HTML5获取图片真实尺寸")

发现得到的就是我们图片的宽高。

注意：使用该属性必须在图片完全加载完之后才可以。所以我们在代码里加上了window.onload。

目前在ie 9,Firefox, Chrome, Safari 和Opera都是可以使用的，

如果是不支持的版本浏览器，我们可以用传统方法来进行判断，我们来看一段代码：
```
window.onload = function () {
    var img = document.getElementById("img");
    if (typeof img.naturalWidth == "undefined") {
        // IE 6/7/8
        var i = new Image();
        i.src = img.src;
        var rw = i.width;
        var rh = i.height;
    }
    else {
        // HTML5 browsers
        var rw = img.naturalWidth;
        var rh = img.naturalHeight;
    }
    console.log(rw+'------------'+rh)
}
```
这样子我们就在所有的浏览器中都可以获取到图片的真实宽高了。
