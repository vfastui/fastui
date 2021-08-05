<template>
    <button
        ref="buttonDom"
        :class="['f-btn', ...getThemeName, ...btnSize, ...isRounded, ...isGhost, ...isPureIcon]"
        type="button"
        :disabled="disabled ? 'disabled' : ''"
    >
        <i
            v-if="icon"
            class="iconfont f-btn-icon"
            :class="icon"
            :style="`margin-right: ${$slots.default ? '4px' : ''};`"
        ></i>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        rounded: Boolean,
        ghost: Boolean,
        size: {
            type: String,
            default: 'normal'
        }
    },
    setup({ type, icon, disabled, rounded, size, ghost }, { slots }) {
        const buttonDom = ref(null)

        const getThemeName = computed(() => {
            let theme: Record<string, string> = {
                default: 'f-btn--default',
                primary: 'f-btn--primary',
                success: 'f-btn--success',
                danger: 'f-btn--danger',
                info: 'f-btn--info',
                warning: 'f-btn--warning',
                text: 'f-btn--text'
            }
            if (disabled) return [theme[type], 'is-disabled']
            return [theme[type]]
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

        const isRounded = computed(() => {
            return rounded ? ['f-btn--rounded'] : []
        })

        const isGhost = computed(() => {
            return ghost ? ['f-btn--ghost'] : []
        })

        const isPureIcon = computed(() => {
            return icon && !slots.default ? ['f-btn-icon'] : []
        })

        onMounted(() => {
            const dom: HTMLElement = buttonDom.value as any
            !disabled && dom.removeAttribute('disabled')
        })
        return {
            buttonDom,
            getThemeName,
            btnSize,
            isRounded,
            isGhost,
            isPureIcon
        }
    }
})
</script>

<style lang="less">
@import './button.less';
</style>
