---
layout: post
title: return的用法
date: 2015-05-15 17:27:34
author: clearives
---
return 表示从被调函数返回到主调函数继续执行，返回时可附带一个返回值，由return后面的参数指定。 return通常是必要的，因为函数调用的时候计算结果通常是通过返回值带出的。 如果函数执行不需要返回计算结果，也经常需要返回一个状态码来表示函数执行的顺利与否（-1和0就是最常用的状态码），主调函数可以通过返回值判断被调函数的执行情况。
<!--more-->
### 从当前函数退出，并从该函数返回一个值
```
return [(][expression][)];
```
使用return语句来终止一个函数的执行，并返回expression的值。
如果表达式被省略，或在函数内没有执行return语句，则把未定义值赋给调用当前函数的表达式。
下面的示例阐释了return语句的用法。
```
function myfunction(arg1, arg2){
   var r;
   r = arg1 * arg2;
   return(r);
}
```
下面的示例阐释了return语句在返回函数的用法。
```
function doWork() {
   return function calculate(y) {
      return y + 1;
   };
}
var func = doWork();
var x = func(5);
document.write(x);
// 6
```
return语句用于从函数返回值。 您不必使用return 语句；程序将在到达函数结尾时返回。 如果未在函数中执行return语句，或如果 return语句没有表达式，则函数返回值 undefined
### 返回控制
无函数结果，语法为：return;在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为.例如,默认情况下点击一个<a>元素,页面会跳转到该元素href属性指定的页, return false 就相当于终止符，return true就相当于执行符。在js中return false的作用一般是用来取消默认动作的。比如你单击一个链接你想取消对象的默认动作就可以return false。首先在js中，我们常用return false来阻止提交表单或者继续执行下面的代码，通俗的来说就是阻止执行默认的行为。
```
function a(){
  if(true)
     return false;
}
```
如果我改成这种
```
function Test(){
    a();
    b();
    c();
}
```
即使a函数返回return false 阻止提交了，但是不影响b(）以及c(）函数的执行。在Test(）函数里调用a()函数，那里面return false 对于Test(）函数来说，只是相当于返回值。而不能阻止Test(）函数执行。总之：return false 只在当前函数有效，不会影响其他外部函数的执行。
