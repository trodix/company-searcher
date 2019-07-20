import Vue from 'vue';
import Vuex from 'vuex';
import siren from './modules/siren/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    siren,
  },
  strict: debug,
  plugins: [],
});
