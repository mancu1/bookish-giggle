import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popup: false,
    login: false,
    name: " "
  },
  mutations: {
    setPopup(state, popupVal) {
      state.popup = popupVal;
    },
    setLogin(state, loginVal) {
      state.login = loginVal;
    },
    setName(state, Name) {
      state.name = Name;
    }
  },
  actions: {},
  modules: {}
});
