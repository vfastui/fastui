<template>
    <span
        v-if="isShow"
        class="f-tag"
        :class="{
            ['f-tag__' + size]: size !== 'normal',
            ['f-tag--' + type]: type
        }"
        :style="tagStyle || {}"
    >
        <slot></slot>
        <i v-if="closable" class="iconfont icon-close f-tag__closable" @click="closeTag"></i>
    </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType, CSSProperties } from 'vue'
export default defineComponent({
    props: {
        size: {
            type: String,
            default: 'normal',
            validator: (val: string) => ['normal', 'small', 'large'].includes(val)
        },
        type: {
            type: String,
            default: 'default',
            validator: (val: string) =>
                ['default', 'primary', 'success', 'danger', 'info', 'warning', 'black'].includes(val)
        },
        closable: Boolean,
        // eslint-disable-next-line vue/require-default-prop
        tagStyle: Object as PropType<CSSProperties>
    },
    emits: ['close'],
    setup(props, { emit }) {
        const isShow = ref(true)

        const closeTag = () => {
            isShow.value = false
            emit('close', props.name || null)
        }

        return {
            isShow,
            closeTag
        }
    }
})
</script>

<style scoped lang="less">
@import './tag.less';
</style>
