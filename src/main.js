// Vue NPM dependencies
import Vue from 'vue'

// Third party NPM dependencies
import BootstrapVue from 'bootstrap-vue'
import '@/assets/css/tailwind.css'

// Local dependencies
import App from './App.vue'
import router from './router'
import store from './store'

// Global CSS
import '@/assets/css/main.styl'

// Extra configuration
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Support for toggling theme mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

document.documentElement.classList.add('dark')

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
