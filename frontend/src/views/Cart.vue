<template>
    <div>
        <h1>Shopping Cart</h1>

        <!-- If the cart is empty -->
        <p v-if="cartItems.length === 0">Your cart is empty.</p>

        <!-- If the cart has items -->
        <ul v-else>
            <li v-for="(item, index) in cartItems" :key="index">
                <p><strong>{{ item.title }}</strong> - ${{ item.price }}</p>
                
                <!-- Quantity Management -->
                <label>Quantity:</label>
                <input 
                    type="number" 
                    v-model="item.quantity" 
                    min="1" 
                    @input="updateCart"
                />

                <!-- Remove Item Button -->
                <button @click="removeFromCart(index)">Remove</button>
            </li>
        </ul>

        <!-- Cart Total -->
        <p><strong>Total Price: ${{ totalPrice }}</strong></p>

        <!-- Checkout Button -->
        <button @click="goToCheckout" :disabled="cartItems.length === 0">
            Proceed to Checkout
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: JSON.parse(localStorage.getItem('cart')) || []  // ✅ Persist cart using localStorage
        };
    },
    computed: {
        // ✅ Calculate total price dynamically based on item quantity
        totalPrice() {
            return this.cartItems.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        }
    },
    methods: {
        // ✅ Update cart items and save back to localStorage
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
        },

        // ✅ Remove item from cart
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
            this.updateCart();
        },

        // ✅ Redirect to the checkout page
        goToCheckout() {
            this.$router.push('/checkout');
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: #42b883;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    padding: 10px;
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;
}

button:hover {
    background-color: #2c7a59;
}

input[type="number"] {
    width: 60px;
    padding: 5px;
    margin-left: 10px;
}
</style>
