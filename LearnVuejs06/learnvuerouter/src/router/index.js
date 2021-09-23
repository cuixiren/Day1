// 配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

// const Home = () => import('../components/home')

// 1.要通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    //重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/home'),
    children: [
      {
        path: '',
        //嵌套默认路径
        redirect: 'news'
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage')
      },
      {
        path: 'news',
        component: () => import('../components/HomeNews')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../components/about')
  },
  {
    path: '/user/:userId',
    component: () => import('../components/user')
  }
];

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传到vue实例中
export default router
