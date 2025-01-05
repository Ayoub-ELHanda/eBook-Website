<template>
    <div>
        <h1>eBook Details</h1>
        
        <!-- Show book details if available -->
        <div v-if="book">
            <p><strong>Title:</strong> {{ book.title }}</p>
            <p><strong>Author:</strong> {{ book.author }}</p>
            <p><strong>Price:</strong> ${{ book.price }}</p>
            <p><strong>Description:</strong> {{ book.description }}</p>
            <button @click="addToCart">Add to Cart</button>
        </div>
        
        <!-- Loading message -->
        <p v-else-if="loading">Loading eBook details...</p>

        <!-- Error message -->
        <p v-else>Error fetching eBook details. Please try again.</p>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
    data() {
        return {
            book: null,      // ✅ Stores the fetched book details
            loading: true,   // ✅ Loading state
            error: false     // ✅ Error handling state
        };
    },
    async mounted() {
        const route = useRoute();  // ✅ Accessing route params
        const bookId = route.params.id;
        await this.fetchBookDetails(bookId);
    },
    methods: {
        async fetchBookDetails(id) {
            try {
                const response = await axios.get(`http://localhost:5000/api/ebooks/${id}`);
                this.book = response.data;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching eBook details:', error);
                this.loading = false;
                this.error = true;
            }
        },

        addToCart() {
            alert(`Added "${this.book.title}" to the cart!`);
        }
    }
}
</script>

<style scoped>
h1 {
    color: #42b883;
}

button {
    padding: 10px 15px;
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #2c7a59;
}
</style>
