import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import './assets/global.css'

axios.defaults.baseURL='/api'
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$ajax=axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
