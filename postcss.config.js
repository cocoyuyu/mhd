module.exports = {
  // 将单位转化为 rem，需要进行以下配置，安装两款插件，开发依赖即可
  plugins: {
    autoprefixer: {
      // 不需要设置这个选项， 它会自动去使用 .browserslistrc 这个文件的配置
      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      // 转化的基准值 1rem = 37.5px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
