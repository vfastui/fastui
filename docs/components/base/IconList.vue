<template>
    <div class="Icon">
        <p>点击图标复制类名到粘贴板 [TODO:未实现]</p>
        <div class="iconList">
            <div v-for="item in iconList" :key="item" class="iconOne">
                <div class="iconBox">
                    <i class="iconfont" :class="item"></i>
                </div>
                <p>{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const iconList = [
            'icon-adduser',
            'icon-deleteteam',
            'icon-deleteuser',
            'icon-addteam',
            'icon-sever',
            'icon-close',
            'icon-minus',
            'icon-alipay',
            'icon-Gitlab-fill',
            'icon-dropbox',
            'icon-apple-fill',
            'icon-twitter',
            'icon-skype-fill',
            'icon-wechat-fill',
            'icon-chrome-fill',
            'icon-github-fill',
            'icon-dribbble-circle-fill',
            'icon-IE-circle-fill',
            'icon-audio',
            'icon-zoomin'
        ]
        return {
            iconList
        }
    }
})
</script>

<style scoped lang="less">
.demo-icon {
    & [class^='f-icon'] {
        font-size: 30px;
    }
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
}
.iconList {
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    grid-template-rows: repeat(auto-fill, 120px);
    grid-gap: 15px;
    justify-content: center;
    align-items: center;
    .iconOne {
        box-sizing: border-box;
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        padding: 5px;
        transition: all 0.1s;
        border: 1px solid #eee;
        &:hover {
            background-color: var(--f-primary);
            color: #fff;
            border-color: var(--f-border-color);
        }
        & > div {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            i {
                font-size: 45px;
            }
        }
        p {
            margin: 0;
            font-size: 15px;
        }
    }
}
</style>
