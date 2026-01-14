const path = require('path')
//import { withBase } from 'vitepress'
async function config() {
    return {
        title: 'FastUI',
        base: '/',
        description: 'FastUI',
        themeConfig: {
            logo: '/logo.png',
            website: 'https://fastui.dev',
            footer: {
                message: 'Released under the MIT License.',
                copyright: 'Copyright © 2021-present Powered by <a class="vitepress" target="_blank" href="//vitepress.vuejs.org/">VitePress - 2.0.0-alpha.15</a>'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: '快速开始', link: '/quick.html' },
                { text: '组件', link: '/components/button.html' },
                { text: 'Github', link: 'https://github.com/vfastui/fastui/' }
            ],
            sidebar: [
                {
                    text: '简介',
                    items: [{ text: '快速开始', link: '/quick.html' }]
                },
                {
                    text: '组件',
                    items: [
                        { text: '按钮', link: '/components/button.html' },
                        { text: '图标', link: '/components/icon.html' },
                        { text: '模态框', link: '/components/modal.html' },
                        { text: '栅格', link: '/components/grid.html' },
                        { text: '提示', link: '/components/tooltip.html' },
                        { text: '标签', link: '/components/tag.html' },
                        { text: '标签页', link: '/components/tabs.html' }
                    ]
                }
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
                //open: true,
                //host: 'bidev.vipkid.com.cn',
                force: true,
                cors: true
            },
            optimizeDeps: {
                include: ['vue']
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
