export default {
    state: {
        login: null
    },
    mutations: {
        MutationLogin(state, payload){
            state.login = payload
        }
        
    },
    actions: {
        AdicionarLogin({commit}, payload){
            commit("MutationLogin", payload)
        },
        Logout({commit}){
            commit("MutationLogin", null)
            window.uid = null
        },
        Reconectar({
            commit
        }, payload) {
            if (payload) {
                if (window.uid) {
                    let usuario = {
                        uid: payload.uid,
                        displayName: payload.displayName,
                        email: payload.email,
                        photoURL: payload.photoURL,
                        phoneNumber: payload.phoneNumber
                    }
                    commit("MutationLogin", usuario)
                }
            }
        },
    },
    getters: {
        GetLogin(state){
            return state.login
        }
    }
}