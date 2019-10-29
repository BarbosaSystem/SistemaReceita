const SideBar =  {
    state: {
        menu: [{
            Codigo: 0,
            Titulo: 'Nova Receita',
            Path: '/nova_receita',
            Icon: 'fa-plus-circle',
            status: true
        },
        {
            Codigo: 1,
            Titulo: 'Relação de Receitas',
            Path: '/receitas',
            Icon: 'fa-list-alt',
            status: true
        },
        {
            Codigo: 2,
            Titulo: 'Configurações',
            Path: '/configuracao',
            Icon: 'fa-user-cog',
            status: true
        }
    ],
    },
    mutations: {
        MUTATION_ADICIONAR_MENU(state, payload){
            state.menu.push(payload)
        },
        MUTATION_REMOVER_MENU(state, payload){
            var todos = state.menu
            todos.splice(todos.indexOf(payload), 1)
        },

    },
    actions: {
        ADD_MENU({commit}, payload){
            commit("MUTATION_ADICIONAR_MENU", payload)
        },
        /* EDIT_MENU({commit}, payload){
            commit("MutationCarregarLista", payload)
        }, */
        REMOVE_MENU({
            commit
        }, payload) {
            commit("MUTATION_REMOVER_MENU", payload)
        },

    },
    getters: {
        SELECT_MENU(state){
            return state.menu
        }
    }
}
export default SideBar