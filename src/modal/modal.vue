<template>
    <teleport to="body">
        <div :id="id" ref="fModalWrapper" class="f-modal-wrapper">
            <transition name="f-modal-mask-fade">
                <div v-show="showModal" class="f-modal-mask" @click="clickMask"></div>
            </transition>
            <transition name="f-modal-show-scale" @after-leave="remove">
                <div v-show="showModal" class="f-modal" :style="`width: ${width}; top: ${top}`">
                    <i v-if="showClose" class="iconfont icon-close closeIcon" @click="innerHide"></i>
                    <div class="f-modal-header">{{ title }}</div>
                    <div class="f-modal-body"><slot></slot></div>
                    <div v-if="$slots.footer" class="f-modal-footer"><slot name="footer"></slot></div>
                </div>
            </transition>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onBeforeUnmount, watch } from 'vue'
import { getUUID } from '@/_utils/utils'

export default defineComponent({
    props: {
        modelValue: Boolean,
        id: {
            type: String,
            default: () => getUUID('FModal')
        },
        title: {
            type: String,
            default: '提示：'
        },
        top: {
            type: String,
            default: '20vh'
        },
        width: {
            type: String,
            default: '550px'
        },
        showClose: {
            type: Boolean,
            default: true
        },
        maskClosable: Boolean,
        escClosable: Boolean
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        let fModalWrapperDom: HTMLElement

        const data = reactive({
            showModal: props.modelValue,
            fModalWrapper: null
        })

        watch(
            () => props.modelValue,
            (newV: boolean) => {
                console.log(newV)
                newV ? open() : hide()
            }
        )

        const open = () => {
            data.showModal = true
            // 获取滚动条宽度 FIXME 在demo工程内容有抖动
            fModalWrapperDom.classList.add('f-modal-show')
            const scrollBarWidth = window.innerWidth - document.body.offsetWidth
            document.body.style.cssText = `width: calc(100% - ${scrollBarWidth}px);overflow: hidden`
        }

        const innerHide = () => {
            emit('update:modelValue', false)
        }
        const hide = () => {
            data.showModal = false
            //emit('update:value', false)
        }

        const remove = () => {
            fModalWrapperDom.classList.remove('f-modal-show')
            let showModalList = document.getElementsByClassName('f-modal-show')
            !showModalList.length && document.body.removeAttribute('style')
        }

        const clickMask = () => {
            if (props.maskClosable) return
            innerHide()
        }

        // let timer: any = null
        const handelKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape' && e.key === 'Escape') {
                if (props.escClosable) {
                    // 保留一份无法关闭的动画
                    // if (!timer) {
                    //     fModalDom.classList.add('f-modal__not_close')
                    //     timer = setTimeout(() => {
                    //         fModalDom.classList.remove('f-modal__not_close')
                    //         timer = null
                    //     }, 150)
                    // }
                    return
                }
                innerHide()
            }
        }
        // let fModalDom: HTMLElement
        onMounted(() => {
            fModalWrapperDom = data.fModalWrapper as any
            document.addEventListener('keydown', handelKeyDown)
        })
        onBeforeUnmount(() => {
            document.removeEventListener('keydown', handelKeyDown)
        })
        return {
            ...toRefs(data),
            open,
            innerHide,
            hide,
            remove,
            clickMask
        }
    }
})
</script>
<style lang="less">
@import './modal.less';
</style>
