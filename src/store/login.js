import router from '../router'
export default {
    namespaced: true,
    state: {
        username: null,
    },
    getters: {
        isLogin(state) {
            return state.username == null ? false : true;
        },
    },
    mutations: {
        LOGIN(state, payload) {
            state.username = payload.username;
        },
        LOGOUT(state) {
            state.username = null;
        },
    },
    actions: {
        Login({ commit }, payload) {
            commit("LOGIN", payload)
            router.push('/welcome');
        },
        Logout({ commit }) {
            commit("LOGOUT")
            router.push('/home');
        }
    },
};
