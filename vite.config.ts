import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import debugPrettier from 'debug'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const debug = debugPrettier('huatuo-datacenter')
debug('just for debug application')

export default defineConfig({
    root: './',
    // 引入第三方的配置
    optimizeDeps: {
        include: ['element-plus', 'element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale']
    },
    // minify: 'esbuild', //控制压缩的方式
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            _pages: resolve(__dirname, 'src/pages'),
            _components: resolve(__dirname, 'src/components'),
            _assets: resolve(__dirname, 'src/assets')
        }
    },
    plugins: [vue(), vueJsx()],
    build: {
        target: 'esnext',
        lib: {
            entry: 'src/index.ts',
            name: 'fast-ui'
        },
        minify: false,
        rollupOptions: {
            external: 'vue',
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
