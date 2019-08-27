import Vue from 'vue'
import 'Styles/main.scss'

import router from "Router"
import App from "./App.vue"
import Vuex from 'vuex'
import store from "Store"

Vue.use(Vuex)

new Vue({
  el: '#el',
  store: new Vuex.Store(store),
  router,
  render: the => the(App)
})
