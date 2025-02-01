// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     cart: []
//   },
//   mutations: {
//     addToCart(state, item) {
//       const existingItem = state.cart.find((cartItem) => cartItem.name === item.name)
//       if (existingItem) {
//         existingItem.quantity += item.quantity // ถ้ามีสินค้าแล้ว ให้เพิ่มจำนวน
//       } else {
//         state.cart.push({ ...item }) // ถ้ายังไม่มี ให้เพิ่มใหม่
//       }
//     }
//   },
//   getters: {
//     cartItems: (state) => state.cart // Getter สำหรับดึงรายการสินค้า
//   }
// })
