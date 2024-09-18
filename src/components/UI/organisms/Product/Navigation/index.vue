<template>
  <div class="products-navigation-wrapper">
    <el-button 
      v-for="(button, index) in translatedButtons" 
      :key="index" 
      link 
      :class="['product-navigation-button', {'active': button.value === props.actual }]"
      @click="$emit('position', button.value)"
    >
      {{ button.text }}
    </el-button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  actual: String,
});

const { t } = useI18n();

// Define the buttons array as a computed property to ensure dynamic translation
const translatedButtons = computed(() => [
  {
    text: t('pages.products.navigation.all'),
    value: 'all',
  },
  {
    text: t('pages.products.navigation.corn'), // Assuming you add translations for these
    value: 'maiz',
  },
  {
    text: t('pages.products.navigation.special'), // Assuming you add translations for these
    value: 'especiales',
  },
  {
    text: t('pages.products.navigation.wheat'), // Assuming you add translations for these
    value: 'harina-de-trigo',
  },
  {
    text: t('pages.products.navigation.potato'), // Assuming you add translations for these
    value: 'harina-de-papa',
  },
]);
</script>

<style scoped>
.products-navigation-wrapper {
  display: flex;
  justify-content: center;
  @media (width < 768px) {
    flex-wrap: wrap;
  }
}

.product-navigation-button {
  font-size: 16px;
  transition: all 0.5s ease;
}

.product-navigation-button:hover, 
.product-navigation-button.active {
  color: black !important;
  opacity: 1;
}
</style>
