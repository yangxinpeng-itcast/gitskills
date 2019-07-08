import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'
import VueRouter from 'vue-router'

//vue-router注册到vue中才能使用
//在全局script标签中不用写这一步(自动完成)
Vue.use(VueRouter)

//创建路由对象，实例化vue-router
//vue-router使用步骤第4步
const router = new VueRouter({
    //匹配路由规则
    routes: []
})

new Vue({
    render: h => h(App),
    //将vuerouter实例挂载到vue实例上
    router
}).$mount('#app')