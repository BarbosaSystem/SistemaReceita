
export default {
    state: {
        Cliente: '',
        ListaReceita: [],
    },
    mutations: {
        MutationAdicionarNovoCliente(state, payload){
            state.Cliente = payload
        },
        MutationNovaReceita(state, payload){
            payload.codigo = state.ListaReceita.length
            state.ListaReceita.push(payload)
        }
    },
    actions: {
        ActionAdicionarCliente({commit}, payload){
            commit("MutationAdicionarNovoCliente", payload)
            console.log(this.$firebase.currentUser)
        },
        ActionAdicionarReceitaItem({commit}, payload){
            commit("MutationNovaReceita", payload)
        }
    },
    getters: {
        GetCliente(state){
            return state.Cliente
        },
        GetListaReceita(state){
            return state.ListaReceita
        }
    }
}