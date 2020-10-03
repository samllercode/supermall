import { createRouter, createWebHistory } from 'vue-router'

const Home =() => import('../views/home/Home')
const Card =() => import('../views/card/Card')
const Classify =() => import('../views/classify/Classify')
const Profile =() => import('../views/profile/Profile')
const Detail =() => import('../views/detail/Detail')

const routes = [
  {    
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
    // meta:{
    //   KeepAlive:true
    // }
  },
  {
    path: '/card',
    name: 'Card',
    component:Card,
    // meta:{
    //   KeepAlive:true
    // }
  },
  {
    path: '/classify',
    name: 'Classify',
    component:Classify,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile,
    // meta:{
    //   KeepAlive:false
    // }
  },
  {
    //动态路由
    path:'/detail/:id',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
