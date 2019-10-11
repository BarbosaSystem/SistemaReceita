import Vue from 'vue'
import Router from 'vue-router'
import { store } from './Store/store'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login/Login.vue')
    },
    {
      path: '/recover',
      name: 'Recever',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login/RecuperarSenha.vue')
    },
    {
      path: '/nova_receita',
      name: 'NewReceita',
      meta: {
        title: 'Nova Receita',
        requiresAuth: true
      },
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Receita/NovaReceita.vue')
    },
    {
      path: '/receitas',
      name: 'lista_receitas',
      meta: {
        title: 'Nova Receita',
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Receita/RelacaoReceita.vue')
    },
    {
      path: '/usuarios',
      name: 'lista_usuarios',
      meta: {
        title: 'Nova Receita',
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Usuario/RelacaoUsuario.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = store.getters.GetLogin

  if(to.name === '/'){
    next('/login')
  }

  if(requiresAuth && !currentUser){
    next('/login')
  }else if (requiresAuth && currentUser){
    next()
  }else {
    next()
  }
})

/* router.beforeRouteLeave( (to, from, next) => {
  if(confirm("Deseja sair?")){
    next()
  }
}) */
/* router.beforeEach ( (to, from, next) =>{
  let routerAuthCheck = false;

  if(to.matched.some(record => record.meta.requiresAuth)){
    if(routerAuthCheck){
      next()
    }
    else{
      router.replace('/login')
    }
  }
}) */

/* router.beforeEach((to, from, next) => {
  if(!window.uid && to.name !== 'login'){
    next({name: 'login'})
  }
  else {
    next()
  }
}) */



export default router