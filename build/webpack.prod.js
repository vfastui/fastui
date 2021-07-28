const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'fastui.min.js',
        library: 'fastui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
})
