---
layout: post
title: css居中解决方案
date: 2014-12-03 17:48:35
author: clearives
---
在我们的开发过程当中，经常会遇到这种问题，就是要把某个区块水平垂直居中，包括在移动端的开发中也会这样使用，我用的比较多的还是负外边距来实现。下面我们来看几种可以实现的方案。
<!--more-->
首先我们假设一个场景，就是一个外层div里面包含一个小div,要将小div水平垂直居中在外层div上，我们有以下几种方法：

HTML:
```
<div class="container">
    <div class="center">
        这个粗糙又丢失了理性的世界上，人们争吵不休。默尔索对世界存着本能的警惕，和群体保持着适当的距离。
        在和世界不冲突的每时每刻，宁愿保持着冷漠的姿态，也不愿戴上假装热情洋溢的面具，这是默尓索的生活哲学。
    </div>
</div>
```
### 负外边距
这种方法应该是用的最多了的吧，但是使用这种方法的前提是得知道小div的width和height。下面看代码：
```
.container {
   height: 500px;
   width: 500px;
   border: 1px solid #aaa;
   margin: 0 auto;
   position: relative;
 }
 .center {
   height: 200px;
   width: 200px;
   background: #0094ff;
   color: #fff;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-top:-100px;
   margin-left:-100px;
   overflow: hidden;
 }
```
页面效果：
![css居中](http://7othoq.com1.z0.glb.clouddn.com/css_center1.png "css居中")

### 绝对定位
```
.container {
    height: 500px;
    width: 500px;
    border: 1px solid #aaa;
    margin: 0 auto;
    position: relative;
}
.center {
    height: 200px;
    width: 200px;
    background: #0094ff;
    color: #fff;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
}
```
这种方法的工作原理：

- 在普通内容流（normal content flow）中，margin:auto的效果等同于margin-top:0;margin-bottom:0。
- position:absolute使绝对定位块跳出了内容流，内容流中的其余部分渲染时绝对定位部分不进行渲染。
- 为块区域设置top: 0; left: 0; bottom: 0; right: 0;将给浏览器重新分配一个边界框，此时该块block将填充其父元素的所有可用空间，父元素一般为body或者声明为position:relative;的容器。
- 给内容块设置一个高度height或宽度width，能够防止内容块占据所有的可用空间，促使浏览器根据新的边界框重新计算margin:auto
- 由于内容块被绝对定位，脱离了正常的内容流，浏览器会给margin-top,margin-bottom相同的值，使元素块在先前定义的边界内居中。
总之： 绝对定位元素不在普通内容流中渲染，因此margin:auto可以使内容在通过top: 0; left: 0; bottom: 0;right: 0;设置的边界内垂直居中。
### Transform
```
.container {
    height: 500px;
    width: 500px;
    border: 1px solid #aaa;
    margin: 0 auto;
    position: relative;
}
.center {
    height: 200px;
    width: 200px;
    background: #0094ff;
    color: #fff;
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    overflow: hidden;
}
```
###  table-cell
```
.container {
    height: 500px;
    width: 500px;
    border: 1px solid #aaa;
    margin: 0 auto;
    position: relative;
    display: table;
}
.table-cell{
    display: table-cell;
    vertical-align: middle;
}
.center {
    height: 200px;
    width: 200px;
    background: #0094ff;
    color: #fff;
    margin: 0 auto;
}
```
注意：使用这种方法要在小div外层加一个类为table-cell的div。这种方法兼容上可能有些问题，不建议使用。
### Flexbox
```
.container {
    height: 500px;
    width: 500px;
    border: 1px solid #aaa;
    margin: 0 auto;
    position: relative;
    display: flex;
}
.center {
    height: 200px;
    width: 200px;
    background: #0094ff;
    color: #fff;
    margin: auto;
}
```
这种方法很简单，可是很遗憾，旧版本浏览器不支持flex。所以建议大家还是多用第一种吧，别的就当个学习去看。至于每种方法的页面效果都是一样的水平垂直居中。
