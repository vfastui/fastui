<template>
    <div
        :id="id"
        ref="fTooltipWrapper"
        class="f-tooltip-wrapper"
        @mouseenter.stop="handleMouseenter"
        @mouseleave.stop="handleMouseleave"
    >
        <slot></slot>
        <transition name="f-tooltip-fade">
            <div
                v-show="isShow"
                ref="fTooltip"
                :class="{
                    'f-tooltip': true,
                    ['f-tooltip__' + theme]: true
                }"
            >
                <template v-if="$slots.tooltip">
                    <slot name="tooltip"></slot>
                </template>
                <template v-else>
                    {{ tooltip }}
                </template>

                <template v-if="showArrow">
                    <div ref="fTooltipArrow" class="f-tooltip-arrow"></div>
                    <div v-if="theme === 'light'" ref="fTooltipArrowLight" class="f-tooltip-arrow__light"></div>
                </template>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, CSSProperties, PropType, onMounted } from 'vue'
import { getUUID } from '@/_utils/utils'

const placementList: string[] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'left-top',
    'left-center',
    'left-bottom',
    'right-top',
    'right-center',
    'right-bottom'
]

export default defineComponent({
    props: {
        id: {
            type: String,
            default: () => getUUID('f-tooltip')
        },
        placement: {
            type: String,
            default: 'top-center',
            validator: (val: string) => placementList.includes(val)
        },
        tooltip: {
            type: String,
            default: '提示内容'
        },
        theme: {
            type: String,
            default: 'dark',
            validator: (val: string) => ['dark', 'light'].includes(val)
        },
        tooltipStyle: Object as PropType<CSSProperties>,
        delayShow: {
            type: Number,
            default: 50,
            validator: (val: number) => val >= 0
        },
        delayHide: {
            type: Number,
            default: 50,
            validator: (val: number) => val >= 0
        },
        showArrow: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const isShow = ref(false)
        let timer: NodeJS.Timer
        const handleMouseenter = () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                isShow.value = true
            }, props.delayShow)
        }

        const handleMouseleave = () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                isShow.value = false
            }, props.delayHide)
        }

        const fTooltipWrapper = ref(null)
        const fTooltip = ref(null)
        const fTooltipArrow = ref(null)
        const fTooltipArrowLight = ref(null)

        let fTooltipWrapperDom: HTMLElement
        let fTooltipDom: HTMLElement
        let fTooltipArrowDom: HTMLElement
        let fTooltipArrowLightDom: HTMLElement

        const getPlacement = computed(() => {
            let placement = props.placement
            const [p1, p2] = placement.split('-')
            const mapPlacement: Record<string, string> = {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left'
            }
            return {
                originP1: p1,
                originP2: p2,
                p1: mapPlacement[p1],
                p2: mapPlacement[p2] || 'center',
                p1IsAtXAxis: ['left', 'right'].includes(p1)
            }
        })

        // 初始化tooltip的位置
        const initPlacement = () => {
            const { originP1, originP2, p1, p2, p1IsAtXAxis } = getPlacement.value
            const distance = p1IsAtXAxis ? fTooltipWrapperDom.offsetWidth : fTooltipWrapperDom.offsetHeight
            const translate = `transform: translate(${p1IsAtXAxis ? '0, -50%' : '-50%, 0'})`
            const yAxis = p1IsAtXAxis ? 'top' : 'left'
            const isDark = props.theme === 'dark'
            let cssText = `${p1}: ${distance + (props.showArrow ? 6 : 3)}px;display: none;`
            let color = isDark ? '#222' : '#fff'
            let arrowCssText = `${p1}: -10px;border-${originP1}-color: ${color};`
            let lightArrowCssText = `${p1}: -10px;border-${originP1}-color: #333;`
            let str1 = `${originP2}: 0px;`
            let str2 = `${originP2}: 10px;`

            str1 = p2 === 'center' ? `${yAxis}: 50%;${translate}` : str1
            str2 = p2 === 'center' ? `${yAxis}: 50%;${translate}` : str2
            cssText += str1
            arrowCssText += str2
            lightArrowCssText += str2
            fTooltipDom.style.cssText = cssText
            if (props.showArrow) {
                fTooltipArrowDom.style.cssText = arrowCssText
                if (!isDark) fTooltipArrowLightDom.style.cssText = lightArrowCssText
            }
        }

        onMounted(() => {
            fTooltipWrapperDom = fTooltipWrapper.value as any
            fTooltipDom = fTooltip.value as any
            fTooltipArrowDom = fTooltipArrow.value as any
            fTooltipArrowLightDom = fTooltipArrowLight.value as any
            initPlacement()
        })

        return {
            isShow,
            fTooltipWrapper,
            fTooltip,
            fTooltipArrow,
            fTooltipArrowLight,
            handleMouseenter,
            handleMouseleave
        }
    }
})
</script>

<style scoped lang="less">
@import './tooltip.less';
</style>
