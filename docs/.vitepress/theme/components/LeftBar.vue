<template>
    <div class="leftbar" id='leftbar'>
        <h3>组件导航</h3>
        <ul>
            <li v-for="item in componentList"><a :href="withBase(item.link)">{{item.name}}</a></li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { withBase } from 'vitepress'
const componentList = [
    {
        name: '按钮',
        link: './components/button.html'
    },
    {
        name: '图标',
        link: './components/icon.html'
    },
    {
        name: '模态框',
        link: './components/modal.html'
    },
    {
        name: '栅格',
        link: './components/grid.html'
    },
    {
        name: '提示',
        link: './components/tooltip.html'
    },
    {
        name: '标签',
        link: './components/tag.html'
    },
]

</script>

<style lang="less">
.leftbar {
    color: #999;
    width: 180px;
    position: fixed;
    font-size: 0.875rem;
    height: 200px;
    top:100px;
    left:300px;
    z-index: 1000;
    ul{list-style: none;padding-left: 5px;}
}

</style>
