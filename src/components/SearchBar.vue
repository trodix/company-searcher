<template>

<v-form ref="form">
  <v-container>
    <v-layout>
      <v-flex xs12 md6>
        <v-text-field v-model="query" :rules="[rules.isSiren]" label="N° SIREN" @keyup="onSirenValid">
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</v-form>
  
</template>

<script>
import axios from 'axios';
import parameters from '../../parameters';
axios.defaults.headers.common = {'Authorization': `Bearer ${parameters.api.token}`}

export default {
  name: 'SearchBar',
  data() {
    return {
      query: null,
      rules: {
        isSiren: value => {
          const pattern = /^([0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3})$/
          return pattern.test(value) || 'Invalid SIREN number.'
        }
      }
    }
  },
  methods: {
    onSirenValid() {
      console.log(this.$refs.form.validate());
      if(this.$refs.form.validate()) {
        this.getCompaniesBySiren(this.query);
      }
    },
    getCompaniesBySiren(query) {
      const value = query.replace(/\s+/g, '')
      console.log(value);
      axios.get(`https://api.insee.fr/entreprises/sirene/V3/siren/${value}`)
      .then(response => {
        this.companies = response.uniteLegale
      })
      .catch(e => {
        if(e.response.status == 404) {
          console.log(`[${e.response.status}] SIREN ${this.query} not found`);
        } else {
          console.log(e.response);
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
