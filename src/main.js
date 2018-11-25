// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Vuetify, {
  theme: {
    primary: '#F7F7F0',
    secondary: '#36CAC5',
    accent: '#F86C26'
  }
})

library.add(faCoffee, faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
