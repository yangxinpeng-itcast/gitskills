import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'
//导入router路由模块(自定义模块)
import router from './router'

new Vue({
    render: h => h(App),
    //将vuerouter实例挂载到vue实例上
    router
}).$mount('#app')