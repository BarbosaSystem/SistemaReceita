import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Receita from './modules/Receita'
import Configuracao from './modules/configuracao'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    Login, Receita, Configuracao
  },
  state: {
    DadosGravados: false
  },
  mutations: {
    MutationDadosGravados(state, payload){
      state.DadosGravados = payload
    }
  },
  actions: {
    ActionDadosGravados(store, payload){
      store.commit("MutationDadosGravados", payload)
    }
  },
  getters: {
    GetDadosGravados(state){
      return state.DadosGravados
    }
  }
})
