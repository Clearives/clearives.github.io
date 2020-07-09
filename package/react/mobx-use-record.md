---
title: "mobx 使用小记"
date: "2019-12-12"
permalink: "mobx-use-record"
---
# mobx 使用

## observable

将 JS 基本数据类型、引用类型、普通对象、类实例、数组和映射，转换为可观察数据

## action

用来修改 observable 的数据的动作，只有 action 和 runInAction 才能修改 observable

## @action 和@action.bound

- @action 保留原始函数的绑定和原型包含。 如果原始函数未绑定，则结果不会，反之亦然。 如果原始函数不在原型中，结果将不会，反之亦然。
- @action.bound 将始终生成一个绑定的函数，该函数位于原型中。

## runInAction

用来在异步的时候执行修改 observable 的数据的动作。例如网络请求后修改数据,这种模式的优势是它鼓励你不要到处写 action，而是在整个过程结束时尽可能多地对所有状态进行修改

## computed

根据现有的 observable 的值或其它计算值衍生出的值。只有在 view 使用了 computed 的值， computed 才会执行计算

## 参考

- [mobx 的`action.bound`和类函数的箭头函数之间的区别？](https://stackoom.com/question/3I5SN/mobx%E7%9A%84-action-bound-%E5%92%8C%E7%B1%BB%E5%87%BD%E6%95%B0%E7%9A%84%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB)
- [Mobx使用详解](https://www.jianshu.com/p/505d9d9fe36a)
- [用故事解读mobx源码](https://segmentfault.com/a/1190000013682735)