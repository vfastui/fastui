import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'

import Button from '@/button/button.vue'
import Modal from '@/modal/modal.vue'
const components = {
    FButton: Button,
    FModal: Modal
}

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

import './custom.css'

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // register global compoment
        app.use(install)
    }
}
