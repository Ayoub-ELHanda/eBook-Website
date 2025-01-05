<template>
    <div>
        <h1>Order History</h1>
        <ul>
            <li v-for="order in orders" :key="order._id">
                <strong>Order ID:</strong> {{ order._id }} | 
                <strong>Date:</strong> {{ order.date }} |
                <strong>Total:</strong> ${{ order.total }}
            </li>
        </ul>
        <p v-if="orders.length === 0">No orders found.</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            orders: []  // ✅ Store order data here
        };
    },
    async mounted() {
        await this.fetchOrderHistory();
    },
    methods: {
        async fetchOrderHistory() {
            try {
                const response = await axios.get('http://localhost:5000/api/orders');
                this.orders = response.data;
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
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
    list-style: none;
    padding: 0;
}
li {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 5px;
}
</style>
