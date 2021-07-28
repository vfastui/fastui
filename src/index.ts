import Button from './button'
import Modal from './modal'

const components: any = {
    FButton: Button,
    FModal: Modal
}

const install = function (Vue: any) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })

    // Vue.prototype.$message = Message;
    //Vue.prototype.$notice = Notice
}

export default install
