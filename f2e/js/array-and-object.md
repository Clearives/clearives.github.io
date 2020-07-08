---
title: 如何区分是对象还是数组
date: 2017-02-25 12:00:32
author: clearives
permalink: "array-and-object"
---


有时候我们要区分Array和Object,但是无论是对象还是数组,我们用typeof来操作,它返回的都是object,这样的话我们就没法区分了,这样问题就出现了,我们要怎样才能清晰的区分这两种引用类型呢?


<!--more-->

#### 1、constructor

```js
    var arr = [1, 2, 3]
    var obj = {
        name: 'clearives',
        age: 26
    }
    console.log(arr.constructor)    //function Array() { [native code] }
    console.log(obj.constructor)    //function Object() { [native code] }

```

#### 2、toString方法


```js
    var arr = [1, 2, 3]
    var obj = {
        name: 'clearives',
        age: 26
    }
    console.log(Object.prototype.toString.call(arr))    //[object Array]
    console.log(Object.prototype.toString.call(obj))    //[object Object]

```

> 这里我们通过对象原型的toString方法,巧妙的判断出了哪个是对象,哪个是数组,而且这个方法几乎无缺陷。

#### 3、instanceof

```js
    var arr = [1, 2, 3]
    var obj = {
        name: 'clearives',
        age: 26
    }
    console.log(arr instanceof Array)    //true
    console.log(obj instanceof Array)    //false

```


#### 4、length

正常情况下,我们可以通过length方法来判断,因为数组的length是number类型,而对象的length是undefined,所以可以判断,但是我们假设一下,一个对象里面有一个key值为length,而恰好它的值又是number类型,这就出问题了,所以我们一般不通过这种方法来区分数组还是对象。

这里说了四种方法,应该还有其它的方法,但是我就觉得第二种就很好了,也很实用,有兴趣可以去研究一下别的方法。
