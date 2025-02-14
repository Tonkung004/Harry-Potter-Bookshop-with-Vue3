<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Harry Potter Book Store</h1>

    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(book, index) in books"
        :key="index"
        class="p-4 border border-gray-200 rounded flex flex-col"
      >
        <img :src="book.image" :alt="book.name" class="w-full h-48 object-cover mb-2 rounded">

        <h2 class="text-lg font-semibold">{{ book.name }}</h2>

        <div class="flex flex-col items-end mt-2">
          <p class="text-sm text-gray-500">{{ book.price }} THB</p>

          <div class="flex items-center border border-gray-300 rounded mt-1">
            <button
              @click="decreaseTempQuantity(book)"
              class="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-l"
              :disabled="book.tempQuantity === 0"
            >
              -
            </button>
            <span class="px-4 text-lg font-medium">{{ book.tempQuantity || 0 }}</span>
            <button
              @click="increaseTempQuantity(book)"
              class="px-3 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-r"
            >
              +
            </button>
          </div>

          <button
            @click="addToCart(book)"
            class="mt-2 p-2 bg-blue-500 text-white rounded text-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <router-link to="/cart" class="mt-4 inline-block text-blue-500">
      Go to Cart
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { 
          name: "Harry Potter and the Philosopher's Stone", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://bci.kinokuniya.com/th/jsp/images/book-img/97814/97814088/9781408855652.JPG"
        },
        { 
          name: "Harry Potter and the Chamber of Secrets", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://m.media-amazon.com/images/I/918wxhKJaPL._AC_UF1000,1000_QL80_.jpg"
        },
        { 
          name: "Harry Potter and the Prisoner of Azkaban", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://cdn.shopify.com/s/files/1/0625/6679/3413/files/Harry_20Potter_20and_20the_20Prisoner_20of_20Azkaban_20MinaLima_20Edition.jpg?v=1716637711"
        },
        { 
          name: "Harry Potter and the Goblet of Fire", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://m.media-amazon.com/images/I/81YoazRCtBL._UF1000,1000_QL80_.jpg"
        },
        { 
          name: "Harry Potter and the Order of the Phoenix", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://m.media-amazon.com/images/I/71pgI2ou5oL._SY466_.jpg"
        },
        { 
          name: "Harry Potter and the Half-Blood Prince", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://images.booksense.com/images/995/582/9780545582995.jpg"
        },
        { 
          name: "Harry Potter and the Deathly Hallows", 
          price: 100, 
          quantity: 0, 
          tempQuantity: 0,
          image: "https://bci.kinokuniya.com/jsp/images/book-img/97814/97814088/9781408855713.JPG"
        }
      ],
      incrementStep: 1, // ตัวแปรเพิ่มหรือลดจำนวนที่กด (สามารถปรับได้)
    };
  },
  methods: {
    increaseTempQuantity(book) {
      book.tempQuantity += this.incrementStep;  // เพิ่มจำนวนตามที่กำหนด
    },
    decreaseTempQuantity(book) {
      if (book.tempQuantity >= this.incrementStep) {
        book.tempQuantity -= this.incrementStep;  // ลดจำนวนตามที่กำหนด
      }
    },
    addToCart(book) {
    if (book.tempQuantity === 0) {
      alert("กรุณาเลือกจำนวนสินค้าก่อนเพิ่มลงในตะกร้า!");
      return; // หยุดการทำงานถ้า tempQuantity เป็น 0
    }

    // เพิ่มสินค้าลงในตะกร้าผ่าน Vuex
    this.$store.commit("addToCart", {
      name: book.name,
      price: book.price,
      quantity: book.tempQuantity, // ใช้ค่าที่เพิ่มเข้ามา
    });

    // อัปเดตจำนวนสินค้าจริงโดยบวกกับค่าที่เพิ่ม
    book.quantity += book.tempQuantity;

    // *** แก้ไข: อย่าล้างค่า tempQuantity ***
    // book.tempQuantity = 0; // เอาออก

    // รีเฟรชการแสดงผลของ Vue (ถ้าจำเป็น)
    this.$forceUpdate();

    // แสดงข้อความเมื่อเพิ่มสินค้าในตะกร้า
    alert(`${book.name} ได้ถูกเพิ่มลงในตะกร้าแล้ว.`);
  }
  }
};
</script>
