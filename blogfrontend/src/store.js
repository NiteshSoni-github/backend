import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL : "http://127.0.0.1:3333/",
    accessToken: null,
    login : true,
    logout: false,
    blogData:[],
    
  },
  mutations: {
    login_logout(state){
      if(localStorage.getItem('token'))
      {
        state.logout = true ;
        state.login =  false ;
      }
      else{
        state.logout = false 
        state.login =  true 
      }
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
  },
  actions: {
    login_logout( context){
      context.commit('login_logout');
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('token'));
    },
  }
})
