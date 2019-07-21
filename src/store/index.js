import Vue from 'vue';
import Vuex from 'vuex';
import siret from './modules/siret/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    siret,
  },
  strict: debug,
  plugins: [],
});
