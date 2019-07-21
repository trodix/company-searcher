// siret
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// initial state
const state = {
  companie: null,
};

const namespaced = true;

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
