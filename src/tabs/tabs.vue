<template>
    <div :class="['f-tabs', `f-tabs--${type}`, `f-tabs--${position}`, `f-tabs--${size}`]">
        <div class="f-tabs-nav">
            <div
                v-for="(item, index) in panes"
                :key="index"
                :class="[
                    'f-tabs-tab',
                    {
                        'is-active': item.uid === activeKey,
                        'is-disabled': item.props.disabled
                    }
                ]"
                @click="handleTabClick(item)"
            >
                {{ item.props.title }}
            </div>
        </div>
        <div class="f-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch, ComponentInternalInstance } from 'vue'

export default defineComponent({
    name: 'FTabs',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String, // 'line' | 'card' | 'text' | 'rounded' | 'capsule'
            default: 'line'
        },
        position: {
            type: String, // 'top' | 'left' | 'right' | 'bottom'
            default: 'top'
        },
        size: {
            type: String, // 'mini' | 'small' | 'medium' | 'large'
            default: 'medium'
        }
    },
    emits: ['update:modelValue', 'change', 'tab-click'],
    setup(props, { emit }) {
        const panes = ref<ComponentInternalInstance[]>([])
        const activeKey = ref(props.modelValue)

        // Provide context to children
        provide('tabs-root', {
            registerPane: (instance: ComponentInternalInstance) => {
                panes.value.push(instance)
                // If no active key is set, set the first one as active
                if (!activeKey.value && panes.value.length === 1) {
                    activeKey.value = instance.uid
                    emit('update:modelValue', instance.uid)
                }
            },
            unregisterPane: (instance: ComponentInternalInstance) => {
                const index = panes.value.indexOf(instance)
                if (index > -1) {
                    panes.value.splice(index, 1)
                }
            },
            activeKey
        })

        watch(
            () => props.modelValue,
            (val) => {
                activeKey.value = val
            }
        )

        const handleTabClick = (pane: ComponentInternalInstance) => {
            if (pane.props.disabled) return
            activeKey.value = pane.uid
            emit('update:modelValue', pane.uid)
            emit('change', pane.uid)
            emit('tab-click', pane.uid) // Using uid as key for now if not provided, ideally use pane key
        }

        return {
            panes,
            activeKey,
            handleTabClick
        }
    }
})
</script>

<style lang="less">
@import './tabs.less';
</style>
