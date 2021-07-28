import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'
import Button from '@/button'
import Modal from '@/modal'

import '@/_assets/animate.css'
import './custom.css'
import '@/_assets/iconfont.css'
import '@/_themes/light.less'

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // register global compoment
        app.use(Button)
        app.use(Modal)
    }
}
