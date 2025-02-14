<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    
    <CartPage />
  </div>
</template>

<script>
import CartPage from "@/components/CartPage.vue"; // นำเข้า CartPage

export default {
  components: {
    CartPage,
  },
};
</script>
