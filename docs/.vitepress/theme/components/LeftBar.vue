<template>
    <div class="leftbar" id='leftbar'>
        <ul>
            <li v-for="item in componentList"><a :href="item.link">{{item.name}}</a></li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const componentList = [
    {
        name: '按钮',
        link: 'button.html'
    },
    {
        name: '图标',
        link: 'icon.html'
    },
    {
        name: '模态框',
        link: 'modal.html'
    },
    {
        name: '栅格',
        link: 'grid.html'
    },
    {
        name: '提示',
        link: 'tooltip.html'
    },
    {
        name: '标签',
        link: 'tag.html'
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
    left:100px;
    ul{list-style: none}
}
</style>
