<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from "./components/UI/organisms/Header/index.vue"
import Footer from "./components/UI/organisms/Footer/index.vue"
</script>
