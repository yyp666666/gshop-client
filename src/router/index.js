/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由配置,数组的每一个元素就代表每一个路由的配置
  // 该项目总共有4个路由组件需要配置，配置之前进行引入操作
  routes: [
    {
      path: '/msite', // 路径到时候自动跳转到该路由就可以了
      component: MSite,
      meta: {
        showFooter: true   // 需要显示将值设置为true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true   // 需要显示将值设置为true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true   // 需要显示将值设置为true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true   // 需要显示将值设置为true
      }
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: "/",
      redirect: '/msite'   // 默认显示
    }
  ]
})
