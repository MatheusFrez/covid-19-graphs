<template>
   <v-card
      class="mx-auto my-12"
   >
      <v-card-title>
         Cases by state in Brazil
      </v-card-title>
         <apexchart 
            type="bar" 
            :options="chartOptions" 
            :series="series" 
            v-if="chartOptions.xaxis.categories.length !== 0"
            title="Cases by state"
         >
         </apexchart>
   </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CasesByState extends Vue {
   private chartOptions: any = {
      chart: {
         id: 'cases-by-state'
      },
      xaxis: {
         categories: []
      }
   }

   private series: Array<any> = [{
      name: 'Cases',
      data: []
   }]

   async mounted() {
      const datas = 
         await fetch('https://covid19-brazil-api.now.sh/api/report/v1')
            .then(res => {
               if(res.ok)
                  return res.json()
               throw new Error('Ops an error ocorred!! =(')
            })
            .catch(err => {
               return undefined
            })
      if(datas) {
         await Promise.all(datas.data.map((data: any) => {
            this.chartOptions.xaxis.categories.push(data.uf)
            this.series[0].data.push(data.cases)
         }))
      }
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
