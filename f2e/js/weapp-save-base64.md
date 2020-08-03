---
title: "微信小程序保存base64图片到本地"
date: "2020-08-03"
permalink: "weapp-save-base64"
---


## 问题
```js
// 保存图片到相册
const imageTempPath = 'xxxxx'
Taro.saveImageToPhotosAlbum({
    filePath: imageTempPath
}).then(res=>{
    console.log(res)
})
```
**注意** saveImageToPhotosAlbum需要用户授权 scope.writePhotosAlbum。

我们知道，当一个有url的图片，我们直接使用上面代码就可以轻松的保存到本地，可是有时候我们的图片会是base64位的数据图片，上面的代码就无效了，那么我们如何解决呢。

## Taro.getFileSystemManager()
这个api官网介绍是说，获取全局唯一的文件管理器。

然后我们就可以这样：
```js 
const saveImage = async () => {
    var fileSystemManager = Taro.getFileSystemManager();
    var number = Math.random();
    fileSystemManager.writeFile({
        filePath: Taro.env.USER_DATA_PATH + "/pic" + number + ".png",
        data: img,
        encoding: "base64",
        success: res => {
        Taro.saveImageToPhotosAlbum({
            filePath: Taro.env.USER_DATA_PATH + "/pic" + number + ".png",
            success: function() {
            Taro.showToast({
                title: "保存图片成功",
                icon: "success",
                duration: 2000
            });
            },
            fail: function(err) {
            console.log(err);
            if (res.errMsg.indexOf("saveImageToPhotosAlbum:fail")) {
                Taro.showToast({
                title: "请在设置中打开相册权限",
                icon: "none",
                duration: 2000
                });
            }
            }
        });
        console.log(res);
        },
        fail: err => {
        console.log(err);
        }
    });
};
```

打开调试工具，发现这样写就可以顺利的保存base64图片了。

其实个人认为还是用canvas去画最好了，也不用去找这些冷门的api，毕竟这base64的图片是后台返的，我们也不好说，只能这样来了，如果要画海报，还是直接前端来，没那么多事。
