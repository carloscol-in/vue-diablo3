// Vue NPM dependencies
import Vue from 'vue'

// Third party NPM dependencies
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/tailwind.css'

// Local dependencies
import App from './App.vue'
import router from './router'
import store from './store'

// Extra configuration
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      console.log('Hola')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
