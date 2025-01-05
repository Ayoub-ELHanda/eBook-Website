<template>
    <div>
        <h1>Checkout</h1>
        
        <!-- Checkout Form -->
        <form @submit.prevent="submitOrder">
            <label for="fullName">Full Name:</label>
            <input v-model="fullName" type="text" required />

            <label for="email">Email:</label>
            <input v-model="email" type="email" required />

            <label for="address">Shipping Address:</label>
            <textarea v-model="address" required></textarea>

            <label for="cardNumber">Card Number:</label>
            <input v-model="cardNumber" type="text" maxlength="16" required />

            <label for="expiryDate">Expiry Date:</label>
            <input v-model="expiryDate" type="text" placeholder="MM/YY" required />

            <label for="cvv">CVV:</label>
            <input v-model="cvv" type="text" maxlength="3" required />

            <!-- Order Summary Section -->
            <h3>Order Summary</h3>
            <ul>
                <li v-for="(item, index) in cartItems" :key="index">
                    {{ item.title }} - ${{ item.price }} 
                </li>
            </ul>
            <p><strong>Total: ${{ totalPrice }}</strong></p>

            <!-- Submit Button -->
            <button type="submit">Submit Order</button>
        </form>

        <!-- Feedback Message -->
        <p v-if="message" :class="{ success: success, error: !success }">
            {{ message }}
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            fullName: '',
            email: '',
            address: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cartItems: [
                { title: "The Great Gatsby", price: 10 }, // Replace with dynamic cart data later
                { title: "1984", price: 15 }
            ],
            message: '',
            success: false
        };
    },
    computed: {
        // ✅ Calculate total price dynamically
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price, 0);
        }
    },
    methods: {
        async submitOrder() {
            try {
                const orderData = {
                    fullName: this.fullName,
                    email: this.email,
                    address: this.address,
                    cardNumber: this.cardNumber,
                    expiryDate: this.expiryDate,
                    cvv: this.cvv,
                    items: this.cartItems,
                    total: this.totalPrice
                };

                // ✅ Send order data to the backend
                const response = await axios.post('http://localhost:5000/api/orders', orderData);

                this.message = 'Order placed successfully!';
                this.success = true;

                // ✅ Clear form after successful order
                this.fullName = '';
                this.email = '';
                this.address = '';
                this.cardNumber = '';
                this.expiryDate = '';
                this.cvv = '';
            } catch (error) {
                this.message = 'Error placing order. Please try again.';
                this.success = false;
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
}

input, textarea, button {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
}

button {
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #2c7a59;
}

.success {
    color: green;
}

.error {
    color: red;
}
</style>
