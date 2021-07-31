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
@import '../_themes/light.less';
.f-btn {
    padding: 10px 16px;
    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    touch-action: manipulation;
    outline: 0;
    font-size: 14px;
    line-height: 1;
    transition: all 0.1s;
    box-sizing: border-box;
}
.f-btn-icon.f-btn {
    padding: 12px;
}
.f-btn + .f-btn {
    margin-left: 10px;
}
.f-btn-icon {
    font-size: 14px;
    color: inherit;
}
.f-btn--default {
    background-color: var(--f-background);
    border-color: var(--f-border-color);
    color: var(--f-font-color);
    &:hover,
    &:focus,
    &:active {
        border-color: var(--f-primary);
        color: var(--f-primary);
    }
    &.is-disabled {
        color: lighten(@font-color, 50%);
        border-color: lighten(@font-color, 70%);
    }
}

.f-btn--primary {
    color: var(--f-background);
    background-color: var(--f-primary);
    border-color: var(--f-primary);
    &:hover,
    &:focus,
    &:active {
        background-color: lighten(@primary-color, 10%);
        border-color: lighten(@primary-color, 10%);
    }
    &.is-disabled {
        background-color: lighten(@primary-color, 20%);
        border-color: lighten(@primary-color, 20%);
    }
    &.f-btn--ghost {
        color: var(--f-primary);
        border-color: var(--f-primary);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--f-background);
            border-color: lighten(@primary-color, 20%);
        }
    }
}

.f-btn--success {
    color: #fff;
    background-color: var(--f-success);
    border-color: var(--f-success);
    &:hover,
    &:focus,
    &:active {
        background-color: lighten(@success-color, 10%);
        border-color: lighten(@success-color, 10%);
    }
    &.is-disabled {
        background-color: lighten(@success-color, 30%);
        border-color: lighten(@success-color, 30%);
    }
    &.f-btn--ghost {
        color: var(--f-success);
        border-color: var(--f-success);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--f-background);
            border-color: lighten(@success-color, 10%);
        }
    }
}

.f-btn--warning {
    color: #fff;
    background-color: var(--f-warning);
    border-color: var(--f-warning);
    &:hover,
    &:focus,
    &:active {
        background-color: lighten(@warning-color, 10%);
        border-color: lighten(@warning-color, 10%);
    }
    &.is-disabled {
        background-color: lighten(@warning-color, 20%);
        border-color: lighten(@warning-color, 20%);
    }
    &.f-btn--ghost {
        color: var(--f-warning);
        border-color: var(--f-warning);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--f-background);
            border-color: lighten(@warning-color, 20%);
        }
    }
}

.f-btn--danger {
    color: #fff;
    background-color: var(--f-danger);
    border-color: var(--f-danger);
    &:hover,
    &:focus,
    &:active {
        background-color: lighten(@danger-color, 10%);
        border-color: lighten(@danger-color, 10%);
    }
    &.is-disabled {
        background-color: lighten(@danger-color, 25%);
        border-color: lighten(@danger-color, 25%);
    }
    &.f-btn--ghost {
        color: var(--f-danger);
        border-color: var(--f-danger);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--f-background);
            border-color: lighten(@danger-color, 20%);
        }
    }
}

.f-btn--info {
    color: #fff;
    background-color: var(--f-info);
    border-color: var(--f-info);
    &:hover,
    &:focus,
    &:active {
        background-color: lighten(@info-color, 10%);
        border-color: lighten(@info-color, 10%);
    }
    &.is-disabled {
        background-color: lighten(@info-color, 15%);
        border-color: lighten(@info-color, 15%);
    }
    &.f-btn--ghost {
        color: var(--f-info);
        border-color: var(--f-info);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--f-background);
            border-color: lighten(@info-color, 20%);
        }
    }
}

.f-btn--text {
    background-color: transparent;
    color: var(--f-primary);
    border: 0;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 0 !important;
    padding-right: 0 !important;
    &:hover,
    &:focus,
    &:active {
        color: lighten(@primary-color, 10%);
    }
    &.is-disabled {
        color: lighten(@primary-color, 20%);
    }
}
.is-disabled {
    cursor: not-allowed;
}
.f-btn--ghost {
    background-color: #fff;
}
.f-btn--rounded {
    border-radius: 20px;
}
.f-btn--mini {
    padding: 6px 8px !important;
    font-size: 12px !important;
    .f-btn-icon {
        font-size: 12px !important;
    }
}
.f-btn--small {
    padding: 8px 12px !important;
    font-size: 12px !important;
    .f-btn-icon {
        font-size: 12px !important;
    }
}
.f-btn--large {
    padding: 11px 22px !important;
    font-size: 16px !important;
    .f-btn-icon {
        font-size: 16px !important;
    }
}
</style>
