<template>

  <v-form ref="form">
    <v-text-field v-model="query" :rules="[rules.isSiret]" label="N° SIRET" @keyup="onSiretValid">
    </v-text-field>
  </v-form>
  
</template>

<script>

export default {
  name: 'SearchBar',
  data() {
    return {
      query: null,
      rules: {
        isSiret: value => {
          const pattern = /^([0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{5})$/
          return pattern.test(value) || 'Invalid SIRET number.'
        }
      }
    }
  },
  methods: {
    onSiretValid() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('siret/fetchCompanie', this.query); // call action fetchCompanies and gives it's arg
      }
    },
  }
};
</script>

<style scoped>

</style>
