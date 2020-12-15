// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import vueRouter from 'vue-router'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(vueRouter)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.config.productionTip=false
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
