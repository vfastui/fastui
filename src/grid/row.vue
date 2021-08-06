<template>
    <div :class="['f-row', `f-row--justify--${justify}`, `f-row--align--${align}`, getWrap]" :style="getRowStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide, ref } from 'vue'
export default defineComponent({
    name: 'FRow',
    props: {
        justify: {
            type: String,
            default: 'start',
            validator: (value: string) => ['start', 'center', 'end', 'space-between', 'space-around'].includes(value)
        },
        align: {
            type: String,
            default: 'top',
            validator: (value: string) => ['top', 'middle', 'bottom'].includes(value)
        },
        wrap: {
            type: Boolean,
            default: true
        },
        gutter: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const getWrap = computed(() => {
            return props.wrap ? 'f-row--warp' : 'f-row--noWarp'
        })
        provide('gutter', ref(props.gutter))
        const getRowStyle = computed(() => {
            return props.gutter
                ? {
                      marginRight: `-${props.gutter / 2}px`,
                      marginLeft: `-${props.gutter / 2}px`
                  }
                : {}
        })
        return {
            getWrap,
            getRowStyle
        }
    }
})
</script>

<style lang="less">
@import './row.less';
</style>
