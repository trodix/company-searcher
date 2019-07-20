<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <SearchBar/>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
