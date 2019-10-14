import firebase from 'firebase/database'

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
        },
        MutationLimparcliente(state){
            state.Cliente = ''
        },
        MutationLimparReceitas(state){
            state.ListaReceita = []
        }
    },
    actions: {
        ActionAdicionarCliente({commit}, payload){
            commit("MutationAdicionarNovoCliente", payload)
        },
        ActionAdicionarReceitaItem({commit}, payload){
            commit("MutationNovaReceita", payload)
        },
        ActionLimparCliente({commit}){
            commit("MutationLimparcliente")
        },
        ActionLimparListaReceita({commit}){
            commit("MutationLimparReceitas")

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