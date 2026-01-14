<template>
    <div v-show="active" class="f-tabs-pane">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onBeforeUnmount, getCurrentInstance, computed, Ref } from 'vue'

export default defineComponent({
    name: 'FTabPane',
    props: {
        title: {
            type: String,
            default: ''
        },
        disabled: Boolean
    },
    setup() {
        const instance = getCurrentInstance()
        const tabsRoot = inject<{
            registerPane: (instance: any) => void
            unregisterPane: (instance: any) => void
            activeKey: Ref<string | number>
        }>('tabs-root')

        if (!tabsRoot) {
            console.error('FTabPane must be used inside FTabs')
            return {}
        }

        const active = computed(() => {
            return tabsRoot.activeKey.value === instance?.uid
        })

        onMounted(() => {
            if (instance) {
                tabsRoot.registerPane(instance)
            }
        })

        onBeforeUnmount(() => {
            if (instance) {
                tabsRoot.unregisterPane(instance)
            }
        })

        return {
            active
        }
    }
})
</script>
