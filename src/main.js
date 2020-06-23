import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'

Vue.prototype.$messageIP = window.location.host === '77.1.34.12:8089' ? 'http://77.1.34.12:8089' : 'http://localhost'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
