import Vue from 'vue'
const Receita =  {
    state: {
        Cliente: '',
        ListaReceita: [],
        Receita: null
    },
    mutations: {
        MutationAdicionarNovoCliente(state, payload) {
            state.Cliente = payload
        },
        MutationNovaReceita(state, payload) {
            state.ListaReceita.push(payload)
        },
        MutationLimparcliente(state) {
            state.Cliente = ''
        },
        MutationLimparReceitas(state) {
            state.ListaReceita = []
        },
        AtualizaReceitaItem(state, todo) {
            /* let receitaItem = {
                NomeItem: todo.NomeItem,
                Quantidade: todo.Quantidade,
                Descricao: todo.Descricao
            } */
            /* Vue.set(this.$store.state.ListaReceita, todo.codigo, receitaItem)
            state.ListaReceita[todo.Codigo] = {
                NomeItem: todo.NomeItem,
                Quantidade: todo.Quantidade,
                Descricao: todo.Descricao
            } */
        },
    },
    actions: {
        ActionAdicionarCliente({
            commit
        }, payload) {
            commit("MutationAdicionarNovoCliente", payload)
        },
        ActionAdicionarReceitaItem({
            commit
        }, payload) {
            commit("MutationNovaReceita", payload)
        },
        ActionLimparCliente({
            commit
        }) {
            commit("MutationLimparcliente")
        },
        ActionLimparListaReceita({commit}) {
            commit("MutationLimparReceitas")
        },
        ActionAtualizarReceitaItem({commit}, payload){
            commit("AtualizaReceitaItem", payload)
        }

    },
    getters: {
        GetCliente(state) {
            return state.Cliente
        },
        GetListaReceita(state) {
            return state.ListaReceita
        },
        GetLoadReceitaItem (state){
            return(id) => {
                return state.ListaReceita[id]
                /* return state.ListaReceita.indexOf(id, 1) */
                /* return state.ListaReceita.find((receita) => {
                    return receita.id === id
                } )*/
            }
        }
    }
}
export default Receita