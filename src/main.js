import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:routers
})	






new Vue({
	router,
    render: h => h(App),
}).$mount('#app')

