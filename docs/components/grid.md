---
page: true
title: Grid
description: Grid Demo
---

# 栅格

## 基本用法
<FRow><FCol :span="12"></FCol><FCol :span="12"></FCol></FRow>

最后一个宽度是4
<FRow><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="4"></FCol></FRow>

## nowrap 5个6 等于30的
<FRow :wrap="false"><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol><FCol :span="6"></FCol></FRow>
## 间隔 gutter
<FRow :gutter="20" class="gutter-div"><FCol :span="6"><div class="div1"></div></FCol><FCol :span="6"><div class="div2"></div></FCol><FCol :span="6"><div class="div1"></div></FCol><FCol :span="6"><div class="div2"></div></FCol></FRow>
## offset
<FRow><FCol :span="6" :offset="6"></FCol><FCol :span="6" :offset="6"></FCol></FRow>
## 水平排列方式
<FRow justify="start"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="center"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="end"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow justify="space-around"><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol></FRow>
<FRow justify="space-between"><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol><FCol :span="5"></FCol></FRow>
## 垂直排列方式
<FRow align="top" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow align="middle" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>
<FRow align="bottom" class="align-div"><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol><FCol :span="4"></FCol></FRow>



