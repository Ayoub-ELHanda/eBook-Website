<template>
  <div>
    <div class="products">
      <div class="container">
        <!-- Proper use of v-for with Vue 3 -->
        <template v-for="product in products" :key="product.id">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../../store/cartStore'
import { storeToRefs } from 'pinia'
import ProductItem from './ProductItem.vue'

// Correctly using Pinia store
const cartStore = useCartStore()
const { products } = storeToRefs(cartStore)

// Fetch products when component is created
cartStore.fetchProducts()
</script>

<style>
.products {
  background: #F7F8FB;
  padding: 30px 0;
}
</style>
