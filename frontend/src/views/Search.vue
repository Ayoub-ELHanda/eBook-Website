<template>
    <h1>Search Books</h1>
    <input v-model="query" placeholder="Search for books...">
    <button @click="searchBooks">Search</button>
    <div v-for="book in results" :key="book.id">
        <p>{{ book.title }} - ${{ book.price }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { query: '', results: [] };
    },
    methods: {
        async searchBooks() {
            const response = await axios.get(`http://localhost:5000/api/books/search?query=${this.query}`);
            this.results = response.data;
        }
    }
}
</script>
