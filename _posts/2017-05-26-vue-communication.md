---
layout: post
title: vue组件通信学习
date: 2017-05-26 12:00:32
author: clearives
---


Vue推荐在构建大型应用时基于组件方式开发，使用组件意味着协同工作，通常父子组件会是这样的关系：组件A中使用了组件B 。它们之间必然需要相互通信：父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件，还有就是不相关的组件之间需要通信，我们要怎么传递数据呢？

我们可以总总体的将组件间通信概括为下面三种：
- 父组件 -> 子组件
- 子组件 -> 父组件
- 组件 -> 组件 （暂且叫它们非关联组件）


<!--more-->



#### 1、父组件 -> 子组件

> 父组件可以通过props与子组件通信

```vue
    //Parent
    <Child1 :child-msg="msg" />

    //Child1
    <p>I'm Parent msg: <span class="cmsg">{{childMsg}}</span></p>

    props: {
      childMsg: {
          type: String,
          default: ''
      }
    }

    //这里我们通过props直接将父组件数据传递给子组件
```

#### 2、子组件 -> 父组件

> 子组件可以通过$emit与父组件通信

```vue
    //Child1
    <el-button @click="callOther">Child1->Other</el-button>

    methods: {
      callOther: function() {
        this.$emit('getChild1',"I'm Child1 msg")
      }
    }

    //Parent
    <p>msg1: <span class="cmsg">{{msg1}}</span></p>

    <Child1 :child-msg="msg" :child-msg1="msg1" :child-msg2="msg2" @getChild1="getChild1"/>

    methods: {
      getChild1: function(msg) {
        this.msg1 = msg
      }
    }

    //这里我们注册了一个getChild1事件，在父组件里@getChild1就可以了

```


#### 3、组件 -> 组件 （暂且叫它们非关联组件）

> 这种情况下可以通过注册监听事件，当然简单情况下这样处理，复杂了就可以引入vuex,vuex的话，我们下次再单独拿出来写。

```vue
    //Child1
    <el-button @click="callChild2">Child1->Child2</el-button>

    methods: {
      callChild2: function() {
        ebus.$emit('getChild1Tochild2',"I'm Child1 msg to child2")
      }
    }

    //Child2
    <p>I'm Child1 -> Child2 msg: <span class="cmsg">{{msgFromChild1}}</span></p>

    methods: {
      getFromChild1: function() {
        let _this = this
        ebus.$on('getChild1Tochild2', function(msg) {
          _this.msgFromChild1 = msg
        })
      }
    }

    //ebus 这是一个桥接vue实例
    import Vue from 'vue'

    let ebus = new Vue()
    export default ebus

    //这里我们创建一个桥接vue实例，然后一个组件上$emit,一个组件上$on,这样就可以达到非相关组件直接通信了

```
> [vue2中箭头函数的使用注意](https://github.com/Clearives/clearives.github.io/issues/3?_blank)

目前基本上就这三种情况，上面的示例代码可能不能直接运行，可以参考一下，大家也可以在我的[github](https://github.com/Clearives/cc-admin?_blank)上看,[Demo示例链接](http://clearives.cc/project/cc-admin/index.html?mock#/collection/communication?_blank),欢迎指正。

在这里推荐一篇相关文章：[Understanding Components Communication in Vue 2.0](http://taha-sh.com/blog/understanding-components-communication-in-vue-20?_blank)
