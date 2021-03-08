---
title: "ES6学习笔记"
date: "2020-04-03"
permalink: "es6-learn-summary"
---

## 异步

### 简单实现promise

```js
class PromiseM {
    constructor (process) {
        this.status = 'pending'
        this.msg = ''
        process(this.resolve.bind(this), this.reject.bind(this))
        return this
    }
    resolve (val) {
        this.status = 'fulfilled'
        this.msg = val
    }
    reject (err) {
        this.status = 'rejected'
        this.msg = err
    }
    then (fufilled, reject) {
        if(this.status === 'fulfilled') {
            fufilled(this.msg)
        }
        if(this.status === 'rejected') {
            reject(this.msg)
        }
    }
}
```
### promise属于微任务
```js
mt = () => {
  // promise属于微任务, 输出136452
  console.log('mt 001')
  setTimeout(() => {
    console.log('mt 002')
  }, 0)
  new Promise((resolve, reject) => {
    console.log('mt 003')
    resolve()
  }).then(() => {
    console.log('mt 004')
  }).then(() => {
    console.log('mt 005')
  })
  console.log('mt 006')
}
```
### promise中resolve只接收第一个参数，之后的参数会被忽略
```js
_resolve = () => {
  // resolve只接收第一个参数，之后的参数会被忽略
  new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    resolve(3)
  }).then(v => {
    console.log(v)
  })
}
```
### 简单实现promise.all

```js
static all(promises) {
  let num = 0
  const result = []
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('promises must be an array.'))
    }
    promises.forEach((promise) => {
      promise.then((res) => {
        result.push(res)
        if (num >= promises.length - 1) {
          resolve(result)
        } else {
          num++
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}
```
### `关于async await在循环中使用的说明`

> 『参考』：[JavaScript async and await in loops](https://zellwk.com/blog/async-await-in-loops/)
>
> 1. 如果要在循环中使用await，请使用for循环
> 2. 不要使用foreach来遍历await
> 
### async/await

从字面意思上看await就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个promise对象也可以是其他值。很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，`实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码`。
***还有一种理解就是await后面所带的方法返回的就是promise，promise就是同步执行的***

```js
async function async1(){
   console.log('async1 start');
    await async2();
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}

console.log('script start');
async1();
console.log('script end')

// 输出顺序：script start->async1 start->async2->script end->async1 end
```
由于因为async await 本身就是promise+generator的语法糖。所以await后面的代码是microtask，上面的async1函数可以理解为如下代码：
```js
async function async1() {
	console.log('async1 start');
	Promise.resolve(async2()).then(() => {
                console.log('async1 end');
        })
}
```
`promise在then之后才会加入微任务`

> 『参考』：
>
> 1. [setTimeout、Promise、Async/Await 的区别](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/33)
> 2. [Async-Await ≈ Generators + Promises](https://hackernoon.com/async-await-generators-promises-51f1a6ceede2)
> 3. [常见异步面试题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

## decorator装饰器

```js
const decorator1 = (flag = true) => (target) => {
  target.prototype.flag = flag
}
const decorator2 = (str) => (target, name, descriptor) => {
  // console.log(target, name)
  const fn = descriptor.value || descriptor.initializer()
  if (typeof fn === 'function') {
    descriptor.initializer = () => (...args) => {
      console.log(`=============${str}=============`)
      fn.apply(this, args)
      return this
    }
  }
  return descriptor
}
const decorator3 = (target) => {
  // console.log(target)
  target.date = '2020-11-19 11:14:22'
}

@decorator1(true)
class CtyDecorator {
  date = ''

  constructor() {
    console.log('----------decorator learn----------')
  }

  @decorator3
  @decorator2('decorator 2')
  log = (i) => {
    console.log(CtyDecorator.prototype.date, i)
  }
}

export default CtyDecorator

```
>注意：`const fn = descriptor.value || descriptor.initializer()` 这里是为了兼容箭头函数和普通函数的取值，箭头函数必须用后者才可以取到注意：`const fn = descriptor.value || descriptor.initializer()` 这里是为了兼容箭头函数和普通函数的取值，箭头函数必须用后者才可以取到value

