---
layout: post
title: 随机颜色获取
date: 2015-03-03 10:51:27
author: clearives
---
![随机颜色](http://7othoq.com1.z0.glb.clouddn.com/randomcolor.gif "随机颜色")

在做web开发时，也行我们经常会遇到一些特效问题，不能说这种需求好，也不能说不好,只能说好人所好，就像随机文字颜色，随机背景颜色等等，随机随机吗，当然不是人为去写固定的，而是让系统随机生成，我们知道网页里用的基本上就是 **16进制颜色形式** 和 **RGB颜色形式**，所以今天这里将讨论两种形式的JS实现颜色随机代码。

<!--more-->

### 16进制形式

```
function randomColor(){
    var arr = []
    i =0;
    C = '0123456789ABCDEF';
    while(i++ < 6){
        x=Math.random()*16;
        b=parseInt(x);
        c=C.substr(b,1);
        arr.push(c);
    }
    var color = "#"+ arr.join('');
    return color;
}
```

### RGB形式

```
function randomColor(){
    var r = parseInt(Math.random()*255);
    var g = parseInt(Math.random()*255);
    var b = parseInt(Math.random()*255);
    var color = 'rgb('+r+','+g+','+b+')';
    return color;
}
```

eg:

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box{width: 100px;height: 100px;float: left;margin-right: 10px;font-size: 16px;font-weight: bold;line-height: 100px;text-align: center;}
    </style>
</head>
<body>
<div class="box">颜色随机</div>
<div class="box">颜色随机</div>
<div class="box">颜色随机</div>
<div class="box">颜色随机</div>
<div class="box">颜色随机</div>
<script>
    window.onload = function () {
        var boxList = document.querySelectorAll('.box');
        for(var i=0;i<boxList.length;i++){
            console.log(randomColor());
            (function(index){
                setInterval(function () {
                 // 这里用的是16进制那种形式，另外一种一样的
                    boxList[index].style.background = randomColor();
                    boxList[index].style.color = randomColor();
                },1000);
            })(i)
        }
    }
    function randomColor(){
        var arr = []
        i =0;
        C = '0123456789ABCDEF';
        while(i++ < 6){
            x=Math.random()*16;
            b=parseInt(x);
            c=C.substr(b,1);
            arr.push(c);
        }
        var color = "#"+ arr.join('');
        return color;
    }
</script>
</body>
</html>
```
打开这个页面我们可以看到下面的效果：
![随机颜色](/images/randomcolor.gif "随机颜色")

好了，差不多了。用法基本上就是这样，大家可以在合适的地方用下，有时候还是不错的~
