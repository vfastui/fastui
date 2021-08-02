<template>
    <teleport to="body">
        <div :id="id" ref="fModalContainer" class="f-modal-container">
            <transition name="f-modal-mask-fade">
                <div v-show="showModal" class="f-modal-mask" @click="clickMask"></div>
            </transition>
            <transition name="f-modal-show-scale" @after-leave="remove">
                <div v-show="showModal" ref="fModal" class="f-modal" :style="`width: ${width}; top: ${top}`">
                    <i v-if="showClose" class="iconfont icon-close closeIcon" @click="hide"></i>
                    <div class="f-modal-header">
                        <span v-if="!$slots.title">{{ title }}</span>
                        <slot name="title"></slot>
                    </div>
                    <div v-if="!closeAndDestroyDom" class="f-modal-body">
                        <slot></slot>
                    </div>
                    <div v-if="$slots.footer" class="f-modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onBeforeUnmount, watch } from 'vue'
import { getUUID } from '@/_utils/utils'

export default defineComponent({
    name: 'FModal',
    props: {
        value: Boolean,
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
        clickMaskNotClose: Boolean,
        pressEscNotClose: Boolean,
        closeAndDestroyDom: Boolean
    },
    emits: ['update:value'],
    setup(props, { emit }) {
        let fModalContainerDom: HTMLElement
        let fModalDom: HTMLElement
        let timer: any = null

        const data = reactive({
            showModal: props.value,
            fModal: null,
            fModalContainer: null,
            closeAndDestroyDom: false
        })

        watch(
            () => props.value,
            (newV: boolean) => {
                newV ? open() : hide()
            }
        )

        const open = () => {
            data.showModal = true
            data.closeAndDestroyDom = false
            // 获取滚动条宽度
            const scrollBarWidth = window.innerWidth - document.body.offsetWidth
            fModalContainerDom.classList.add('f-modal-show')
            document.body.style.cssText = `width: calc(100% - ${scrollBarWidth}px);overflow: hidden`
        }

        const hide = () => {
            data.showModal = false
            emit('update:value', false)
        }

        const remove = () => {
            fModalContainerDom.classList.remove('f-modal-show')
            let showModalList = document.getElementsByClassName('f-modal-show')
            !showModalList.length && document.body.removeAttribute('style')
            if (props.closeAndDestroyDom) data.closeAndDestroyDom = true
        }

        const clickMask = () => {
            if (props.clickMaskNotClose) {
                if (!timer) {
                    fModalDom.classList.add('f-modal__not_close')
                    timer = setTimeout(() => {
                        fModalDom.classList.remove('f-modal__not_close')
                        timer = null
                    }, 150)
                }
                return
            }
            hide()
        }

        const handelKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape' && e.key === 'Escape') {
                if (props.pressEscNotClose) {
                    if (!timer) {
                        fModalDom.classList.add('f-modal__not_close')
                        timer = setTimeout(() => {
                            fModalDom.classList.remove('f-modal__not_close')
                            timer = null
                        }, 150)
                    }
                    return
                }
                hide()
            }
        }

        onMounted(() => {
            fModalContainerDom = data.fModalContainer as any
            fModalDom = data.fModal as any
            document.addEventListener('keydown', handelKeyDown)
        })
        onBeforeUnmount(() => {
            document.removeEventListener('keydown', handelKeyDown)
        })
        return {
            ...toRefs(data),
            open,
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
