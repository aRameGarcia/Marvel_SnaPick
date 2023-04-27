import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/v-login.vue')
    },
    {
      path: '/registro',
      name:'register',
      component: () => import('../views/v-register.vue')
    },
    {
      path: '/coleccion',
      name:'collection',
      component: () => import('../views/v-collection.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name:'default',
      component: () => import('../views/v-login.vue')
    }
    
  ]
})

const routesFree=['login','register']

router.beforeEach((to, from, next) => {
  if (to.name === 'unknown') {
    next({name:'login'})
  }else if(!routesFree.includes(to.name) && !userStore().isLogged){
    next({name:'login'})
  }else{
    next()
  }
})

export default router
