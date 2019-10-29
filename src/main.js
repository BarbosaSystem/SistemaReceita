import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './Store/store'
import './style/estilo.sass'
import FirebaseVue from './firebase'

Vue.use(FirebaseVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
