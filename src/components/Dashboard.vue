<template>
   <v-flex xs12>
      <v-container grid-list-xl>
         <v-layout row wrap align-center>
            <v-flex xs12 md4 style="margin-top: 15px;">
               <CasesByState />
            </v-flex>
            <v-flex xs12 md4 style="margin-top: 15px;">
               <DeathsByState  style="margin-top: 5px;"/>
            </v-flex>
            <v-flex xs12 md4 style="margin-top: 15px;">
               <CasesCuredByState  style="margin-top: 5px;"/>
            </v-flex>
         </v-layout>
      </v-container>
   </v-flex>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CasesByState from '../components/charts/bar/CasesByState.vue'
import DeathsByState from '../components/charts/bar/DeathsByState.vue'
import CasesCuredByState from '../components/charts/bar/CuredCasesByState.vue'

@Component({
   components: {
      CasesByState,
      DeathsByState,
      CasesCuredByState
   }
})
export default class Dashboard extends Vue {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
