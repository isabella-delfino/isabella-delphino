<template>
  <h3 class="subtitle">{{ text }}</h3>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>

<style scoped>
.subtitle {
  font-size: 32px;
  line-height: 34px;
  font-weight: 700;
  /* text-decoration: underline; */
  text-align: center;
  margin-top: 5rem;
}
</style>