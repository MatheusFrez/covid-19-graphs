import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
