<script setup>
import Home from '@/views/home/home.vue'
import About from '@/views/about/about.vue'
// import Home from './views/home/index.vue';

</script>

<template>
  <header class="header">
    Vue + Vite
  </header>

  <main>
    <div class="main">
      <router-link to="/home" active-class="active">home</router-link>
      <router-link to="/about" active-class="active">about</router-link>
    </div>
    <router-view></router-view>
  </main>
</template>

<style scoped>
  .header, .main {
    text-align: center;
    margin: 20px 0;
  }
  .active {
    color: skyblue;
  }
</style>
