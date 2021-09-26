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
    meta: {
      title: '首页'
    },
    component: () => import('../components/home'),
    children: [
      // 为了在keep-alive里面记录组件跳转前最后一次访问的路径，这里不配置默认路径
      // {
      //   path: '',
      //   //嵌套默认路径
      //   redirect: 'news'
      // },
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
    meta: {
      title: '关于'
    },
    beforeEnter: (to,from,next)=>{
      // console.log('about的beforeEnter');
      next()
    },
    component: () => import('../components/about')
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: () => import('../components/user')
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: () => import('../components/Profile')
  }
];

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子(guard)
router.beforeEach((to,from,next)=>{
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log('前置');
  next()
})

// 后置钩子(hook)
router.afterEach((to,from) =>{
  // console.log('后置');
})

// 3.将router对象传到vue实例中
export default router
