import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import less from 'rollup-plugin-less'
import alias from '@rollup/plugin-alias'
import path from 'path'

const projectRootDir = path.resolve(__dirname)
export default {
    external: 'vue',
    input: { button: 'src/button/index.ts', modal: 'src/modal/index.ts' },
    output: {
        format: 'es',
        globals: {
            vue: 'Vue'
        },
        dir: 'dist',
        entryFileNames: '[name]/[name].js'
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
