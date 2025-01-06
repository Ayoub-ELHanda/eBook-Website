<template>
  <div>
    <!-- Updated to use component names directly without manual registration -->
    <AppHeader />
    <ProductList />
  </div>
</template>

<script setup>
import AppHeader from './Header.vue'
import ProductList from '../components/product/ProductList.vue'
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
