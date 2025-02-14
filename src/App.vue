<template>
  <div id="app">
    <header class="p-4 bg-blue-600 text-white">
      <h1 class="text-xl font-bold">Harry Potter Book Store</h1>
      <nav class="mt-2">
        <router-link to="/" class="text-white hover:text-gray-200 mr-4">Home</router-link>
        <router-link to="/cart" class="text-white hover:text-gray-200">Cart</router-link>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
}

header {
  background-color: #4CAF50;
  padding: 10px;
  color: white;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  color: #ddd;
}
</style>
