---
title: "浏览器拦截弹出的新窗口问题"
date: "2020-07-27"
permalink: "browser-window-open-intercept"
---

日常工作中，我们难免会用到window.open这个api，当然，同步的打开窗口是没有问题的，如果是异步的，那么问题就来了，窗口会被拦截...


## 问题
```js
var parmas = {}
$.ajax(function(){
    url:"/user/confirmPayPwd",
    type:'post',
    data: params,
    success:function(url){
        window.open('https://www.baidu.com')
    }
})
```
![拦截.png](https://i.loli.net/2020/07/27/yAUu7cG8xbaDi26.png)

从图片可以看出，当我们异步调用window.open的时候浏览器保护机制拦截了这个动作，导致我们的流程断了，那么我们如何解决呢。

## 解决方案
```js
var vo = window.open()
var parmas = {}
$.ajax(function(){
    url:"/user/confirmPayPwd",
    type:'post',
    data: params,
    success: function(url){
        // window.open('https://www.baidu.com')
        vo.location.href = 'https://www.baidu.com'
    },
    error: function() {
      vo.close()
    }
})
```

这样操作，我们就可以顺利的解决这个问题了，我们在异步请求之前打开窗口，然后通过保存对象变量跳转到对应的页面，从而实现我们的场景。当然开个窗口在异常情况下会出现打开，然后立马关闭的动作，但是个人感觉这个问题不大，如果介意还可以优化一下，就是针对会拦截的浏览器处理一些，提高一些体验。

## 关于场景
其实这样的场景很多，接入第三方支付的时候都会有这种问题，都是在调用网关接口后跳转到对应的页面继续其他操作，如果因为拦截窗口了，那肯定就不行，所以我们在异步调用window.open的时候可以采用这种方式来处理，那样客户也不会反馈这反馈那了，老板也不会说你了~
