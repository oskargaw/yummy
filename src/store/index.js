import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, payload) {
      state.results = payload.newResults
    }
  },
  actions: {},
  modules: {}
});
