// import Vue from 'vue';
import axios from 'axios';
import parameters from '../../../../parameters';

axios.defaults.headers.common = { Authorization: `Bearer ${parameters.api.token}` };

export const actions = {
  async fetchCompanie({ commit }, siret) {
    const value = siret.replace(/\s+/g, '');
    axios.get(`https://api.insee.fr/entreprises/sirene/V3/siret/${value}`)
      .then((response) => {
        commit('setCompanie', response.data.etablissement);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          console.log(`[${e.response.status}] SIRET ${this.query} not found`);
        }
      });
  },
};
