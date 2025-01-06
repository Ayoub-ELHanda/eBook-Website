<template>
  <div v-if="cart.length > 0">
    <app-header></app-header>
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <!-- FIXED: Key moved to the template -->
    <template v-for="(product, index) in cart" :key="index">
      <product-details :product="product"></product-details>
    </template>
  </div>
  <div v-else class="title">
    <app-header></app-header>
    <h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1>
  </div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails.vue';
import AppHeader from './Header.vue';

export default {
    data() {
        return {
            cart: this.$store.state.cart
        };
    },
    components: {
        'product-details': ProductDetails,
        'app-header': AppHeader
    }
};
</script>

<style scoped>
.title {
    text-align: center;
    margin-top: 20px;
}
</style>
