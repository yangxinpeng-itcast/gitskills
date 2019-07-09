import VueRouter from 'vue-router'

//加载vue模块
import Vue from 'vue'
//引入英雄列表组件在这里匹配路由
import HeroList from './views/heroes/HeroList.vue'
//引入武器列表组件
import WeaponsList from './views/weapons/WeaponsList.vue'
//引入装备列表
import equips from './views/equips/equips.vue'

//导入添加的组件
import add from './views/heroes/HeroesAdd.vue'

//vue-router注册到vue中才能使用
//在全局script标签中不用写这一步(自动完成)
Vue.use(VueRouter)


//创建路由对象，实例化vue-router
//vue-router使用步骤第4步
const router = new VueRouter({
    //精确的配置高亮显示类样式
    linkActiveClass: 'active',
    //匹配路由规则
    routes: [
        { name: 'herolist', path: '/herolist', component: HeroList },
        { name: 'weapons', path: '/weapons', component: WeaponsList },
        { name: 'equips', path: '/equips', component: equips },
        { name: 'add', path: '/herolist/add', component: add }
    ]

})

//导出路由模块
export default router