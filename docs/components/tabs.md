---
page: true
title: Tabs
description: Tabs Component Demo
---

# Tabs 标签页

## 基本用法

<FTabs v-model="activeKey1">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>

<script setup>
import { ref } from 'vue'

const activeKey1 = ref('')
</script>

```html
<FTabs v-model="activeKey1">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>
```

## 卡片样式

<FTabs v-model="activeKey1" type="card">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>


```html
<FTabs v-model="activeKey1" type="card">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>
```

## 禁用

<FTabs v-model="activeKey1">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2" disabled>Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>


```html
<FTabs v-model="activeKey1">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2" disabled>Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>
```

## 位置

<FTabs v-model="activeKey1" position="left" style="height: 200px;">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>


```html
<FTabs v-model="activeKey1" position="left" style="height: 200px;">
    <FTabPane title="Tab 1">Content of Tab Pane 1</FTabPane>
    <FTabPane title="Tab 2">Content of Tab Pane 2</FTabPane>
    <FTabPane title="Tab 3">Content of Tab Pane 3</FTabPane>
</FTabs>
```
