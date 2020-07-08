---
title: "JS遍历"
date: "2019-07-25"
permalink: "js-traversing"
---

常用的循环遍历方法有for循环，for..in，forEach，map等等...

## 数组遍历

### for
for循环是最基本的遍历。

### forEach
forEach() 方法对数组的每个元素执行一次提供的函数。
```js
let arr = [1,2,3,4]

let _arr = arr.forEach((item) => {
  console.log(item) // 1, 2, 3, 4
})

console.log(_arr) // undefined
```

### map
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果，不改变原数组。

```js
let arr = [1,2,3,4]

let _arr = arr.map((item, i) => {
  console.log(i)  // 0, 1, 2, 3
  return  item + 1
})

console.log(_arr) // [ 2, 3, 4, 5 ]

```


>filter、includes、find、findIndex这几个都是筛选数组的方法，下面一一分析

### filter
filter() 方法创建一个新数组，不改变原数组
```js
let arr = [1,2,3,4]

let _arr = arr.filter((item, i) => {
  return  item > 2
})

console.log(_arr) // [3, 4]

```

### includes
includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

### find
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined，不改变原数组，不创建新数组，只返回满足条件的第一个值。
```js
let arr = [1,2,3,4]

let _arr = arr.find((item, i) => {
  return  item > 2
})

console.log(_arr) // 3
```

### findIndex
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

### some
some() 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值，不改变原数组。
### every
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
>若收到一个空数组，此方法在一切情况下都会返回 true。



## 对象遍历

### Object.keys()
Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。如果对象的键-值都不可枚举，那么将返回由键组成的数组。
```js
let obj = {
  a: 1,
  b: 2
}

let _obj = Object.keys(obj)

console.log(_obj) // ["a", "b"]
```


### for..in
for..in方法循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)。

### Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

```js
let obj = {
  a: 1,
  b: 2
}

let _obj = Object.keys(obj)

console.log(_obj) // ["a", "b"]

for(var i in obj) {
  console.log(i,":",obj[i]);  // a: 1, b: 2
}

let arr = [1, 3, 5]

console.log(Object.getOwnPropertyNames(obj))  // ["a", "b"]
console.log(Object.getOwnPropertyNames(arr))  // ["0", "1", "2", "length"]
```



## JS跳出循环的三种方法(break, return, continue)

### break
break 语句中止当前循环，switch语句或label 语句，并把程序控制流转到紧接着被中止语句后面的语句。

### continue
continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代

```js
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i === 3) {
      continue;
   }
   n += i;
}
```

>与 break 语句的区别在于， continue 并不会终止循环的迭代，而是：

- 在 while 循环中，控制流跳转回条件判断；
- 在 for 循环中，控制流跳转到更新语句。

### return
return语句终止函数的执行，并返回一个指定的值给函数调用者。

```js
function counter() {
  for (var count = 1; ; count++) {  // 无限循环
    console.log(count + "A"); // 执行5次
      if (count === 5) {          
        return;
      }
      console.log(count + "B");  // 执行4次
    }
  console.log(count + "C");  // 永远不会执行
}

counter();
```

参考资料：
[developer.mozilla.org](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)