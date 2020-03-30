<template>
   <div>
      <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
   @Prop() private msg!: string;
   private chartOptions: any = {
      chart: {
         id: 'vuechart-example'
      },
      xaxis: {
         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
   }

   private series: Array<any> = [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91]
   }]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
