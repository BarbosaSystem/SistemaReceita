const Receita =  {
    state: {
        Cliente: '',
        ListaReceita: [],
        Receita: null,
        Dados: []
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
        MutationCarregarLista(state, payload){
            state.Dados = payload
        },
        RemoverReceita(state, payload){
            var todos = state.Dados
            todos.splice(todos.indexOf(payload), 1)
        }
    },
    actions: {
        ActionNovoCliente({commit}, payload){
            commit("MutationAdicionarNovoCliente", payload)
        },
        ActionAdicionarCliente({commit}, payload){
            commit("MutationCarregarLista", payload)
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
        },
        ActionRemoverReceita({commit}, payload){
            commit("RemoverReceita", payload)
        }

    },
    getters: {
        GetLoadReceitas(state){
            return state.Dados
        },
        GetCliente(state) {
            return state.Cliente
        },
        GetListaReceita(state) {
            return state.ListaReceita
        },

        GetReceitaInfo (state){
            return (codigo) => {
                return state.Dados.find((receitaItem) => {
                  return receitaItem.codigo === codigo
                })
              }
        }
    }
}
export default Receita