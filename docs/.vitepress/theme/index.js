// 正确的 docs/.vitepress/theme/index.js 文件内容

import DefaultTheme from 'vitepress/theme'
import CustomHome from './CustomHome.vue' // 修正了这里的路径
import './custom.css' // 如果您有自定义CSS，可以保留这行
// import './style.css' // 如果您有自定义CSS，可以保留这行

export default {
  // 修正了这里的语法，使用展开语法来继承默认主题
  ...DefaultTheme, 
  
  enhanceApp({ app }) {
    // 在这里注册您的自定义组件
    app.component('CustomHome', CustomHome)
  }
}
