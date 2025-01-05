<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/register">Register</RouterLink> | 
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <!-- This will render the current route view -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b883;
}
nav a:hover {
  text-decoration: underline;
}
</style>
