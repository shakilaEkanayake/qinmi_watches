import Vue from 'vue'
import App from './App.vue'
import fullpage from 'fullpage-vue';

Vue.config.productionTip = false
Vue.use(fullpage)

new Vue({
  render: h => h(App),
}).$mount('#app')
