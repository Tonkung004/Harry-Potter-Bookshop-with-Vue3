import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, book) {
      console.log('Adding to cart:', book)

      // ค้นหาว่าสินค้ามีอยู่แล้วในตะกร้าหรือไม่
      const existingItem = state.cart.find((item) => item.name === book.name)

      if (existingItem) {
        // ถ้ามีสินค้าแล้ว ให้เพิ่มจำนวน
        existingItem.quantity += book.quantity
      } else {
        // ถ้ายังไม่มี ให้เพิ่มเข้าไปใหม่
        state.cart.push({
          name: book.name,
          price: book.price,
          quantity: book.quantity
        })
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1) // ลบสินค้าตาม index ออกจากตะกร้า
    }
  },
  getters: {
    cartItems: (state) => state.cart
  }
})
