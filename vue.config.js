module.exports = {
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 9025,
    https: false,
    hotOnly: false,
    proxy: null
  },
  // 去掉生存环境中的console
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
