const path = require('path')

async function config() {
    return {
        title: 'FastUI.dev',
        base: '/',
        description: 'FastUI',
        themeConfig: {
            website: 'https://fastui.dev',
            nav: [
                {text: 'Home', link: '/'},
                {text: '组件', link: '/components/'},
                {text: 'Github', link: 'https://github.com/vfastui/fastui/'}
            ]
        },
        srcExclude: ['README.md'],
        vite: {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../../src')
                }
            },
            server: {
                open: true,
                host: 'bidev.vipkid.com.cn',
                force: true,
                cors: true
            }
        }
        /*
       optimizeDeps: {
           keepNames: true
       }
       */
    }
}

module.exports = config()
