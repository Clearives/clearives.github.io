---
layout: post
title: HTML5本地存储
date: 2015-08-04 10:36:48
author: clearives
---
目前主流浏览器都支持localStorage本地存储，而Microsoft从IE8就出人意料的开始支持localStorage。本文将和您一起分享HTML5本地存储localStorage相关知识，通过实例熟悉本地存储的在WEB开发中的应用。
<!--more-->
### localStorage初体验
localStorage的使用非常简单，提供了设置、获取和删除等方法。如：
```
localStorage.setItem("num", "123");//设置存储客户端的键值num的值为123
var foo = localStorage.getItem("num");//获取客户端存储的键值num的值
console.log(foo);
localStorage.removeItem("num");//删除键值
```
我们来分析这段代码，4行代码，我们打开控制台，可以看到打印出123，接下来我们把第4行代码注释，刷新控制台还是123，接下来注释第一行，刷新或者关闭网页重新打开，控制台依然打印出123，说明num一直存储在本地，接下来把第4行取消注释，刷新打印出123，再刷新就打印出null了。说的很直白，就是这么回事。下面来看例子。
### 计数器

```
if(localStorage.pagecount){
        localStorage.pagecount=Number(localStorage.pagecount) +1;
    }else{
        localStorage.pagecount=1;
    }
    document.write("我的历史访问次数: " + localStorage.pagecount + " 次.");
//      localStorage.removeItem("pagecount");//清除记录
```
运行以上代码后，你会发现只要每次刷新页面，访问次数会加1，如果你关掉页面下次打开，还能看到访问次数在增加并且一直保存在你电脑里，直到有一天你使用removeItem(“pagecount”)清空存储的数据。

更多应用继续学习中。。。
