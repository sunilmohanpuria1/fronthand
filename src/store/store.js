import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state :{
            users: [],
            newuser: {}
        },
        mutations:{
            GET_USER(state, user){
                state.newuser = user;
                
              },
            ADD_USER(state){
                state.users.push({
                body: state.newuser,
                });
            },
        },
        actions:{
            getuser({commit}, user){
                commit('GET_USER', user);
              },
              adduser({commit}){
                commit('ADD_USER')
              },
        },
        getters: {
            newuser: state => state.newuser,
            users: state => state.users
        }
    }
)