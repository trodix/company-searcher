// siren
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// initial state
const state = {
  companies: [],
};

const namespaced = true; // bug les actions

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
