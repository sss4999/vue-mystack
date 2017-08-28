import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Routers from './router/index.js'

import 'element-ui/lib/theme-default/index.css'
import Util from './util/index'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const RouterConfig = {
    routes: Routers,
    scrollBehavior (to, from, savedPosition) {
	    if (to.hash) {
	  	    return {
	        selector: to.hash
	        }
	    }
    }
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
