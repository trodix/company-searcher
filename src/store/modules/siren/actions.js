// import Vue from 'vue';
import axios from 'axios';
import parameters from '../../../../parameters';

axios.defaults.headers.common = { Authorization: `Bearer ${parameters.api.token}` };

export const actions = {
  async fetchCompanies({ commit }, siren) {
    const value = siren.replace(/\s+/g, '');
    console.log(value);
    axios.get(`https://api.insee.fr/entreprises/sirene/V3/siren/${value}`)
      .then((response) => {
        commit('setCompanies', response.uniteLegale);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          console.log(`[${e.response.status}] SIREN ${this.query} not found`);
        } else {
          console.log(e.response);
        }
      });
  },
};
