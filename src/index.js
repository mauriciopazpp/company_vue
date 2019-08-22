import 'Styles/main.scss';
import Vue from 'vue';
import App from "./App.vue"

import Vuex from 'vuex'
import store from "./store"

import router from "./router"

Vue.use(Vuex)

new Vue({
  render: createElement => createElement(App),
  store: new Vuex.Store(store),
  router,
  el: '#app'
});
