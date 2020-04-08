<template>
   <v-card
      class="mx-auto my-12"
   >
      <v-card-title>
         <strong>GLOBAL CASES</strong>
      </v-card-title>
      <iframe src="https://covid.amcharts.com/" style="width: 100%;height: 70vh;"></iframe>
   </v-card>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
   data: () => ({
   })
})
export default class WorldChart extends Vue {

   async mounted() {
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
