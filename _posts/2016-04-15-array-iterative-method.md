---
layout: post
title: 数组的迭代方法
date: 2016-04-15 11:06:47
author: clearives
---
![数组的迭代方法](http://7othoq.com1.z0.glb.clouddn.com/array.jpg "数组的迭代方法")
数组对象就是使用单独的变量名来存储一系列的值,我们可以使用关键词 new 来创建数组对象。Array 对象有concat、join、push、slice、sort等一系列基础的方法,还有forEach、map、filter等等,用到的地方也很多,这里我们主要来说一下数组对象的迭代方法。

<!--more-->

```
var myArr = [1,2,3,4,5]
```
### forEach

forEach方法是遍历数组,遍历每一项的时候可以执行一次你需要执行的函数

```
var myArr = [1,2,3,4,5]
myArr.forEach((item, index) => {console.log(item)})     //1,2,3,4,5

```

### map

map方法是将原数组通过计算产生一个新的数组,映射的概念
```
var myArr = [1,2,3,4,5]
var newArr = myArr.map((item, index) => {return(item * 2)})
console.log(newArr)        //[2,4,6,8,10]
```


### reduce

reduce方法是将数组的前后项计算,并且累计得到一个最终值返回出来
```
var myArr = [1,2,3,4,5]
var result = myArr.reduce((prev, next) => {return(prev + next)})
console.log(result)     //15

```


### filter

filter方法是通过筛选原数组返回一个满足条件的新数组
```
var myArr = [1,2,3,4,5]
var newArr = myArr.filter((item, index) => {return(item > 3)})
console.log(newArr)     //[4,5]
```

### every

every方法是检查数组中的所有项,看是否满足条件,如果全部满足则返回true,否则返回false
```
var myArr = [1,2,3,4,5]
var newArr = myArr.every((item, index) => {return(item > 0)})
console.log(newArr)     //true
```

### some

some方法是检查数组中的所有项,看是否满足条件,如果有一个满足即返回true,否则返回false,它与every有点|| &&的意思
```
var myArr = [1,2,3,4,5]
var newArr = myArr.every((item, index) => {return(item > 0)})
console.log(newArr)     //true
```


大概就上面这几个了,这几个在数据处理中经常用到,有时候容易搞混,其实都是概念性的,记住就好了。
