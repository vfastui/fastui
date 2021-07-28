---
page: true
title: Modal
description: Modal Demo
---

# 模态框

## 基本用法

<FButton @click="open">基本用法</FButton>
<FModal v-model:value="showModal" title="This is Title 中文" click-mask-not-close>内容区<template #footer>
<div style="text-align:right">
<FButton type="primary" @click="showModal=false" size="small">关闭</FButton>
</div></template></FModal>

<script setup>
import { ref } from 'vue';
let showModal=ref(false);
const open =()=>{
    showModal.value=true
}
</script>
