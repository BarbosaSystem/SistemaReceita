import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from '../src/helpers/authguard'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      beforeEnter: AuthGuard,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'home',
      beforeEnter: AuthGuard,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login/Login.vue')
    },
    {
      path: '/recover',
      name: 'Recover',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login/RecuperarSenha.vue')
    },
    {
      path: '/nova_receita',
      name: 'NewReceita',
      beforeEnter: AuthGuard,
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
      name: 'Lista_Receita',
      beforeEnter: AuthGuard,
      meta: {
        title: 'Relação de Clientes',
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
      beforeEnter: AuthGuard,
      meta: {
        title: 'Usuário',
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* component: () => import(/* webpackChunkName: "about" './views/Usuario/RelacaoUsuario.vue') */
      component: () => import(/* webpackChunkName: "about" */ './views/Usuario/RelacaoUsuario.vue')
    }
  ]
})


export default router