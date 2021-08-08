import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth.js'
import loading from './modules/loading.js'

Vue.use(Vuex)

console.log('hellohello')

export default new Vuex.Store({
  modules: {
    oauth,
    loading
  }
})
