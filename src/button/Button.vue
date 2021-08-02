<template>
    <button
        ref="buttonDom"
        :class="['f-btn', ...getClassName, ...isRounded, ...btnSize, ...isOutline, ...isOneIcon]"
        type="button"
        :disabled="disabled ? 'disabled' : ''"
    >
        <i
            v-if="icon"
            :class="icon"
            class="iconfont f-btn-icon"
            :style="`margin-right: ${$slots.default ? '5px' : ''};`"
        ></i>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'

export default defineComponent({
    props: {
        type: String,
        icon: String,
        disabled: Boolean,
        rounded: Boolean,
        ghost: Boolean,
        size: {
            type: String,
            default: 'normal'
        }
    },
    setup({ type, disabled, rounded, size, ghost, icon }, { slots }) {
        const buttonDom = ref(null)

        const getClassName = computed(() => {
            let color: any = {
                primary: 'f-btn--primary',
                success: 'f-btn--success',
                danger: 'f-btn--danger',
                info: 'f-btn--info',
                warning: 'f-btn--warning',
                text: 'f-btn--text'
            }
            if (!type) return disabled ? ['f-btn--default', 'is-disabled'] : ['f-btn--default']
            if (disabled) return [color[type], 'is-disabled']
            return [color[type]]
        })

        const isOutline = computed(() => {
            return ghost ? ['f-btn--ghost'] : []
        })

        const isRounded = computed(() => {
            return rounded ? ['f-btn--rounded'] : []
        })

        const btnSize = computed(() => {
            const sizeObj: any = {
                mini: 'f-btn--mini',
                small: 'f-btn--small',
                large: 'f-btn--large'
            }
            if (!sizeObj[size]) return []
            return [sizeObj[size]]
        })

        const isOneIcon = computed(() => {
            return icon && !slots.default ? ['f-btn-icon'] : []
        })

        onMounted(() => {
            const dom: HTMLElement = buttonDom.value as any
            !disabled && dom.removeAttribute('disabled')
        })
        return {
            getClassName,
            buttonDom,
            isRounded,
            btnSize,
            isOneIcon,
            isOutline
        }
    }
})
</script>

<style lang="less">
@import './button.less';
</style>
