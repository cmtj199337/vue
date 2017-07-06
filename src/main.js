// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入路由组件、自定义路由组件
import VueRouter from "vue-router"    
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import all from './style/all.min.css'

//使用路由组件
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

// import  VueScroller  from 'vue-scroller'
// Vue.use(VueScroller) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
