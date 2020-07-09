---
title: "BASE64加/解密"
date: "2019-04-29"
permalink: "BASE64-encryption-decryption"
---
- [BASE64加/解密](#BASE64%E5%8A%A0%E8%A7%A3%E5%AF%86)
  - [js-base64实现](#js-base64%E5%AE%9E%E7%8E%B0)
    - [实现方式](#%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F)
  - [node实现](#node%E5%AE%9E%E7%8E%B0)
    - [实现方式](#%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F-1)
# BASE64加/解密

## js-base64实现
> 在我们React项目中，我们接受到BASE64的字符串，我们需要解密，我们想到的是第三方模块js-base64

### 实现方式

```javascript
/*"use strict";*/
const BASE64 = require('js-base64').Base64;

function formatStatus (status) {
  var decoder = BASE64.decode(status);
  var resultObj = JSON.parse(decoder);
  return resultObj;
}

let result = formatStatus('e2E6MSxiOjJ9')   // {a:1,b:2}
```

## node实现
> Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

### 实现方式

```javascript
/*"use strict";*/
let obj = {a:1,b:2};
//  编码
let base64Str = new Buffer(obj).toString('base64');
//  解码
let result = new Buffer(base64Str, 'base64').toString(); // {a:1,b:2}
```