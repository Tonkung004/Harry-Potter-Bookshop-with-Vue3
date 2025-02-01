// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import ProductDetails from '../views/ProductDetails.vue'
// import Cart from '../views/Cart.vue'
// import Checkout from '../views/Checkout.vue'
// import Profile from '../views/Profile.vue'
// import AboutUs from '../views/AboutUs.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/product/:id',
//     name: 'product-details',
//     component: ProductDetails
//   },
//   {
//     path: '/cart',
//     name: 'cart',
//     component: Cart
//   },
//   {
//     path: '/checkout',
//     name: 'checkout',
//     component: Checkout
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: Profile
//   },
//   {
//     path: '/about-us',
//     name: 'about-us',
//     component: AboutUs
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import BookPage from '../components/BookPage.vue'
import CartPage from '../components/CartPage.vue'

const routes = [
  { 
    path: '/', component: BookPage },
  { path: '/cart', component: CartPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // แก้ไขจาก process.env.BASE_URL
  routes
})

export default router
