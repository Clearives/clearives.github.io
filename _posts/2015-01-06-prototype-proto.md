---
layout: post
title: 'prototype和__proto__'
date: 2015-01-06 17:18:33
author: clearives
---
今天看JQ源码的时候，看这个jQuery.fn.init.prototype = jQuery.fn;的时候，我竟然意识流的想到__proto__去了，既然想起来了，就来说一下吧，加深一下记忆。
<!--more-->
### 概念

prototype是函数的一个属性（每个函数都有一个prototype属性），这个属性是一个指针，指向一个对象。它是显示修改对象的原型的属性。

__proto__是一个对象拥有的内置属性（请注意：prototype是函数的内置属性，__proto__是对象的内置属性），是JS内部使用寻找原型链的属性。

用chrome和FF都可以访问到对象的__proto__属性，IE不可以。

### 对象实例化

先看下面一段代码：
```
var Person = function(name,age){
    this.name  = name;
    this.age = age;
}
Person.prototype.run = function(){
    console.log(this.name+"今年"+this.age+"岁")
}
var p1 = new Person('zxh',23)//实例化对象
p1.run();
console.log(p1.__proto__)
console.log("--------------------")
console.log(Person.prototype)
```
new的过程拆分成以下三步：
(1) var p={}; 也就是说，初始化一个对象p
(2) p.__proto__ = Person.prototype;
(3) Person.call(p); 也就是说构造p，也可以称之为初始化p。

我们执行上面代码，在控制台的结果可以说明：p1.__proto__ === Person.prototype
### __proto__用处
```
var Person = function(){};
Person.prototype.sayName = function() {
    console.log("My Name is zxh");
};
Person.prototype.age = 23;
var p2 = new Person();
//    p2.age = 20;  ->20
p2.sayName();
console.log(p2.age);  ->23
```

p2是一个引用指向Person的对象。我们在Person的原型上定义了一个sayName方法和age属性，当我们执行p2.age时，会先在this的内部查找（也就是构造函数内部），如果没有找到然后再沿着原型链向上追溯。

这里的向上追溯是怎么向上的呢？这里就要使用__proto__属性来链接到原型（也就是Person.prototype）进行查找。最终在原型上找到了age属性。
