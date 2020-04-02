<template>
  <div class="home">
    <v-flex xs12 md12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md5 style="margin-top: 15px;">
            <CasesByState />
          </v-flex>
          <v-flex xs12 md5 style="margin-top: 15px;">
            <DeathsByState />
          </v-flex>
        </v-layout>
      </v-container>
   </v-flex>
  </div>
</template>

<style>
  .home {
    margin-left: 15%;
  }

  @media (max-width: 950px) 
  {
    .home 
    {
      margin-left: 0px;
    }
  }
</style>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import CasesByState from '../components/charts/bar/CasesByState.vue'
import DeathsByState from '../components/charts/bar/DeathsByState.vue'

export default {
  name: 'Home',
  components: {
    Dashboard,
    CasesByState,
    DeathsByState
  }
}
</script>
