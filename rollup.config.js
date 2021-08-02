import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
//import css from 'rollup-plugin-css-only'
import less from 'rollup-plugin-less'
import alias from '@rollup/plugin-alias'
//import { writeFileSync } from 'fs'
import path from 'path'

// @ts-ignore
import debugPrettier from 'debug'

const debug = debugPrettier('huatuo-datacenter')
debug('just for debug application')
const projectRootDir = path.resolve(__dirname)
export default {
    external: 'vue',
    input: { button: 'src/button/index.ts', modal: 'src/modal/index.ts' },
    //{ button: 'src/button/index.ts' }, { modal: 'src/modal/index.ts' }
    output: {
        format: 'es',
        globals: {
            vue: 'Vue'
        },
        dir: 'dist',
        //exports: 'named',
        //preserveModules: true,
        entryFileNames: '[name]/[name].js'
    },
    plugins: [
        alias({
            entries: [{ find: '@', replacement: path.resolve(projectRootDir, 'src') }]
        }),
        resolve({ extensions: ['.vue', '.ts'] }),
        vue(),

        // css({
        //     // output(style) {
        //     //     // 压缩 css 写入 dist/vue-rollup-component-template.css
        //     //     writeFileSync('dist/index.css', style)
        //     // }
        // }),
        less({
            output: `dist/[name].css`
        }),
        esbuild({
            target: 'esnext'
            //experimentalBundling: true
        }),
        commonjs()
    ]
}
