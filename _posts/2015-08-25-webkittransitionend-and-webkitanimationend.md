---
layout: post
title: webkittransitionend与webkitanimationend
date: 2015-08-25 20:39:21
author: clearives
---
在CSS 3中，可以使用transition样式属性实现transition动画，使用keyframe样式属性与animation样式属性实现animation动画，。在基于WebKit引擎的浏览器（包括Chrome与Safari）中，有着这两种动画功能相关的webkitTransitionEnd事件与webkitAnimationEnd事件，下面我们来对这两个事件进行介绍。
<!--more-->
### webkitTransitionEnd事件
当CSS 3的transition动画执行结束时，触发webkitTransitionEnd事件；下面看代码：
html:
```
<div class="rect">点击我执行动画</div>
```
css:
```
.rect{width: 100px;height: 100px;background: #00c8d7;transition:all .5s ease-in .1s;}
```
js:
```
window.onload = function(){
    var _rect = document.querySelector('.rect');
    _rect.onclick = function(){
        _rect.style.webkitTransform = 'translateX(300px) rotate(360deg)';
    }
    _rect.addEventListener('webkitTransitionEnd',function(){
        console.log('动画完成!');
        _rect.innerHTML = "动画完成"
    },false)
}
```

在这里我们通过_rect.addEventListener(‘webkitTransitionEnd’,function(){},false)实现webkitTransitionEnd事件。
### webkitAnimationEnd
当CSS 3的animation动画执行结束时，触发webkitAnimationEnd事件；下面看代码：
html:
```
<div class="rect">点击我执行动画</div>
```
css:
```
.rect{width: 100px;height: 100px;background: #00c8d7;transition:all .5s ease-in .1s;}
@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0) ;
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
```
js:
```
window.onload = function(){
    var _rect = document.querySelector('.rect');
    _rect.onclick = function(){
        _rect.style.webkitAnimation = 'rotate 2s';
    }
    _rect.addEventListener('webkitAnimationEnd',function(){
        console.log('动画完成!');
        _rect.innerHTML = "动画完成"
    },false)
}
```
在这里我们通过_rect.addEventListener(‘webkitAnimationEnd’,function(){},false)实现webkitAnimationEnd事件。

上面两个就是css3动画的回调函数，详细大家可以参考代码去写写看。
