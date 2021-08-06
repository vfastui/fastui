<template>
    <div ref="colDom" :class="[`f-col--${span}`, `f-col--offset-${offset}`]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'FCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup() {
        const colDom: any = ref(null)
        const gutter: any = inject('gutter')
        onMounted(() => {
            if (gutter.value) colDom.value.style.padding = `0 ${gutter.value / 2 || 0}px`
        })
        return {
            colDom
        }
    }
})
</script>

<style lang="less">
@import './col.less';
</style>
