---
page: true
title: Grid
description: Grid Demo
---

# 栅格

## 基本用法
共24格
<FRow><FCol :span="12"></FCol><FCol :span="12"></FCol></FRow>
```html
<FRow>
    <FCol :span="12"></FCol>
    <FCol :span="12"></FCol>
</FRow>
```
最后一个宽度是4
<FRow><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="4"></FCol></FRow>

nowrap 5个6 等于30的
<FRow :wrap="false"><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol></FRow>
## 间隔gutter
`:gutter="20"`
<FRow :gutter="20" class="gutter-div"><FCol :span="6"><div class="div1"></div></FCol><FCol :span="6"><div class="div2"></div></FCol><FCol :span="6"><div class="div1"></div></FCol><FCol :span="6"><div class="div2"></div></FCol></FRow>
## 偏移offset
`:offset="6"`
<FRow><FCol :span="6" :offset="6"></FCol><FCol :span="6" :offset="6"></FCol></FRow>
## 水平排列方式
`justify` 取值: `start`、`center`、`end`、`space-around`、`space-between`
<FRow justify="start"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="center"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="end"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="space-around"><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol></FRow>
<FRow justify="space-between"><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol></FRow>
## 垂直排列方式
`align` 取值: `top`、`middle`、`bottom`
<FRow align="top" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow align="middle" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow align="bottom" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>



