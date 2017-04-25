---
layout: post
title: 流式布局中的百分比
date: 2014-12-26 11:35:40
author: clearives
---
曾经的表格布局可能大家都有点陌生了吧，其实我也是基本上没用过，自从web2.0的兴起，网站重构的思想，这让表格布局就这样消失了基本上，表格布局中有用到百分比布局的，在“表格布局”落下帷幕之后，基本上我们都是让网页固定为950-1000px，。如果布局使用了百分比宽度（如90%），耳边很快就能听到抱怨：“我的显示器上效果不太一样。”固定像素尺寸的网页是匹配固定像素尺寸显示器的最简单办法。
<!--more-->
随着移动互联网的发展，我们开始了对各种移动设备的适配，如果说针对每个版本的移动设备都用媒体查询去写一套样式，那是不是显得有点坑，确实坑，目前市面上的移动设备真是各种各样，分辨率也是奇出不穷，乱七八糟，但是，不要紧，我们还有百分比，百分比在移动网页的适配上得到了很好的体现。

可能之前一直做web端的同学会疑惑，全部用百分比，我该怎么分配百分比啊，其实很简单，我们只要牢记一个公式就行：

<center>目标元素宽度÷上下文元素宽度=百分比宽度</center>

打个比方说吧，我们的网页body是1000px的，网站的主题打算使用960px居中的，那么我们的目标元素宽度就是960px，上下文宽度就是1000px，从而我们可以知道百分比宽度为96%。代码可以这样写：
```
body{width: 1000px;}
main{width: 96%;margin: 0 auto;}/* 这里main区域的宽度就是960px */
```
不过好像很多web端的网站目前依然是固定像素布局的，百分比布局在移动端应用就非常明显了，响应式布局的流行，让它无处不在。

下面我们来看一个移动页面的百分比布局：

HTML代码：
```
<div class="content">
    <a href="" class="p1"></a>
    <a href="" class="p2"></a>
    <a href="" class="p3"></a>
    <a href="" class="p4"></a>
    <a href="" class="p5"></a>
    <a href="" class="p6"></a>
    <a href="" class="p7"></a>
    <a href="" class="p8"></a>
</div>
```
css代码:
```
html,body{width:100%; height:100%;background: #191a1e; margin:0; padding:0; overflow:hidden; font-size:14px; font-family:Microsoft YaHei,Helvetica,Arial;}
.content{padding: 5px; height:400px;}
a{display: block;margin: 0 1.5% 5px 0;float: left;text-decoration: none;color: #fff;text-align: center;border-radius: 4px;}
a:first-child{width: 49.25%;height: 185px;background: #666;}
a:nth-child(2){width: 23.875%;height: 80px;background: #00a698;}
a:nth-child(3){width: 23.875%;height: 80px;background: #14ADE5;margin-right: 0;}
a:nth-child(4){width: 49.25%;height: 100px;background: #245433;margin-right: 0;}
a:nth-child(5){width: 23.875%;height: 80px;background: #14ADE5;}
a:nth-child(6){width: 23.875%;height: 80px;background: #00a698;}
a:nth-child(7){width: 23.875%;height: 80px;background: #00ff00;}
a:nth-child(8){width: 23.875%;height: 80px;background: #1e7ec8;margin-right: 0;}
```
颜色是我随便填的，图好丑我就懒得截了，主要是来说一下里面的几个百分比，很明显我们整个网页的宽度就是100%，我们现在来说内容部分，.content部分是所有a元素的父元素，我们假设.content是100%，我们减去一个margin1.5%，分成2部分就是49.25%，然后右边再减去一个1.5%，分成2部分就是23.875%，下面一部分是4个拍在一行，就有3个margin1.5%，再分成三部分就是23.875%。对吧只要记住上面的公式，我们仔细点就能把百分比布局做好，其实就是要稍微做一些运算就好了。这样子得到的网页就任何大小的分辨率上都可以自适应了。这样就在适配上方便多了。
