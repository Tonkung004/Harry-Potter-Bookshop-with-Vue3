<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>

    <div v-if="cart.length > 0">
      <div
        v-for="(item, index) in cart"
        :key="index"
        class="flex justify-between py-2 border-b items-center"
      >
        <span>{{ item.name }}</span>
        <div class="flex items-center gap-4">
          <span>{{ item.price }} THB</span>
          <button
            @click="confirmRemove(index, item.name)"
            class="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="mt-4 flex justify-between">
        <span>Total Price (Before Discount):</span>
        <span>{{ totalPriceBeforeDiscount }} THB</span>
      </div>

      <div class="mt-2 flex justify-between text-green-600">
        <span>Discount:</span>
        <span>-{{ discount }} THB</span>
      </div>

      <div class="mt-2 flex justify-between font-bold">
        <span>Total Price (After Discount):</span>
        <span>{{ totalPrice }} THB</span>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>

    <router-link to="/" class="mt-4 inline-block text-blue-500">
      Go back to shopping
    </router-link>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { calculateTotalPrice, calculateTotalPriceBeforeDiscount, calculateDiscount } from "@/utils/cartUtils";

export default {
  computed: {
    ...mapState(["cart"]),

    totalPriceBeforeDiscount() {
      return calculateTotalPriceBeforeDiscount(this.cart);
    },

    discount() {
      return calculateDiscount(this.cart);
    },

    totalPrice() {
      return calculateTotalPrice(this.cart);
    },
  },

  methods: {
    ...mapMutations(["REMOVE_FROM_CART"]),

    confirmRemove(index, name) {
      if (window.confirm(`Are you sure you want to remove "${name}" from the cart?`)) {
        this.REMOVE_FROM_CART(index);
      }
    },
  },
};
</script>
