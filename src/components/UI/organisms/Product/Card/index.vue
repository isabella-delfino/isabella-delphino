<template>
  <div class="product-card">
    <img :src="product.pic" alt="Product Image" />
    <h4>{{ product.nombre }}</h4>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>


<style scoped>
.product-card {
  width: 300px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 10px;
  transition: 1s all ease;
}

.product-card:hover {
  scale: 1.1;
}

.product-card img {
  height: 300px;
}

.product-card h4 {
  margin: 0;
  margin: 1rem 0;
  text-align: center;
  font-size: 24px;
}
</style>