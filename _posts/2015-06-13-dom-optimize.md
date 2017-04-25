---
layout: post
title: DOM优化
date: 2015-06-13 17:05:00
author: clearives
---
DOM的访问和操作在前端开发的过程中很常见，是网页应用中很重要的一部分，我们可以通过JS来操作DOM，可是这中间有一座所谓的‘’桥梁‘’，每次操作都需要收费，这就是说每次操作DOM都会影响应用的性能，所以DOM优化在前端开发过程中有很大的必要。
<!--more-->
### 减少DOM访问，尽量在JS端处理更多
```
var box = document.getElementById('box');
console.time('Clearives')
for(var i= 0;i<5000;i++){
    box.innerHTML+='12';
}
console.timeEnd('Clearives');
console.time('Clearives')
var shtml='';
for(var i = 0;i<5000;i++){
     shtml+='12';
}
box.innerHTML=shtml;
console.timeEnd('Clearives');
```
上面的代码里是两种操作DOM的方式，很明显我们可以发现后面那种方式的性能更高，我们应该用后面那种方式。
### 访问元素集合尽量使用局部变量
```
document.getElementsByName()
document.getElementsByClassName()
document.getElementsByTagName_r()
document.images
document.links
document.forms
document.forms[0].elements
```
上面的这些方法和属性返回HTMLCollection 对象，是一种类似数组的列表，但却不是数组，然而它存在一个length属性，可以跟数组一样通过索引访问元素，当我们操作这些元素集合的时候我们可以像下面这样写：
```
var oli = document.getElementsByTagName('li');
for (var i = 0; i < oli.length; i++) {
    oli[i].innerHTML='oli';
}
//使用局部变量
var len = oli.length;
for (var i = 0; i < len; i++) {
    oli[i].innerHTML='oli';
}
```
一般来说，对于任何类型的DOM 访问，如果同一个DOM 属性或方法被访问一次以上，最好使用一个局部变量缓存此DOM 成员。当遍历一个集合时，我们将集合引用存储于局部变量，并在循环之外缓存length 属性。然后，如果在循环体中多次访问同一个集合元素，那么使用局部变量缓存它。所以推荐第二种方式。
### 使用querySelector,querySelectorAll
```
var box=document.querySelector('#box');
var span = box.querySelectorAll('div span');
```
IE8以上的浏览器基本上可以使用这两个选择器，性能有很大的提升。

### 注重重绘和重排版
当浏览器下载网页的所有资源后，会解析文件创建两个内部数据结构，一个是DOM树结构，一个是渲染树。
这里的重排是指改变页面DOM内容，重绘是指浏览器显示内容。
重排版的情况有添加或删除可见的DOM元素，元素位置改变，元素尺寸改变，内容改变，第一次页面渲染，浏览器窗口改变尺寸。
添加顺序
尽量在appenChild前添加操作，将所有要重排的操作处理好，然后添加在父元素上。
### 批量修改，合并DOM操作
```
var box = document.getElementById('box');
box.style.borderLeft = '1px';
box.style.borderRight = '2px';
box.style.padding = '5px';
//使用cssText
var box = document.getElementById('box');
box.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;';
```
上面第二种方法我们将DOM操作合并在一次操作中执行，批量操作，这样会提升很大的性能。
### 缓存布局信息
尽量减少对布局信息的查询次数，查询时将它赋给局部变量，并用局部变量参与计算。
```
//settimeout
box.style.left = 1 + box.offsetLeft + 'px';
box.style.top = 1 + box.offsetTop + 'px';
if (box.offsetLeft >= 500) {
    //code
}
//缓存布局
var L=box.offsetLeft,T=box.offsetTop;
L++;
T++;
box.style.left = L + 'px';
box.style.top = T + 'px';
if (current >= 500) {
    //code
}
```
上面的第二种方式是缓存了布局信息，我们将布局信息赋值给局部变量，然后操作局部变量，会大大提高性能。

### 文档碎片
```
var frag = document.createDocumentFragment();
var oli = document.createElement('li');
frag.appendChild(oli);
document.getElementById('box').appendChild(frag);
```
在文档之外创建并更新一个文档片断，然后将它附加在原始列表上。  只是这个技术运用的不多，大家了解一下就行。

DOM优化在开发中非常的重要，尤其是大型项目中进行DOM优化会有很明显的效果，上面的方式我们可以通过下面代码去测试网页显示性能。
```
 console.time('Clearives')
//you code...
 console.timeEnd('Clearives')
```
大家可以自己把代码放在浏览器上打开控制台查看。
