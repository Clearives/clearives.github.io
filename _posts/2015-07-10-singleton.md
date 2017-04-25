---
layout: post
title: 单例模式
date: 2015-07-10 15:27:34
author: clearives
---
单例模式是javascript中最基本但又最有用的模式之一，它可能比其它任何模式更常用。这种模式提供了一种将代码组织为一个逻辑单元的手段，这个逻辑单元的代码可以通过单一的变量来进行访问。通过确保单例对象只存在一个实例，你就可以确信自己的代码使用的都是同样的全局资源。
<!--more-->
在传统开发工程师眼里，单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。
### 单例的基本结构
在JavaScript里，实现单例的方式有很多种，其中最简单的一个方式是使用对象字面量的方法，其字面量里可以包含大量的属性和方法：
```
var singleton = {
    attribute1: "something",
    attribute2:"something else",
    method1: function () {
        //your code
    },
    method2: function () {
        console.log("哈哈哈哈哈哈");
    }
}
console.log(singleton.attribute1);//something
singleton.method2();//哈哈哈哈哈哈
```
### 单例对象扩展
上面的代码是最基本的，但是没有封装性，还有就是如果以后要扩展该这个对象，要添加自己的私有成员和方法，可以使用闭包在其内部封装这些变量和函数声明。只暴露你想暴露的public成员和方法，代码如下：
```
var singleton = (function () {
    /* 这里声明私有变量和方法 */
    var privateVariable = 'something private';
    function showPrivate() {
        console.log(privateVariable);
    }
    /* 公有变量和方法（可以访问私有变量和方法） */
    return {
        publicMethod: function () {
            showPrivate();
        },
        publicVar: 'the public can see this!'
    };
})();
console.log(singleton.publicVar);//the public can see this!
singleton.publicMethod();//something private
```
上面的代码其实已经不错了，但如果我们想做到只有在使用的时候才初始化，那该如何做呢？为了节约资源的目的，我们可以另外一个构造函数里来初始化这些代码，代码如下：
```
var Singleton = (function () {
    var instantiated;
    function init() {
        /*这里定义单例代码*/
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();
/*调用公有的方法来获取实例:*/
Singleton.getInstance().publicMethod();
```
### 单例的最佳实践
```
var SingletonDemo = (function () {
    function Singleton(args) {
        var args = args || {};
        this.name = 'SingletonDemo';
        this.pointX = args.pointX || 6;
        this.pointY = args.pointY || 10;
    }
    var instance;
    var _static = {
        name: 'SingletonDemo',
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();
var SingletonDemo = SingletonDemo.getInstance({ pointX: 5 });
console.log(SingletonDemo.pointX); //  5
```
从为代码提供命名空间和增强起模块性这个角度来说，你应该多使用单例模式，他几乎适用于所有大大小小的项目，在简单的项目中，你可以只把单例作为命名空间，将自己的代码组织在一个全局变量名下，在大一点、稍微复杂的项目中，单例模式可以把相关代码组织在一起以便如后维护，或者把数据和代码放在一个众所周知的位置，在大型复杂项目中，单例模式可以起到优化作用，反正适用场景很广泛，大家可以合理的使用。
