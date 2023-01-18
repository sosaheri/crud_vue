import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import CreateView from '../components/crud/CreateView.vue'
import EditView from '../components/crud/EditView.vue'
import ListView from '../components/crud/ListView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
   {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
