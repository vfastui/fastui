<template>
    <FFButton size="mini" @click="toggleTheme">切换主题</FFButton>
</template>

<script lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { defineComponent } from 'vue'
import { Button } from '../button'

export default defineComponent({
    name: 'FTheme',
    components: {
        FFButton: Button
    },
    setup() {
        const isDark = useDark({
            selector: 'body',
            attribute: 'class',
            valueDark: 'dark',
            valueLight: 'light'
        })
        const toggleTheme = useToggle(isDark)
        return {
            isDark,
            toggleTheme
        }
    }
})
</script>

<style lang="less">
@import './theme.less';
</style>
