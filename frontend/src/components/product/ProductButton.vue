<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">
      <i class="fa fa-cart-plus"></i> Add to Cart
    </button>
    <button v-else class="button button-danger" @click="removeFromCart(product._id)">
      <i class="fa fa-trash"></i> Remove from Cart
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useCartStore } from '../../store/cartStore';

const props = defineProps({
    product: Object
});

const cartStore = useCartStore();

// Computed to check if the product is already in the cart
const isAdding = computed(() => !cartStore.cart.some(item => item._id === props.product._id));

// Methods to add and remove products from the cart
const addToCart = () => {
    cartStore.addToCart(props.product);
};

const removeFromCart = (id) => {
    cartStore.removeFromCart(id);
};
</script>

<style scoped>
.button {
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.button-danger {
    background: red;
    color: white;
}
</style>
