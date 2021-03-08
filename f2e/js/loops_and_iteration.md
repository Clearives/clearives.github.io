---
title: "循环与迭代笔记"
date: "2020-09-18"
permalink: "loops_and_iteration"
---

# 循环与迭代

*updated at 2020-11-25*

## `for`循环

```js
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```
**for循环的过程**

> 1. 如果有初始化表达式 `initialExpression`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
> 2. 计算 `condition` 表达式的值。如果 `condition` 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 `condition` 表达式整个都被省略掉了，`condition`的值会被认为是true。
> 3. 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。
如果有更新表达式 `incrementExpression`，执行更新表达式。
> 4. 回到步骤 2。
```js
const str = 'hello'
for (var i = str.length; i--;) {
  console.log(i) // 4, 3, 2, 1, 0
}
```
这里的循环别被`i--`误会了，其实它是`condition`，这里省略的是`incrementExpression`，巧妙的是i--到0的时候条件就是flase了，所以循环结束。

## `do...while`

```js
do
  statement
while (condition);
```
如果 `condition` 为真（true），`statement` 将再次执行。 在每个执行的结尾会进行条件的检查。当 `condition` 为假（false），执行会停止并且把控制权交回给 `do...while` 后面的语句

```js
let i = 5
do {
  console.log(i)  // 5, 4, 3, 2, 1
  i--
} while (i > 0)
```
## `while` 语句
```js
while (condition)
  statement
```
与上面的`do...while`相反，`while`是在执行语句之前判断条件
```js
let i = 5
while (i>0) {
  console.log(i)  // 5, 4, 3, 2, 1
  i--
}
```

## `label` 语句
```js
label :
   statement
```
一个 `label` 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 `label` 标识一个循环， 然后使用 `break` 或者 continue 来指出程序是否该停止循环还是继续循环。
```js
let num = 0
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break
    }
    num++
  }
}
console.log(num)  // 95
// 
let num = 0
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue
    }
    num++
  }
}
console.log(num)  // 99
// 
let num = 0
outPoint:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
       break outPoint
    }
    num++
  }
}
console.log(num) // 55
//
let num = 0
outPoint:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
       continue outPoint
    }
    num++
  }
}
console.log(num) // 95
```

## `break` 语句
```js
break [label];
```
- 当你使用不带 label 的 `break` 时， 它会立即终止当前所在的 `while`，`do-while`，`for`，或者 `switch` 并把控制权交回这些结构后面的语句。
- 当你使用带 label 的 `break` 时，它会终止指定的带标记（label）的语句。

## `continue` 语句
```js
continue [label];
```
- 当你使用不带 label 的 `continue` 时， 它终止当前 `while`，`do-while`，或者 `for` 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 label 的 `continue` 时， 它会应用被 label 标识的循环语句。

## `for...in` 语句
## `for...of` 语句

`for...in`和`for...of` 可以看另一篇文章[for_in_and_for_of.md](for_in_and_for_of.md)-----[文件地址](/Users/zengxianghui/Library/Mobile Documents/iCloud~com~coderforart~iOS~MWeb/Documents/note/frontend/for_in_and_for_of.md)



## 参考

1. [MDN-循环与迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)
2.  [Is using labels in JavaScript bad practice?](https://stackoverflow.com/questions/4906762/is-using-labels-in-javascript-bad-practice)




























