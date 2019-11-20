import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pay: {
            payNumber: 0,
            payMethod: '',
            payType: '',
            Created: new Date(new Date().getTime()),
            reMark: '',
            opertionType: 0
        },
        isEdit: 1,
        user: JSON.parse(localStorage.getItem('user')) || {},
    },
    mutations: {
        setPay(state, n) {
            state.pay = n;
        },
        setEdit(state, n) {
            state.isEdit = n;
        },
        setUser(state, n) {
            state.user = n;
        }
    },
    actions: {},
    modules: {}
})
