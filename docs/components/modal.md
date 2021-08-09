---
page: true
title: Modal
description: Modal Demo
---

# 模态框

## 基本用法
  - 有滚动条的时候可能有兼容性问题，定位的内容会移动一下 footer的部分还不够智能，刚刚有一个插槽是不够的。

<FButton @click="open">基本用法</FButton>
<FModal v-model="showModal" title="中文和英文">内容区<template #footer>
<div style="text-align:right">
<FButton type="primary" @click="showModal=false" size="small">关闭</FButton>
</div></template></FModal>  

```html
<FButton @click="open">基本用法</FButton>
<FModal v-model="showModal" title="中文和英文">内容区
    <template #footer>
        <div style="text-align:right">
            <FButton type="primary" @click="showModal=false" size="small">关闭</FButton>
        </div>
    </template>
</FModal>
<script setup>import {ref} from 'vue';

let showModal = ref(false);
const open = () => {
    showModal.value = true
}
</script>
```
