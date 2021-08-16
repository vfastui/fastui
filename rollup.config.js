import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import less from 'rollup-plugin-less'
import alias from '@rollup/plugin-alias'
import path from 'path'

const projectRootDir = path.resolve(__dirname)
export default {
    input: {
        button: 'src/button/button.vue',
        modal: 'src/modal/modal.vue',
        tag: 'src/tag/tag.vue',
        row: 'src/row/row.vue',
        col: 'src/col/col.vue',
        tooltip: 'src/tooltip/tooltip.vue',
        theme: 'src/theme/theme.vue'
    },
    external: 'vue',
    output: {
        format: 'es',
        globals: {
            vue: 'Vue'
        },
        dir: 'dist',
        entryFileNames: '[name]/index.js'
    },
    plugins: [
        alias({
            entries: [{ find: '@', replacement: path.resolve(projectRootDir, 'src') }]
        }),
        resolve({ extensions: ['.vue', '.ts'] }),
        vue(),
        less({
            output: false
            //output: `dist/[name].css`
        }),
        esbuild({
            target: 'esnext'
        }),
        commonjs()
    ]
}
