---
title: "module.exports和exports的区别"
date: "2019-04-26"
permalink: "module.exports-and-exports"
---
- [module.exports和exports的区别](#moduleexports%E5%92%8Cexports%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [module和exports](#module%E5%92%8Cexports)
  - [require](#require)
# module.exports和exports的区别
> Node模块允许你从被引入文件中选择要暴露给程序的函数和变量。如果模块返回的函数或变 量不止一个，那它可以通过设定exports对象的属性来指明它们。但如果模块只返回一个函数或变量，则可以设定module.exports属性。

## module和exports

```javascript
// demo.js
console.log(module)
console.log(exports)

// 输出
Module {
  id: '.',
  exports: {},
  parent: null,
  filename:
   '.../demo1.js',
  loaded: false,
  children: [],
  paths:
   [ ... ] }
{}

```

module.exports和exports一开始都是一个空对象{},本质上这两个指向的是同一块内存，


## require
> require引入的对象本质上是module.exports。这就产生了一个问题，当 module.exports和exports指向的不是同一块内存时，exports的内容就会失效。

最终在程序里导出的是module.exports。exports只是对module.exports的一个全 局引用，最初被定义为一个可以添加属性的空对象。如果把exports设定为别的，就打破了module.exports和exports之间的 引用关系。可是因为真正导出的是module.exports，那样exports就不能用了，因为 它不再指向module.exports了。如果你想维持那个链接，可以像下面这样让 module.exports再次引用exports。

```javascript
// person.js
module.exports = {name: 'clearives'}
exports = {name: 'Mr、z'}


// demo.js

const person = require('./person')
console.log(person) // {name: 'clearives'}


module.exports = exports = {...};
```

参考：
[Node.js实战](https://github.com/Clearives/clearives.github.io)