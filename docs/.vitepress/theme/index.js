import DefaultTheme from 'vitepress/theme'
import CustomHome from './components/CustomHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomHome', CustomHome)
  }
}

