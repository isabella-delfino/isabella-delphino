<template>
  <router-link to="/">
    <img class="logo" :src="logo" alt="Logo image" width="65" />
  </router-link>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
</script>

<style scoped>
.logo {
  transition: all 0.5s ease;
}

.logo:hover {
  opacity: 0.6;
}
</style>