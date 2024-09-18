<template>
  <router-link
    :to="props.to"
    :class="['layoutAnchor', { 'active': isActive }]"
  >
    {{ props.text }}
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: String,
  text: String,
});

const route = useRoute();

// Determine if the current route matches the link's target
const isActive = computed(() => route.path === props.to);
</script>

<style scoped>
.layoutAnchor {
  font-family: 'Montserrat';
  color: black;
  padding: 9px 20px;
  opacity: 0.6;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s ease;
  font-weight: bold;
}

.layoutAnchor:hover,
.layoutAnchor.active {
  opacity: 1;
}
</style>