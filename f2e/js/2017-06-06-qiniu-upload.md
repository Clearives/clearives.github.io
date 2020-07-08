---
title: "vue使用七牛上传"
date: "2018-09-07"
permalink: "2017-06-06-qiniu-upload"
---


这几天研究vue上传组件，我们知道上传必须要有服务端接受，也就是我们上传的文件必须有落地方，考虑到之前博客里的图片是托管在七牛上面，所以我就试了试将上传的文件放到七牛上面，然后就遇到一堆坑。

这里我们没有用js-sdk那个上传，而是通过生成token，将其通过接口请求从而上传文件。

然后就在七牛的文档里爬坑，感觉好乱。


<!--more-->
 - - -
## Token的获取

> 这里也就是要获取我们的上传凭证

## 1、构造上传策略：

```js
let putPolicy = {
  scope: config.bucket_name,
  deadline:new Date().getTime() + 3600,
  returnBody = `{
      "name": $(fname),
      "size": $(fsize),
      "w": $(imageInfo.width),
      "h": $(imageInfo.height),
      "hash": $(etag)
    }`
  }
```
- 权限（scope），指定上传的目标空间或允许覆盖的指定资源。
- 凭证有效期（deadline），即一个符合Unix时间戳规范的数值，单位为秒，我这里设置为一个小时候失效。
> 注意：因为 Unix 时间戳的创建和验证在不同的服务端进行（在业务服务器创建，在云存储服务器验证），因此开发者的业务服务器需要尽可能校准时间，否则可能出现凭证刚创建就过期等各种奇怪问题。

## 2、将上传策略序列化成为JSON：


```js
let put_policy = JSON.stringify(putPolicy);
```
这里就是Json操作，转成字符串。


## 3、对 JSON 编码的上传策略进行URL 安全的 Base64 编码，得到待签名字符串：

> 这里用到了urlsafeBase64Encode和base64ToUrlSafe，可以参考代码。

```js
let encoded = urlsafeBase64Encode(put_policy)

let urlsafeBase64Encode = function(jsonFlags) {
  let encoded = new Buffer(jsonFlags).toString('base64')
  return base64ToUrlSafe(encoded);
}

let base64ToUrlSafe = function(v) {
  return v.replace(/\//g, '_').replace(/\+/g, '-')
}

```

## 4、使用访问密钥（AK/SK）对上一步生成的待签名字符串计算HMAC-SHA1签名：

> 这里用到了CryptoJS第三方库。

```js
let encoded_signed = hmacSha1(encoded, secretKey)

let hmacSha1 = function(encoded, secretKey) {
  let hash = CryptoJS.HmacSHA1(encoded, secretKey)
  return hash.toString(CryptoJS.enc.Base64)
}
```

## 5、对签名进行URL安全的Base64编码：

```js
let _encoded_signed = base64ToUrlSafe(encoded_signed)
```

## 6、将访问密钥（AK/SK）、_encoded_signed 和 encoded 用英文符号 : 连接起来：

```js
let upload_token = accessKey + ":" + _encoded_signed + ":" + encoded

//eg:
upload_token = 'ctW4bSXWrUuEa_ztjW6bCG9GmpuWA0m-3L7uc83r:8ns6ppdFo5t_wtJylM0y4NBdDPQ=:eyJzY29wZSI6ImNjLWFkbWluLWJ1Y2tldCIsImRlYWRsaW5lIjoxNDk2Njg5MDA5fQ=='

```

到这里我们就得到了token,我一开始是直接使用qiniu库，webpack打包直接提示缺失依赖，不知道什么情况，我就直接按文档一步一步生成了，也很简单。

有了token之后我们就可以发请求了，我这里先用了饿了么的上传组件，配置如下：

```js
<el-upload
  class="avatar-uploader"
  action="http://up-z2.qiniu.com/"
  :show-file-list="false"
  :data='form'
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

data() {
  return {
    imageUrl: '',
    form: {
      token: '',
      key: null
    }
  }
},
//我这里把获取token封装在接口里面了，官方不建议在前端生成。
created() {
  getToken().then((res) => {
    this.form.token = res.data.token;
  });
}

```
到这里就可以正常的上传图片了，上传很粗糙，这里主要是说和七牛的搭配，上面的示例代码可能不能直接运行，可以参考一下，大家也可以在我的<a href="https://github.com/Clearives/cc-admin" target="_blank">github</a>上看,<a href="https://clearives.cc/project/cc-admin/index.html?mock#/component/uploader" target="_blank">Demo示例链接</a>,欢迎指正。

七牛上传api参考：<a href="https://developer.qiniu.com/kodo/manual/1208/upload-token" target="_blank">上传凭证</a>
