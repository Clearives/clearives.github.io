---
title: Autocolor获取颜色
date: 2015-11-21 17:59:40
author: clearives
permalink: "autocolor"
---
win7大家都使用过，当我们更换壁纸的时候，我们会发现窗口的颜色会自动的根据壁纸的色调来调整，还有就是之前魅族MX4pro发布会，他所用的flyme里面就提到了一个东西，手机有一个锁屏壁纸，也有一个桌面壁纸，如何让两个背景看起来协调呢，他们同样是那样做到了，让桌面壁纸根据锁屏壁纸的色调来自动适应，话题有点扯远了，昨天群里的一个代码哥给了我们一段实现与之差不多功能的函数，虽然这个函数里设计到的一些颜色的算法不是太完善，但我觉得大家可以参考。
下面我们来看一个例子，就是我们通过Autocolor来得到一个与图片色调相近的rgba颜色。
<!--more-->
HTML：
```html
<div id="box"></div>
```
css:
```css
body{width:100%; height:100%; margin:0; padding:0; overflow:hidden; font-size:14px; font-family:Microsoft YaHei,Helvetica,Arial;}
#box{position: relative;border-radius: 5px;}
img{display: block;position: absolute;top: 35%;left: 50%;margin-top: -34px;margin-left: -34px;}
.section{display:block;text-decoration:none;width: 50%;height: 150px;float: left;box-sizing: border-box;border: 5px solid #FFF;position: relative;border-radius: 10px;}
.txt{margin-top:100px;text-align: center;color: #fff;}
```
javascript：
```js
var imgList = {
        "gameImg":[
            {"src":"images/1.jpg","title":"天天酷跑"},
            {"src":"images/2.jpg","title":"欢乐斗地主"},
            {"src":"images/3.jpg","title":"天天飞车"},
            {"src":"images/4.jpg","title":"全民飞机"},
            {"src":"images/5.jpg","title":"天天爱消除"},
            {"src":"images/6.jpg","title":"节奏大师"},
            {"src":"images/7.jpg","title":"水果忍者"},
            {"src":"images/8.jpg","title":"开心消消乐"}
        ]
    }
    var box = document.getElementById("box");
    for(var i=0; i<imgList.gameImg.length; i++){
        var imgHtml = '<a href="javascript:void(0);" class="section" ><img src='+imgList.gameImg[i].src+'><p class="txt">'+imgList.gameImg[i].title+'</p></a>';
        box.innerHTML+=imgHtml;
    }
    window.onload = function () {
        var section = document.getElementsByClassName("section");
        for(i=0;i<section.length;i++){
            var img = section[i].childNodes[0];
            section[i].style.background = AutoColor(img);
        }
    }
```

大家这时应该注意到了，每个游戏图标下面的背景都不是我定义的，css里面没有，js里面也没有，这都是通过Autocolor这个函数实现的，大致看上去，颜色还满协调，有一些测试的时候颜色确实不搭，因为代码里面对颜色处理的算法不完善，我觉得还不错，供大家学习还是不错的。

最后把Autocolor这个函数的代码贴出来，大家可以自己参考：
```js
(function () {
    var matchCanvas = document.createElement("canvas");
    if (matchCanvas) {
        var matchCtx = matchCanvas.getContext("2d");
        matchCanvas.width = 4;
        matchCanvas.height = 4;
    }
    window.AutoColor = function (image) {
        var r = 0, g = 0, b = 0, skip = 0, pixs;
        if (!matchCtx) {
            return "rgb(255,255,255)";
        }
        matchCtx.drawImage(image, 0, 0, 4, 4);
        try {
            pixs = matchCtx.getImageData(0, 0, 4, 4).data;
        }
        catch (e) {
            return "rgb(255,255,255)";
        }
        for (var i = 0; i < pixs.length; i += 4) {
            if (pixs[i + 3] < 30) {
                skip++;
                continue;
            }
            r += pixs[i] * 4;
            g += pixs[i + 1] * 4;
            b += pixs[i + 2] * 4;
        }
        r = (r / (pixs.length - skip)) | 0;
        g = (g / (pixs.length - skip)) | 0;
        b = (b / (pixs.length - skip)) | 0;
        var max = Math.max(r, g, b);
        if (r == max) {
            r = (r * 1.2) | 0;
            g = (g * 0.8) | 0;
            b = (b * 0.8) | 0;
        }
        else if (g == max) {
            g = (g * 1.2) | 0;
            r = (r * 0.8) | 0;
            b = (b * 0.8) | 0;
        }
        else if (b == max) {
            b = (b * 1.2) | 0;
            g = (g * 0.8) | 0;
            r = (r * 0.8) | 0;
        }
        if (r > 255) r = 255;
        if (g > 255) g = 255;
        if (b > 255) b = 255;
        return "rgb(" + r + "," + g + "," + b + ")";
    };
})();
```
我查了一下，网上好像有类似的代码，大家也可以网上查阅看看，或许还有更精准的获取自适应的颜色函数。
