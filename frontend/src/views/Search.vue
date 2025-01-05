<template>
    <h1>Search eBooks</h1>
    <form @submit.prevent="searchBooks">
        <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search for an eBook..." 
            required 
        />
        <button type="submit">Search</button>
    </form>

    <!-- Results Section -->
    <div v-if="results.length > 0">
        <h2>Search Results:</h2>
        <ul>
            <li v-for="book in results" :key="book._id">
                <strong>{{ book.title }}</strong> - {{ book.author }}
            </li>
        </ul>
    </div>

    <!-- Message for No Results -->
    <p v-else-if="noResults">No eBooks found for "{{ searchQuery }}".</p>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: '',  // ✅ For storing the search input
            results: [],      // ✅ For storing search results from API
            noResults: false  // ✅ For handling no results
        };
    },
    methods: {
        async searchBooks() {
            try {
                // ✅ Send a GET request to the backend with the search query
                const response = await axios.get(`http://localhost:5000/api/ebooks?title=${this.searchQuery}`);
                
                // ✅ Handle search results
                this.results = response.data;
                this.noResults = this.results.length === 0;
            } catch (error) {
                console.error('Error searching for eBooks:', error);
                alert('Error fetching search results');
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
}

input, button {
    padding: 10px;
    margin-bottom: 10px;
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

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
</style>
