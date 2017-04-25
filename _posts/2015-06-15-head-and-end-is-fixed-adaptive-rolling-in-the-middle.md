---
layout: post
title: 头尾固定，中间自适应滚动
date: 2015-06-15 17:10:59
author: clearives
---
我们知道，在很多手机app中，都经常会出现头部或者底部固定，别的部分自适应滚动的情况，一般头部是app的标题部分，底部固定的一般是app导航或者分类什么的，反正就是为了提高用户体验把他们直接固定在那，那么这种页面在移动web上是怎么实现的？其实就是用到的定位。
<!--more-->
我们来看一段代码：

HTML：
```
<div class="header">header</div>
<div class="main">
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
    我擦 <br/>
</div>
<div class="footer">footer</div>
```
css代码：
```
*{ margin:0; padding:0;}
.header{position:fixed;top:0px;left:0px;width:100%;height:40px;line-height:40px;text-align:center;color:#fff;background:#006699;}
.main{position:absolute;top:40px;left:0px;width:100%;height:calc(100% - 80px);background:#00AFEE;overflow: auto;color: #fff;}
.footer{position:fixed;bottom:0px;left:0px;width:100%;height:40px;line-height:40px;text-align:center;color:#fff;background:#006699;}
```
页面效果：
![页面效果](http://7othoq.com1.z0.glb.clouddn.com/gundongbuju.png "页面效果")
这里主要就是css中的position了，然后我们要注意滚动部分一定要加overflow：auto;关于高度计算方面，css中用到了calc这个东西，我想大家应该也明白，不明白大家可以去查一下。
