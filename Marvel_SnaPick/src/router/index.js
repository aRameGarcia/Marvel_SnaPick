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
      path:'/perfil',
      name:'profile',
      component: () => import('../views/v-profile.vue')
    },
    {
      path: '/perfil/cambiar-nombre',
      name:'rename',
      component: () => import('../views/v-rename.vue')
    },
    {
      path: '/perfil/cambiar-contraseña',
      name:'repassword',
      component: () => import('../views/v-repassword.vue')
    },
    {
      path: '/perfil/coleccion',
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
    return next({name:'login'})
  }
  if(!routesFree.includes(to.name) && !userStore().isLogged){
    return next({name:'login'})
  }
  next()
  
})

export default router
