import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'

import Button from '@/button/button.vue'
import Modal from '@/modal/modal.vue'
import Row from '@/row/row.vue'
import Col from '@/col/col.vue'
import Tooltip from '@/tooltip/tooltip.vue'
import Tag from '@/tag/tag.vue'
import Theme from '@/theme/theme.vue'
const components = {
    FButton: Button,
    FModal: Modal,
    FRow:Row,
    FCol:Col,
    FTooltip:Tooltip,
    FTag:Tag,
    FTheme:Theme
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
