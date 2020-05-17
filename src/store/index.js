import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    random_color: {
      primary: '#00B0FF',
      secondary: '#00B0FF',
    },
  },
  mutations: {
    UPDATE_PROPERTY: (state, data) => {
      state[data.property] = data.value;
    },
  },
  actions: {
    setRandomColor: (context, value) => {
      context.commit('UPDATE_PROPERTY', { property: 'random_color', value });
    },
  },
  getters: {
    getRandomColor: (state) => state.random_color,
  },
  modules: {
  },
});
