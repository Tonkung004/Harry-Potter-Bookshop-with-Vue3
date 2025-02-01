<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>

    <!-- แสดงรายการสินค้าจากตะกร้า -->
    <div v-if="cart.length > 0">
      <div v-for="(item, index) in cart" :key="index" class="flex justify-between py-2 border-b items-center">
        <span>{{ item.name }} ({{ item.quantity }} เล่ม)</span> <!-- แสดงจำนวนที่เพิ่ม -->
        <div class="flex items-center gap-4">
          <span>{{ item.price }} THB</span>
          <button @click="confirmRemove(index, item.name)" class="bg-red-500 text-white px-2 py-1 rounded">
            Remove
          </button>
        </div>
      </div>

      <!-- แสดงราคารวมทั้งหมดก่อนส่วนลด -->
      <div class="mt-4 flex justify-between">
        <span>Total Price (Before Discount):</span>
        <span>{{ calculateTotalPriceBeforeDiscount(cart) }} THB</span>
      </div>

      <!-- แสดงส่วนลด -->
      <div class="mt-2 flex justify-between text-red-600">
        <span>Discount:</span>
        <span>-{{ calculateDiscount(cart) }} THB</span>
      </div>

      <!-- แสดงราคารวมสุทธิ -->
      <div class="mt-2 flex justify-between font-bold">
        <span>Total Price (After Discount):</span>
        <span>{{ calculateTotalPrice(cart) }} THB</span>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>

    <router-link to="/" class="mt-4 inline-block text-blue-500">Go back to shopping</router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    cart() {
      return this.$store.state.cart; // ดึงตะกร้าสินค้าจาก Vuex
    },
  },
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"]), // ใช้ Vuex mutation

    confirmRemove(index, name) {
      if (window.confirm(`Are you sure you want to remove "${name}" from the cart?`)) {
        this.REMOVE_FROM_CART(index);
      }
    },

    // คำนวณราคารวมทั้งหมดก่อนหักส่วนลด
    calculateTotalPriceBeforeDiscount(cart) {
      return cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // คำนวณรวมราคาตามจำนวน
    },

    // คำนวณส่วนลดทั้งหมด
    calculateDiscount(cart) {
      const pricePerBook = 100;
      let discount = 0;

      const bookCounts = {};
      cart.forEach((book) => {
        bookCounts[book.name] = (bookCounts[book.name] || 0) + book.quantity; // คำนวณจำนวนสินค้าตาม quantity
      });

      const uniqueBooks = Object.keys(bookCounts);
      while (uniqueBooks.length > 0) {
        const setCount = uniqueBooks.length;

        let discountRate = 0;
        if (setCount === 2) discountRate = 0.1;
        else if (setCount === 3) discountRate = 0.2;
        else if (setCount === 4) discountRate = 0.3;
        else if (setCount === 5) discountRate = 0.4;
        else if (setCount === 6) discountRate = 0.5;
        else if (setCount === 7) discountRate = 0.6;

        discount += pricePerBook * setCount * discountRate;

        uniqueBooks.forEach((book) => {
          bookCounts[book] -= 1;
          if (bookCounts[book] === 0) delete bookCounts[book];
        });

        uniqueBooks.length = Object.keys(bookCounts).length;
      }

      return discount;
    },

    // คำนวณราคาหลังหักส่วนลด
    calculateTotalPrice(cart) {
      return this.calculateTotalPriceBeforeDiscount(cart) - this.calculateDiscount(cart);
    },
  },
};
</script>
