<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Harry Potter Book Store</h1>

    <!-- คอมโพเนนต์รายการหนังสือ -->
    <BookPage />

    <!-- ปุ่มไปยังตะกร้าสินค้า -->
    <div class="mt-6 text-center">
      <router-link to="/cart" class="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Cart
      </router-link>
    </div>
  </div>
</template>

<script>
import BookPage from "@/components/BookPage.vue";

export default {
  components: {
    BookPage, // ใช้ BookPage ที่แยกเป็น Component
  },
};
</script>
