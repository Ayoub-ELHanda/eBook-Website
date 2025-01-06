<template>
  <nav>
    <div class="container">
      <ul class="nav__left">
        <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
        <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
      </ul>
      <ul class="nav__right">
        <li>
          <router-link to="/cart">
            <i class="fa fa-shopping-cart"></i> Cart ({{ cartItemsCount }})
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../store/cartStore'
import { storeToRefs } from 'pinia'
import toastr from 'toastr'

// Importing Pinia Store correctly for Vue 3
const cartStore = useCartStore()
const { cartItemsCount } = storeToRefs(cartStore)

// Watch for mutation events
cartStore.$subscribe((mutation, state) => {
  switch (mutation.type) {
    case 'addProduct':
      toastr.success('Product added to cart.', 'Success!')
      break
    case 'removeProduct':
      toastr.warning('Product removed from cart.', 'Removed!')
      break
  }
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
