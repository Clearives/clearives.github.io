---
layout: post
title: background-size
date: 2014-12-05 10:54:40
author: clearives
---
css3中的background-size，我们都知道它可以用来设置2个值，一个是背景图的width,另一个是背景图的height,而他值的类型也可以有多种，这些值既可以是像素px，也可以是百分比%或auto，还可以是特定值cover, contain。
<!--more-->
### background-size可以设置2个值，1个为必填，1个为可选。
其中第1个值用于指定背景图的width，第2个值用于指定背景图的height，如果只给background-size设置1个值，则第2个值默认为auto高度自动 (通常默认高度是auto自动,自适用内容而增高,通常如果想高度自适应不用设置) （cover和contain特定值除外）。
```
div{
background-image:url(1.jpg);
background-repeat:no-repeat;
background-size:100px;
}
```
等价于
```
div{
background-image:url(1.jpg);
background-repeat:no-repeat;
background-size:100px auto;
}
```
### background-size的特定值：
cover: 保持图像本身的宽高比例，将图片缩放到正好完全覆盖定义背景的区域；
contain: 保持图像本身的宽高比例，将图片缩放到宽度或高度正好适应定义背景的区域；
cover值：
```
div{
background-image:url(1.png);
background-repeat:no-repeat;
background-size:cover;
}
```
上面代码，背景图片将覆盖整个div区域。

contain值：
```
<span style="color: #000000;">div{
background-image:url(1.png);
background-repeat:no-repeat;
background-size:contain;
}  </span>
```
上面代码，背景图将缩放到宽度或高度的任意一边与div区域适应。

只是简单的分析了一些参数的用法，具体在移动布局开发的时候我们经常会用到百分比来布局，大家可以多去尝试写写。
