import Vue from 'vue'
import 'Styles/main.scss'

import router from "./router"
import App from "./App.vue"
import Vuex from 'vuex'
import store from "./store"

Vue.use(Vuex)

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  render: h => h(App)
})
