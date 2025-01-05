<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <input v-model="email" type="email" placeholder="Enter Email" required />
            <input v-model="password" type="password" placeholder="Enter Password" required />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async registerUser() {
            try {
                await axios.post('http://localhost:5000/api/users/register', {
                    email: this.email,
                    password: this.password
                });
                alert('Registration Successful');
            } catch (error) {
                alert('Error Registering User');
            }
        }
    }
}
</script>

<style scoped>
input, button { padding: 10px; margin-bottom: 10px; }
button { background: #42b883; color: white; border: none; }
</style>
