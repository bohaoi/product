import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入全局配置文件
import $conf from "./common/config/config"
Vue.prototype.$conf = $conf

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
