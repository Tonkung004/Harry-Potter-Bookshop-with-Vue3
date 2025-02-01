// // shoppingCart.test.js
// import { mount } from '@vue/test-utils'
// import ShoppingCart from '@/components/ShoppingCart.vue'

// describe('ShoppingCart.vue', () => {
//   let wrapper

//   beforeEach(() => {
//     wrapper = mount(ShoppingCart, {
//       mocks: {
//         $store: {
//           state: {
//             cart: [] // กำหนดตะกร้าสินค้าตามต้องการในการทดสอบ
//           }
//         }
//       }
//     })
//   })

//   test('calculates total price for 3 unique books with discount', () => {
//     // ตั้งค่าตะกร้าสินค้า
//     wrapper.vm.$store.state.cart = [
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: 'Harry Potter and the Chamber of Secrets', price: 100 },
//       { name: 'Harry Potter and the Prisoner of Azkaban', price: 100 }
//     ]

//     const result = wrapper.vm.calculateTotalPrice(wrapper.vm.$store.state.cart)
//     expect(result).toBe(240) // ราคาหลังส่วนลด 20% สำหรับ 3 เล่ม
//   })

//   test('calculates total price for 6 unique books with discount', () => {
//     wrapper.vm.$store.state.cart = [
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: 'Harry Potter and the Chamber of Secrets', price: 100 },
//       { name: 'Harry Potter and the Prisoner of Azkaban', price: 100 },
//       { name: 'Harry Potter and the Goblet of Fire', price: 100 },
//       { name: 'Harry Potter and the Order of the Phoenix', price: 100 },
//       { name: 'Harry Potter and the Half-Blood Prince', price: 100 }
//     ]

//     const result = wrapper.vm.calculateTotalPrice(wrapper.vm.$store.state.cart)
//     expect(result).toBe(540) // ราคาหลังส่วนลด 50% สำหรับ 6 เล่ม
//   })

//   test('calculates total price for repeated books without discount', () => {
//     wrapper.vm.$store.state.cart = [
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 }
//     ]

//     const result = wrapper.vm.calculateTotalPrice(wrapper.vm.$store.state.cart)
//     expect(result).toBe(300) // ไม่มีส่วนลดเพราะซื้อซ้ำกัน
//   })

//   test('calculates total price for mixed unique and repeated books', () => {
//     wrapper.vm.$store.state.cart = [
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: 'Harry Potter and the Chamber of Secrets', price: 100 },
//       { name: 'Harry Potter and the Prisoner of Azkaban', price: 100 },
//       { name: 'Harry Potter and the Prisoner of Azkaban', price: 100 }
//     ]

//     const result = wrapper.vm.calculateTotalPrice(wrapper.vm.$store.state.cart)
//     expect(result).toBe(380) // ราคาหลังส่วนลด 20% สำหรับ 3 เล่มที่ไม่ซ้ำกัน + ราคาเต็มสำหรับเล่มซ้ำ
//   })

//   test('calculates total price for 10 identical books with no discount', () => {
//     wrapper.vm.$store.state.cart = [
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 },
//       { name: "Harry Potter and the Philosopher's Stone", price: 100 }
//     ]

//     const result = wrapper.vm.calculateTotalPrice(wrapper.vm.$store.state.cart)
//     expect(result).toBe(1000) // ไม่มีส่วนลดสำหรับการซื้อเล่มเดียวกัน 10 เล่ม
//   })
// })
