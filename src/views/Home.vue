<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm10 md8 lg6>
        <SearchBar />
        <SiretTable />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SearchBar from '../components/SearchBar'
  import SiretTable from '../components/SiretTable'

  export default {
    components: {
      SearchBar,
      SiretTable
    }
  }
</script>
