<template>
   <div>
      <CasesByState />
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CasesByState from '../components/charts/bar/CasesByState.vue'

@Component({
   components: {
      CasesByState
   }
})
export default class Dashboard extends Vue {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
