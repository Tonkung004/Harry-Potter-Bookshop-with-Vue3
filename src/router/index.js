import { createRouter, createWebHistory } from 'vue-router'
import BookPage from '../components/BookPage.vue'
import CartPage from '../components/CartPage.vue'

const routes = [
  { 
    path: '/', component: BookPage },
  { path: '/cart', component: CartPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
