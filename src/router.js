import { createRouter, createWebHistory } from 'vue-router'
import userPage from './components/userPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: userPage,
    }
  ]
})