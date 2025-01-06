<template>
    <h1>Order History</h1>
    <div v-for="order in orders" :key="order.id">
        <p>Order ID: {{ order.id }} - Total: ${{ order.total }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { orders: [] };
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/orders', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => { this.orders = response.data; });
    }
}
</script>
