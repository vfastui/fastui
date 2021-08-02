import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve1 from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
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
            entry: 'src/button/index.ts',
            name: 'fast-ui',
            formats: ['es']
            //fileName: (format) => `my-lib.${format}.js`
        },
        minify: false,
        rollupOptions: {
            external: 'vue',
            input: [
                '/Users/airene/workspace/fastui/src/button/index.ts',
                '/Users/airene/workspace/fastui/src/modal/index.ts'
            ],
            output: {
                format: 'es',
                globals: {
                    vue: 'Vue'
                },
                //preserveModules: true,
                entryFileNames: '[name].js'
            },
            plugins: [
                resolve1({ extensions: ['.vue'] }),
                esbuild(),
                VuePlugin({
                    include: /\.vue$/
                })
            ]
        }
    }
})
