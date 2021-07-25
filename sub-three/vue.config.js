const { name } = require('../package.json')

module.exports = {
  publicPath: '/subapp/sub-three',
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    port: process.env.VUE_ONE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
