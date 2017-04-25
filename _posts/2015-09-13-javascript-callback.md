---
layout: post
title: javascript中的回调函数
date: 2015-09-13 13:43:42
author: clearives
---
回调函数就是把函数作为参数传人另一个函数中，回调本质上是一种设计模式，并且jQuery(包括其他框架)的设计原则遵循了这个模式。一个同步(阻塞)中使用回调的例子，目的是在func1代码执行完成后执行func2。
<!--more-->
```
var func1=function(callback){
    //do something.
    (callback && typeof(callback) === "function") && callback();
}
func1(func2);
var func2=function(){
}
```
异步回调的例子：
```
$(document).ready(callback);
 $.ajax({
       url: "test.html",
       context: document.body
 }).done(function() {
       $(this).addClass("done");
 }).fail(function() {
       alert("error");
 }).always(function() {
       alert("complete");
 });
 ```
 注意的是，ajax请求确实是异步的,不过这请求是由浏览器新开一个线程请求,当请求的状态变更时,如果先前已设置回调,这异步线程就产生状态变更事件放到 JavaScript引擎的处理队列中等待处理。

 ### 回调什么时候执行
 回调函数，一般在同步情境下是最后执行的，而在异步情境下有可能不执行，因为事件没有被触发或者条件不满足。

 ### 回调函数的使用场合
 资源加载：动态加载js文件后执行回调，加载iframe后执行回调，ajax操作回调，图片加载完成执行回调，AJAX等等。DOM事件及Node.js事件基于回调机制(Node.js回调可能会出现多层回调嵌套的问题)。setTimeout的延迟时间为0，这个hack经常被用到，settimeout调用的函数其实就是一个callback的体现链式调用：链式调用的时候，在赋值器(setter)方法中(或者本身没有返回值的方法中)很容易实现链式调用，而取值器(getter)相对来说不好实现链式调用，因为你需要取值器返回你需要的数据而不是this指针，如果要实现链式方法，可以用回调函数来实现setTimeout、setInterval的函数调用得到其返回值。由于两个函数都是异步的，即：他们的调用时序和程序的主流程是相对独立的，所以没有办法在主体里面等待它们的返回值，它们被打开的时候程序也不会停下来等待，否则也就失去了setTimeout及setInterval的意义了，所以用return已经没有意义，只能使用callback。callback的意义在于将timer执行的结果通知给代理函数进行及时处理。
> 经验小提示：

最好保证回调存在且必须是函数引用或者函数表达式：
```
(callback && typeof(callback) === "function") && callback();
 var obj={
    init : function(callback){
    //do something
    if(callback && typeof(callback) === "function") && callback()){
          callback('init...');//回调
 }
 ```
 最后，关于为什么要使用回调函数呢？下面的比喻很生动有趣。

 你有事去隔壁寝室找同学，发现人不在，你怎么办呢？

 方法1，每隔几分钟再去趟隔壁寝室，看人在不；

 方法2，拜托与他同寝室的人，看到他回来时叫一下你；

 前者是轮询，后者是回调。

 那你说，我直接在隔壁寝室等到同学回来可以吗？

 可以啊，只不过这样原本你可以省下时间做其他事，现在必须浪费在等待上了。把原来的非阻塞的异步调用变成了阻塞的同步调用。

 JavaScript的回调是在异步调用场景下使用的，使用回调性能好于轮询。

 更简单一点：

 “我现在出发，到了通知你”
 这是一个异步的流程，“我出发”这个过程中（函数执行），“你”可以去做任何事，“到了”（函数执行完毕）“通知你”（回调）进行之后的流程
