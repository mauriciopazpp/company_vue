import 'Styles/main.scss';
import Vue from 'vue';
import HelloWorld from 'Components/HelloWorld.vue';

import Vuex from 'vuex'
import store from "./store"

Vue.use(Vuex)

const App = {
  render: createElement => createElement(HelloWorld),
  store: new Vuex.Store(store),
  el: '#app'
}

new Vue(App);
