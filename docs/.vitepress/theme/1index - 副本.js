// 这是正确的 docs/.vitepress/theme/index.js 文件内容

import DefaultTheme from 'vitepress/theme'
// 假设 CustomHome.vue 与 index.js 在同一目录下
// 如果您确实把它放在了 components 子目录，请将路径改回 './components/CustomHome.vue'
import CustomHome from './CustomHome.vue' 
import './custom.css' // 如果您有自定义CSS，保留这行

export default {
  // 使用正确的展开语法来继承默认主题
  ...DefaultTheme, 
  
  enhanceApp({ app }) {
    // 注册您的自定义全局组件
    app.component('CustomHome', CustomHome)
  }
}