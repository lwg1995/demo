import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
//引入vue-router
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:routers
})	

//防止重复点击组件 出现红色报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')

