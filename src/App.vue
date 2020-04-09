<template>
  <div id="app">
    <router-view/>
    <footer class="footer mt-auto py-3 bg-primary text-white">
      <v-overlay v-if="showCoffeHelp">
        <v-dialog
          v-model="showCoffeHelp"
          width="500"
        >
          <template v-slot:activator="{ on }">
            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Donate <v-icon>mdi-cash</v-icon>
                <v-divider style="margin-left: 5px; margin-right: 5px;"></v-divider>
                <v-btn
                  color="red lighten-2"
                  dark
                  v-on="on"
                >
                 Close
                <v-icon color="red">
                  mdi-close
                </v-icon>
              </v-btn>
              </v-card-title>

              <v-card-text>
                Bitcoin address: 39W1F2otcudStPisUTpBPoh4ZKvpfoD81L
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </v-overlay>
      <h1>Made with ☕️ and ❤️ by <a href="https://github.com/MatheusFrez" style="color: grey;" target="_blank">Matheus Frez</a></h1>
      <h2>
        Donates
        <v-btn class="mx-2" fab small @click="showCoffeHelp = true"  color="orange darken-2">
          <v-icon color="yellow">mdi-cash</v-icon>
        </v-btn>
      </h2>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
  })
})
export default class AppVue extends Vue {
  showCoffeHelp: boolean = false

  async mounted() {
  }

}
</script>
