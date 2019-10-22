const Configuracao = {
    state: {
        MostrarCabecalho: false
    },
    mutations: {
        MutationAlterarCabecalho(state, payload){
            state.MostrarCabecalho = payload
        }
    },
    actions: {
        ActionAlterarCabecalho({commit}, payload){
            commit("MutationAlterarCabecalho", payload)
        }
    },
    getters: {
        GetCabecalho(state){
            return state.MostrarCabecalho
        }
    }
}

export default Configuracao