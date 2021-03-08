---
title: "使用Taro开发小程序遇到的问题与解决方案"
date: "2020-09-03"
permalink: "taro-practice-summary"
---


## Taro的引入


之前公司在开发保险项目的时候，我们开发小程序引入了Taro，那会还是1.x的版本，也没有hooks，为什么会用这个框架呢，主要是目前前端主要是技术栈是react，各位成员开发起来也会比较顺畅，由于保险的项目就做了一个版本，并且功能不多，所以第一次使用这个框架的时候，并没有太多的深入，只是实现了需求。最近这2个月，团居客的业务，启动了2个小程序，一个是工具类的，一个是业务类的，这一次，我们引入了Taro2.x，并且页面组件全部采用hooks来写，下面来总结一下这个过程里遇到的一些问题。


## 问题


### 自定义头部导航返回键的问题


当然，如果我们不使用自定义头部，是没有问题的，因为系统以及帮我们设定好了，什么时候是返回，什么时候是回到主页，我们的场景是头部自定义，除了三个Tab栏（当然也是自定义的，只是没有返回键而已），其他都是带返回键和主页按键的，如下图：
![](https://cdn.nlark.com/yuque/0/2020/png/146269/1597312300382-776130b8-3792-4e03-b609-703c25925c87.png#align=left&display=inline&height=158&margin=%5Bobject%20Object%5D&originHeight=158&originWidth=744&size=0&status=done&style=none&width=744)
这样子会有一个问题，就是当我们从别人分享出来的页面打开，返回键就不能正常工作了，因为在小程序里，这是第一个打开的页面，不存在上级页面，因此我们在这个时候把返回键隐藏。


```javascript
const [back, setBack] = useState(false)
useEffect(() => {
  if(Taro.getCurrentPages().length === 1) {   // 判断首次激活小程序的页面
    setBack(false)
  } else {
    setBack(true)
  }
}, [])
```


### 生命周期问题


因为我们全部使用的是hooks来编写代码，所以我们不说传统class组件的实现方式


- useState
当我们单个state使用的时候就是按照语法来使用即可，但是当state是一个对象的时候，我们要知道与class 组件中setState 方法不同，useState不会自动合并更新对象。你可以用函数式的setState结合展开运算符来达到合并更新对象的效果。



```javascript
// Reference src/pages/house/rentHouse/detail/index.jsx
const toggle = () => {
  setState(prevState => {
    return { ...prevState, ...{ showCommunityOverviewAll: !prevState.showCommunityOverviewAll } }
  })
}
```


- useEffect
该hook接收一个包含命令式、且可能有副作用代码的函数，其实在react里，我们很多生命周期都可以用这个hooks来模拟，我们知道，每次setState的时候，会重新调用整个函数，那么useEffect就会被执行，当然这个是可控的，也就是它的第二个参数依赖数组，数组为空，里面的函数只会执行一次，相当于componentDidMount，我们可以在数组里传我们需要控制的state，从而控制函数的执行，包括里面也可以传props的值，相当于实现componentWillReceiveProps的效果。



```javascript
// Reference src/pages/groupHouse/groupTime.jsx
useEffect(() => {
  timeHandler(props.bidCountdown);
  return () => {
    timer && clearInterval(timer);
  };
}, []);
```


- useDidShow
这个相当于小程序里面的onShow,也就是页面显示时触发，大部分页面，尤其是内容页，我们请求数据都可以在这个里面完成，但是，在列表页面，我们发现数据频繁初始化，因为请求了数据，然后页面重置了，导致想看到的东西确看不到，要重新操作一遍，才能看到，所以我们在列表页做的处理是，把请求全部放到useEffect里去，然后加入下拉刷新，也就是初始化的时候请求一次，想更新数据可以下拉请求，非特殊情况，不在每当显示页面的时候触发接口去请求数据。



```javascript
// Reference src/pages/groupHouse/index.jsx
useEffect(() => {
  queryListData({
    ...paging,
    sortType: 0
  });
}, []);
```


- useShareAppMessage
该hook等同于onShareAppMessage页面生命周期钩子，也就是分享配置，这里我们还涉及到一个就是按钮分享，按钮分享有一个问题，就是分享配置一定要写在页面函数里，不能写在组件里面。



```javascript
// Reference src/pages/personal/group/groupItem.jsx
<Button className='more' open-type='share' data-info={{ele}}>
  邀请好友
</Button>

// Reference src/pages/personal/group/index.jsx
useShareAppMessage(res => {
  if (res.from === "button") {
    // 来自页面内转发按钮
    let ele = res.target.dataset.info.ele;
    let _path;
    if (ele.houseSource === 0) {
      _path = `/pages/house/houDetail/groupHouDetail?id=${ele.houseId}`;
    } else if (ele.houseSource === 1) {
      _path = `/pages/house/houDetail/newHouDetail?id=${ele.houseId}`;
    }
    return {
      title: ele.houseTitle,
      path: _path,
      imageUrl: ele.picAddr
    };
  } else {
    return {
      title: "团购房源",
      path: "/pages/groupHouse/index"
    };
  }
});
```


这里面我们Button使用到了2个特殊的参数，一个是open-type='share'，这个参数主要是让按钮可以实现转发功能，还有一个就是data-info，这个主要是动态传参，因为我们邀请分享的时候是分享出去对应列表的当个房源，所以我们必须动态传递参数到分享配置，然后在页面useShareAppMessage里面接受，通过res.target.dataset.info，这样我们就可以实现动态分享，当然这个时候页面的分享按钮我们必须屏蔽，使用Taro.hideShareMenu()。


- 其他的生命周期正常使用即可，目前使用情况一般，没遇到以下特殊的问题



### 代码超过2M，分包


小程序的机制，未使用分包，包大小限制2M，使用分包，总包大小限制16M，单个包限制2M，所以我们采取了分包加载。


```javascript
// Reference src/app.jsx
// 注意，分包必须在同一个文件夹，非包内文件不能放在文件夹内，不然匹配路径出错
subPackages:[
  {
    "root": "pages/personal/",
    "pages": [
      "xxx",
    ]
  },
  {
    "root": "pages/house/",
    "pages": [
      "xxx",
    ]
  }
]
```


### tab切换的时候列表数据问题

![图片](https://cdn.nlark.com/yuque/0/2020/png/146269/1597312300732-e5cadf01-244e-4da0-999e-d88fa0f7b07a.png#align=left&display=inline&height=526&margin=%5Bobject%20Object%5D&originHeight=526&originWidth=748&size=0&status=done&style=none&width=748)
首页这个地方，有三个tab，而且三个tab下面都是请求列表数据，切换的时候会出现数据组装错误，导致渲染出的列表数据有问题，我们必须在点击的时候把列表数据清除，然后再去请求数据。


```javascript
// Reference src/pages/homePage/index.jsx
const cbTabHotHandle = item => {
  if (item.value !== hotSelValue) {
    setHotSelList([]);
    setTimeout(() => {
      setHotSelList(homeData.houseInfoList[Number(item.value)].newHouseVOList);
    }, 100);
    setHotSelValue(item.value);
  }
};
```


### 小程序与H5交互


小程序里面的旅居模块、协议、关于我们等都是采用H5的方式来开发的，因为是现成的，但是我们小程序里面接入H5要注意一些东西：


- webview只能传入一个地址，并且页面会铺面整个界面
- webview的链接地址最好转码解码处理一下
- H5内部与小程序交互（目前用到的就是跳转），H5里面引入wxsdk，然后使用它对应的方法即可。
- webview内H5调试也可以在模拟器上右键调试进入H5页面的调试



```javascript
// webview
function TjkWebView() {
	let url = decodeURIComponent(this.$router.params.url)
	return (
		<WebView src={(url)} />
	)
}

// 使用 
Taro.navigateTo(
  {
    url: `/pages/webview/index?url=${encodeURIComponent(
      "https://www.tuanjuker.com/tjk/wap/app/aboutUs.html"
    )}`
  }
)
```


### 登录拦截


```javascript
// Reference src/utils/request.js
// 这里还存在一个，就是登录成功回到之前页面，刷不刷新的问题，这个后续想方法优化，目前都是特殊处理
if (data && data.code == 10020026) {
    if (options.data) {
        if (options.data.type != 'noNeedLog') { // noNeedLog为了处理一些虽然未登录但不需要跳转的场景
            Taro.navigateTo({
                url: '/pages/login/index'
            })
        }
    } else {
        Taro.navigateTo({
            url: '/pages/login/index'
        })
    }
}
```


### 样式问题


- 伪类使用打包会出现问题，具体啥原因不知道，反正少用不用就行，用标签替代
- 页面底部有固定按钮需留出间距，使用margin在ios上无效，需要使用padding
- 组件内样式必须在组件内引入，在外层引入无效
- ~~多行文本超过显示省略号样无效，网上又说可以，试了几次都不行，单行省略号是正常的（已解决2020-08-13 17:49:56）~~



**解决方案参考**：[https://stackoverflow.com/questions/46152850/webkit-box-orient-styling-disappears-from-styling](https://stackoverflow.com/questions/46152850/webkit-box-orient-styling-disappears-from-styling)


```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
white-space: normal;
```


- 多用flex，少用浮动



### 其他问题


- 组件索引，key不要用index
- 百度统计接入，最新版（V1.9.18）的小程序统计sdk接入，程序没有任何统计请求，V1.9.1是正常的，为此我们把统计换成了阿拉丁
- Taro.login()不能和按钮点击获取手机号同时除非，或出现session失效的问题，必须前置执行即可
- base64位图片保存到相册不能直接跟保存png一样



```javascript
// Reference src/pages/personal/invite/index.jsx
var fileSystemManager = Taro.getFileSystemManager();
var number = Math.random();
fileSystemManager.writeFile({
  filePath: Taro.env.USER_DATA_PATH + "/pic" + number + ".png",
  data: img,
  encoding: "base64",
  success: res => {
    Taro.saveImageToPhotosAlbum(); // 后续代码隐藏
  }
});
```


- 后台小程序码生成，参数只能通过scene传递，而且小程序需上线才能调试，这样页面代码可能需要做一些特殊处理，还有一种方式就是通过中转页来实现，后续实现之后再补上具体改动



## 后续改进优化


- 代码结构优化
- 数据流优化
- H5赋能小程序，尝试接入较为复杂H5，看效果如何？



## 总结


以上是这两个月开发小程序过程中遇到的一些问题，大部分有好的解决方案，还有一些退而求次，解决了， 希望后续可以优化下里面的代码。
