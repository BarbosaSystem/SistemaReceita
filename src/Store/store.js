import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Receita from './modules/Receita'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  modules: {
    Login, Receita
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
