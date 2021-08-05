---
page: true
title: Button
description: Button Demo
---
# 按钮

## 基本用法
<FButton>默认</FButton>
<FButton type="primary">Primary</FButton>
<FButton type="success">Success</FButton>
<FButton type="warning">Warning</FButton>
<FButton type="danger">Danger</FButton>
<FButton type="text">文字Text</FButton>
<FButton type="info">Info</FButton>
```html
<FButton>默认</FButton>
<FButton type="primary">Primary</FButton>
<FButton type="success">Success</FButton>
<FButton type="warning">Warning</FButton>
<FButton type="danger">Danger</FButton>
<FButton type="text">文字Text</FButton>
<FButton type="info">Info</FButton>
```

## 透明背景
`ghost`可以让按钮变成边框样式  

<FButton ghost>默认</FButton>
<FButton type="primary" ghost>Primary</FButton>
<FButton type="success" ghost>Success</FButton>
<FButton type="warning" ghost>Warning</FButton>
<FButton type="danger" ghost>Danger</FButton>
<FButton type="info" ghost>Info</FButton>


## 禁用
`disabled`可以禁用按钮  

<FButton disabled>默认</FButton>
<FButton type="primary" disabled>Primary</FButton>
<FButton type="success" disabled>Success</FButton>
<FButton type="warning" disabled>Warning</FButton>
<FButton type="danger" disabled>Danger</FButton>
<FButton type="info" disabled>Info</FButton>


## 圆角
`rounded`可以变成圆角按钮  

<FButton rounded>默认</FButton>
<FButton type="primary" rounded>P</FButton>
<FButton type="success" rounded>Success</FButton>
<FButton type="warning" rounded>Warning</FButton>
<FButton type="danger" rounded icon="icon-adduser"></FButton>
<FButton type="info" rounded>Info</FButton>

## 尺寸
<FButton size="mini">默认</FButton>
<FButton size="small">默认</FButton>
<FButton size="normal">默认</FButton>
<FButton size="large">默认</FButton>
```html
<FButton size="mini">默认</FButton>
<FButton size="small">默认</FButton>
<FButton size="normal">默认</FButton>
<FButton size="large">默认</FButton>
```

## 图标

- TODO 字体大小需要解决一下 示例先留着 -- normal的大小需要调整 现在icon太小了
- disabled 初始化逻辑问题

<FButton size="mini">Text</FButton>
<FButton size="mini" icon="icon-adduser"></FButton>
<FButton size="mini" icon="icon-wechat-fill">Text</FButton>
<FButton size="mini" icon="icon-wechat-fill">中文</FButton>
<br >
  
<FButton size="small">Text</FButton>
<FButton size="small" icon="icon-adduser"></FButton>
<FButton size="small" icon="icon-adduser">Text</FButton>
<FButton size="small" icon="icon-adduser">中文</FButton>
<br >
  
<FButton size="normal">Text</FButton>
<FButton size="normal" icon="icon-addteam"></FButton>
<FButton size="normal" icon="icon-github-fill">Text</FButton>
<FButton size="normal" icon="icon-github-fill">中文</FButton>
<br >
  
<FButton size="large">Text</FButton>
<FButton size="large" icon="icon-github-fill"></FButton>
<FButton type="primary" size="large" icon="icon-github-fill">Text</FButton>
<FButton type="warning" size="large" icon="icon-apple-fill">中文</FButton>

## 文字按钮

<FButton type="text">Text</FButton>
<FButton type="text" disabled icon="icon-adduser">很好</FButton>
<FButton type="text" icon="icon-adduser" size="large">很好</FButton>





