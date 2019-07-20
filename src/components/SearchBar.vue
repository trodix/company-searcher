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
        this.$store.dispatch('siren/fetchCompanies', this.query); // call action fetchCompanies and gives it's arg
      }
    },
  }
};
</script>

<style scoped>

</style>
