<template>
    <h1>Shopping Cart</h1>
    <div v-for="item in cart" :key="item.id">
        <p>{{ item.title }} - ${{ item.price }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
    </div>
    <router-link to="/checkout">Proceed to Checkout</router-link>
</template>

<script>
export default {
    data() {
        return { cart: [] };
    },
    methods: {
        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id);
        }
    }
}
</script>
