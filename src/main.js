import Vue from 'vue'
import App from './App'

// 导入路由组件
import VueRouter from 'vue-router'

// 导入UI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 导入路由配置文件
import routerConfig from './routerConfig.js'

// 注册插件
Vue.use(VueRouter)
Vue.use(ElementUI)

// 创建路由
const router = new VueRouter({
  routes: routerConfig
})

// 初始化 leancloud-storage
import AV from 'leancloud-storage'
const APP_ID = 'tAvJucJiPN9h2Jsa4dqUB23x-gzGzoHsz'
const APP_KEY = 'DSlKWiaPIY42HNQYNkSI0mDJ'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.$AV = AV

// 实例化根组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
