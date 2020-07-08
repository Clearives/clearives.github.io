---
title: "Github pages"
date: "2019-06-27"
permalink: "github-pages"
---

## 什么是GitHub页面
GitHub是一个共享虚拟主机服务，用于存放使用Git版本控制的软件代码和内容项目，github有一个很有爱的项目，叫做github pages，这个项目是给开发者建立一个私人页面，上面用来分享新颖的想法和自己写的代码。


## 开启Github Pages
首先我们需要注册Github账号，进入[Github](https://github.com)站点，然后新建仓库，仓库名为用户名+github.io，eg(clearives.github.io)，接下来github会默认开启Github pages，然后我们就能将此当做一个静态服务器了，可以在上面提交你想要显示的东西了。

## 开启HTTPS
我们进入前面建立的仓库设置界面，我们可以如下操作 ： 



![开启HTTPS](https://i.loli.net/2019/06/27/5d142df01286697324.jpg)


这里我们看到设置的是自己的域名，而不是github默认给的二级域名，关于域名，我们可以自己申请，然后将其解析到我们Github pages的地址，然后我们即可通过自己的域名访问Github pages了。

此时，HTTPS已经开启。
## HTTP访问不了了
前一步，我们开启了HTTPS，可是当我们直接输域名的时候，发现默认走的HTTP，页面打不开，此时我网上找到的方法是cloudflare，不知道有没有其他方法，暂时还没找到，如果大家知道，希望能告诉我。

这里cloudflare，我们主要做一个301跳转，也就是访问http://clearives.cc，自动跳转到https://clearives.cc，接下来我们这样操作：

首先创建CloudFlare帐户，并添加[网站](clearives.cc)，选择免费套餐吧，哈哈哈，然后我们会得到2个域名服务器，我们将这两个地址替换掉我们域名服务商默认的两个地址，此时我们的界面是：

![Cloudflare is now protecting your site](https://i.loli.net/2019/06/27/5d143071a4c3e92202.png)

然后我们进入page-rules，新增如下规则：

![page-rules.png](https://i.loli.net/2019/06/27/5d1430e7085a352374.png)

> 这里我们需要注意一点，crypto页面ssl设置我们要选择Full或者Full(strict),不然我们的页面会因为重定向过多被浏览器屏蔽。

到这里，我们的重定向已经处理完成了，现在访问http://clearives.cc，自动跳转到https://clearives.cc，nice。

## 其他

整个过程还是比较简单的，希望有兴趣的朋友可以自己试试，网站搭起来，你就可以在上面随意的发挥了，我这个[博客](https://clearives.cc)已经换了4次了，从一开始的wordpress到hexo，再到jelly，再到现在的vuepress，怎么说呢，有时候就想折腾一下，如果有什么问题，或者意见，欢迎大家在下面留言，谢谢。