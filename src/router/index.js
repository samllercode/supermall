import { createRouter, createWebHistory } from 'vue-router'

const Home =() => import('../views/home/Home')
const Card =() => import('../views/card/Card')
const Classify =() => import('../views/classify/Classify')
const Profile =() => import('../views/profile/Profile')

const routes = [
  {    
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/card',
    name: 'Card',
    component:Card
  },
  {
    path: '/classify',
    name: 'Classify',
    component:Classify
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
