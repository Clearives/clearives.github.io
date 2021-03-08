---
title: "docker笔记"
date: "2020-09-08"
permalink: "docker-note"
---

# docker日常记录

## 虚拟机端口映射
- 27017（mongo端口映射）
- 3000（node服务）

## mongo持久化

```bash
docker run -d -p 27017:27017 -v /opt/docker/volume/mongo/db:/data/db -v /opt/docker/volume/mongo/config:/data/config --name mongodocker mongo:4.2
```





## 宿主机重启导致的问题
[https://stackoverflow.com/questions/34641003/error-checking-tls-connection-error-checking-and-or-regenerating-the-certs](https://stackoverflow.com/questions/34641003/error-checking-tls-connection-error-checking-and-or-regenerating-the-certs)

[boot2docker文件持久化问题](https://serverfault.com/questions/722085/why-does-docker-machine-clear-data-on-restart)



boot2docker配置软连接重启

```bash
mkdir -p /mnt/sda1/_docker/volumes # 只有/mnt/sda1的内容才会被保存（其他位置重启失效）
cd ~
ln -svf /mnt/sda1/_docker/volumes volumes # 创建一个软链接
tar rf /var/lib/boot2docker/userdata.tar volumes # 将此软链接添加至 userdata.tar 文件
```

> 软连接如果指向本地mongo会出现问题，一直起不来

[使用boot2docker.iso来搭建一个超小的VM虚拟机环境](https://linkscue.com/posts/2019-09-18-using-boot2docker-iso-for-vm/)














































