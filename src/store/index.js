import { createStore } from 'vuex'

export default createStore({
  state: {
    cadastro:[]
  },
  mutations: {
    pegarCadastro(state, payload){
      state.cadastro = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
