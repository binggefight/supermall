// module.exports = {
//   //表示配置webpackconfig
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }  
// }   


const path = require('path')//引入path模块
const resolve = dir => path.join(__dirname, dir)//path.join(__dirname)设置绝对路径

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      // .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
  },
}
