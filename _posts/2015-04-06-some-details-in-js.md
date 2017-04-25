---
layout: post
title: js中的一些细节
date: 2015-04-06 11:46:53
author: clearives
---
在学习js的路上，你一定会踩很多的坑，所以我们有必要把一下学习工作过程中的细节记录下来，下面是一些比较怪异的地方。
<!--more-->
### 函数实参
在一个函数中， arguments是一个特殊的类数组变量，它包含所有传递给它的参数:
```
 function sum() {
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
 }
 sum(1, 2, 3, 4); // 输出 10
```
一个函数通过不同数量的参数调用时，arguments通常用于模拟函数重载。

arguments不是一个真正的数组,它只是一个类数组对象拥有长度属性和索引。如果你想使用数组方法如push或pop,您可以使用jQuery.toArray()或这样的来转换他:
```
var args = Array.prototype.slice.call(arguments, 0);
```
### 对象属性
```
var person = {
    name: 'zxh',
    'my　property': '2ives'
 }
 var prop = 'name';
 console.log(person.name); // -> zxh
 console.log(person['name']) // -> zxh
 console.log(person["name"]) // -> zxh
 console.log(person[prop]) // -> zxh
 console.log(person['my　property']) // -> 2ives
// console.log(person.my　property);// -> 报错
```
给字符串使用单引号或双引号没有真正区别。保持一致是有意义，大家似乎普遍偏好单引号(在大多数键盘上少按一些键)。我们可以使用(点)或[](方括号)操作符访问对象和对象属性，点操作符只接受有效的JavaScript变量名而方括号可以采用任何字符串。
### 等式
真值和假值是等式比较。基本的==(等于)和!=(不等于)操作符只有比较值(不比较类型),例如:
```
1 == 1 // -> true
1 == '1' // -> true
1 == 2 // -> false
```
/// 下面的就奇怪了

```
 '' == false // -> true
 [] == false // -> true
 null == undefined // -> true
```
===(三重等于)和!==(三重不等于?)操作符比较值和类型:
```
 1 === 1 // -> true
 1 === '1' // -> false
 1 === parseInt('1') // -> true
 [] === false // -> false
 null === undefined // -> false
```
对象总是比较他们的引用,所以如果它实际上是相同的对象，这些表达式只会是真。
```
 var person = { name: 'zxh' };
 var newPerson = person;
 person === { name: 'zxh' } // -> false,创建了新对象
 person === newPerson // -> true, 相同的引用
```
为达到一致性和避免遇到很麻烦的错误总是使用===和!==。有时这可能意味着编写更多的代码 (如转换字符串如果你期望得到一个数字),但它会让事情更容易和更可预测。
### this是什么？
在任何函数,this是一个保留字,指的是函数的所有者。例如当调用一个定义在一个对象中的函数,它将是对象本身:
```
var person = {
    name: 'zxh',
    sayHi: function() {
       return 'Hello ' + this.name;
    }
 }
person.sayHi(); // -> 'Hello zxh'
```
this也用在事件处理程序函数中,它指触发这个事件的一个或多个元素:
```
document.getElementById('mydiv').addEventListener('click', function() {
    this.innerHTML = 'mydiv clicked';
 });
```
### this和callback
回调用于任何类型的异步操作。一个常见的陷阱是忘记在任何新的回调过程中你可能会失去原来的this。保持引用您将需要将其存储在一个新的变量里,这样它就可以被引用(通过闭包):

```
$('div').click(function() {
    var self = this;
    $.getJSON('demo.json', function(data) {
       $(self).html(data.text);
    });
});
```
