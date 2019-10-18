const Login = {
    state: {
        login: null
    },
    mutations: {
        MutationLogin(state, payload){
            state.login = payload
            localStorage.setItem('token', payload)
        }
        
    },
    actions: {
        AdicionarLogin({commit}, payload){
            commit("MutationLogin", payload)
        },
        Logout({commit}){
            commit("MutationLogin", null)
            localStorage.removeItem('token')
            
        },
        Reconectar({commit}, payload) {
            if (payload) {
                let usuario = {
                    uid: payload.uid,
                    displayName: payload.displayName,
                    email: payload.email,
                }
                commit("MutationLogin", usuario)
            }
        },
    },
    getters: {
        GetLogin(state){
            return state.login
        }
    }
}

export default Login