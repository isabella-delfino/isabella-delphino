<template>
  <h1 class="titleMain">{{ props.text }}</h1>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>

<style scoped>
.titleMain {
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 700;
  display: flex;
  text-align: center;
  justify-content: center;
  @media (width >= 768px) {
    font-size: 64px;
    line-height: 62px;
  }
}
</style>