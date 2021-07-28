<template>
    <LeftBar />
    <Layout />
    <Copyright />
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import Copyright from './Copyright.vue'
import LeftBar from './LeftBar.vue'

const { Layout } = DefaultTheme
</script>
