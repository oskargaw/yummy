import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [],
    recipeDetailsId: null,
  },
  mutations: {
    setResults(state, payload) {
      state.results = payload.newResults;
    },
    setRecipeDetailsId(state, payload) {
      state.recipeDetailsId = payload.selectedRecipeId;
    },
  },
  actions: {},
  modules: {},
});
