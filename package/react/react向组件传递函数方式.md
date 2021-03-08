---
title: "react向组件传递函数方式"
date: "2020-04-08"
permalink: "react-func-pass"
---

# react向组件传递函数方式

## bind
```js
constructor(props) {
super(props);
this.state = {
  value: 0
};
this.handleClick2 = this.handleClick1.bind(this);
}
```


## 箭头函数
```js
handleClick3 = () => {
  console.log(this);
};
```


## 直接传递

```js
handleClick1() {
  console.log(this);
}
```


```js
<button onClick={this.handleClick1}>click 1</button>
<button onClick={this.handleClick2}>click 2</button>
<button onClick={this.handleClick3}>click 3</button>
```

点击三个按钮输出结果如下图：
![GkrOxI.png](https://s1.ax1x.com/2020/03/28/GkrOxI.png)
