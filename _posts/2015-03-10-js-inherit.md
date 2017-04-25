---
layout: post
title: "浅谈js中的继承"
date: 2015-03-10 15:25:43
author: clearives
---
![JS继承](http://7othoq.com1.z0.glb.clouddn.com/js-inherit.png "JS继承")
继承是面向对象语言中一个很重要的概念，大部分面向对象语言中都支持接口继承和实现继承两种方式，ECMAScript中没有实现接口继承，它只支持实现继承，这里说的实现继承主要是依靠原型链来继承的，下面来
看看JS中所涉及到的那些继承的方式，主要有以下那么几种。

<!--more-->

### 原型链继承

我们知道每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针，我们让原型对象等于一个类型的实例，此时的原型对象将包含一个指向另一个原型的指针。下面我们看个例子：
```
function SuperBox(){
    this.val = 1;
    this.arr = [1,2];
}
function SubBox(){

}
SubBox.prototype = new SuperBox();      //原型链继承
var box1 = new SubBox();
box1.val = 2;
box1.arr.push(3);
var box2 = new SubBox();
console.log(box1.val+'----'+box1.arr);      //2----1,2,3
console.log(box2.val+'----'+box2.arr);      //1----1,2,3
```
上面这中继承方法就是把父类的实例赋值给子类的原型，从而达到继承的效果，简单粗暴，可是大家发现没有，box1的arr修改之后，box2的arr也随之改变了，因为box1的arr修改默认是去寻找它的实例属性，可是没找到就顺着原型链往上找，就找到了它的原型对象，发现里面有这个属性，就把原型对象的arr属性给改了，这样下面再实例化子类，他们的arr属性都是共享的了。还有一点就是，创建子类实例的时候，无法向父类的构造函数中传参数，所以实际开发中很少单独使用原型链继承。


### 借用构造函数继承

借用构造函数的继承方式思想非常简单，就是在子类构造函数的内部调用父类构造函数，这里完全没有用到父类的原型，说白了就是复制了一份父类的属性给子类来使用，

```
function SuperBox(val){
    this.val = val;
    this.arr = [1,2]
    this.run = function () {
        //code
    }
}
function SubBox(val){
    SuperBox.call(this,val);        //对象冒充
}
var box1 = new SubBox(1);
box1.arr.push(3);
var box2 = new SubBox(2);
console.log(box1.val+'----'+box1.arr);      //1----1,2,3
console.log(box2.val+'----'+box2.arr);      //2----1,2
console.log(box1.run === box2.run);         //false
```

这种方法解决了前一种方法里遇到的不能给父类构造函数传参的问题，解决了子类实例共享父类引用属性的问题，然而我们看一下最后一行输出，发现两个实例都有一个不一样的函数，也就不能实现函数的复用，并且，没实例化一个子类就会对应有一个这样的函数，一多了，内存就GG了，所以这种方法也很少单独使用。


### 组合继承

所谓组合继承，其实就将上面那俩不能单独使用的方法结合在一起使用，达到我们所需要的效果，它的思想就是使用原型链来实现原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承，这样既能让原型上定义的方法达到复用，又可以保证每个实例都拥有自己的属性。

```
function SuperBox(val){
    this.val = val;
    this.arr = [1,2]
}
SuperBox.prototype.run1 = function () {
    //code1
}
SuperBox.prototype.run2 = function () {
    //code2
}
function SubBox(val){
    SuperBox.call(this,val);        //借用构造函数继承      第二次调用父类
}
SubBox.prototype = new SuperBox();  //原型链继承     第一次调用父类
var box1 = new SubBox(1);
box1.arr.push(3);
var box2 = new SubBox(2);
console.log(box1.val+'----'+box1.arr);      //1----1,2,3
console.log(box2.val+'----'+box2.arr);      //2----1,2
console.log(box1.run1 === box2.run1);         //true
console.log(box1.run2 === box2.run2);         //true
```
这种方式来实现继承，既解决了引用属性共享的问题，也可以给父类构造函数传参，同时原型上定义的方法都可以复用，已经很完美了，就是有一点点瑕疵，也就是父类构造函数调用了两次。

### 原型式继承

原型式继承其实没有严格意义上的构造函数，它是通过一个函数来基于已有对象去创建新的对象，从而其中原理里也是原型链继承。

```
function object(o){
    var F = function(){};
    F.prototype = o;
    return new F();
}
function SuperBox(val){
    this.val = val;
    this.arr = [1,2]
}
var box1 = new SuperBox(1);
var box2 = object(box1);
var box3 = object(box1);
box2.pro = 2;
box2.arr.push(3);
console.log(box2.val);      //1
console.log(box2.arr);      //[1,2,3]
console.log(box3.arr);      //[1,2,3]   这里共享了
console.log(box2.pro);      //2
```
这个存在的问题大家应该都知道，一样的，引用属性共享了，所有子类实例都会共享父类的引用属性。


### 寄生式继承

上面那种方法其实并没有什么用，只是为这种方法提供一种思路，这种方式创建一个封装继承过程的函数，该函数在内部可以添加方法增强对象，最后再返回该对象就行，注意这里用到上面那种方法的那个函数，这个方法不是必须的，只要是创建对象，增强对象，返回对象这就过程就是寄生式继承。
```
function object(o){
    var F = function(){};
    F.prototype = o;
    return new F();
}
function SuperBox(val){
    this.val = val;
    this.arr = [1,2]
}

function creat(o){
    var clone = object(o);
    clone.sayhi = function () {
        return ('hi~~~~~~~~~');
    }
    return clone;
}
var box1 = new SuperBox(1);
var box2 = creat(box1);
console.log(box2.val);          //1
console.log(box2.arr);          //[1,2]
console.log(box2.sayhi());      //hi~~~~~~~~~~~
```
同样的，这里也不能实现函数的复用，所以，你懂的，还有下面这种方法。

### 寄生组合式继承

```
function object(o){
    var F = function(){};
    F.prototype = o;
    return new F();
}
function inheritprototype(subClass,SuperClass){
    var prototype = object(SuperClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
}
function SuperBox(val){
    this.val = val;
    this.arr = [1,2]
}
SuperBox.prototype.sayVal = function () {
    console.log('sayVal:'+this.val);
}
function SubBox(val,pro){
    SuperBox.call(this,val);
    this.pro = pro;
}
inheritprototype(SubBox,SuperBox)
SubBox.prototype.sayPro = function () {
    console.log('sayPro:'+this.pro);
}
var box1 = new SubBox(1,2);
box1.arr.push(3);
var box2 = new SubBox(2,3);
console.log(box1.val+'----'+box1.arr);      //1----1,2,3
console.log(box2.val+'----'+box2.arr);      //2----1,2
console.log(box1.sayVal === box2.sayVal)       //true
console.log(box1.sayPro === box2.sayPro)        //true
```
这中方法只调用了一次父类构造函数，避免了每次都创建一次不必要多余的属性，同时，原型链还能保持不变，所以大家都认为这是最理想的继承方法。
基本上所有的继承方式上面都说到了吧，最后一种确实很绕，半天搞不明白，具体大家可以参考红皮书第六章，里面很详细。
