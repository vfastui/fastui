<template>
    <div ref="colDom" :class="[getCol, getOffset]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject, onMounted } from 'vue'

export default defineComponent({
    name: 'FCol',
    props: {
        span: {
            type: [Number, String],
            default: 24
        },
        offset: {
            type: [Number, String],
            default: 0
        },
        order: Number
    },
    setup({ span, offset, order }) {
        const colDom: any = ref(null)
        const getCol = computed(() => {
            const spanNum = parseInt(span as string)
            if (spanNum >= 24 || spanNum < 1) return 'f-col--24'
            return `f-col--${spanNum}`
        })
        const getOffset = computed(() => {
            const offsetNum = parseInt(offset as string)
            if (offsetNum >= 24 || offsetNum < 1) return ''
            return `f-col--offset-${offsetNum}`
        })
        const gutter: any = inject('gutter')
        const gutterNum = gutter.value
        onMounted(() => {
            if (gutterNum) colDom.value.style.padding = `0 ${gutterNum / 2 || 0}px`
            if (typeof order !== 'undefined') colDom.value.style.order = Math.ceil(order)
        })
        return {
            getCol,
            colDom,
            getOffset
        }
    }
})
</script>

<style lang="less">
@import './col.less';
</style>
