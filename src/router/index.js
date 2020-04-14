import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Inicio from '../views/Inicio.vue'
import Bachas from '../views/Bachas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/bachas',
    name: 'bachas',
    component: Bachas
  },
  {
    path: '/about',
    name: 'about',
    component:About
  }
]

const router = new VueRouter({
  routes
})

export default router
