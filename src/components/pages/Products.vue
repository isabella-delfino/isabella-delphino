<template>
  <Title :text="$t('pages.products.title')" />
  <section class="products-navigation-section">
    <Navigation :actual="actual" @position="getPosition" link/>
  </section>
  <section class="products-section">
    <div v-if="Object.keys(productList).length > 0" class="product-card-wrapper">
      <Card v-for="(product, index) in productList" :key="product.id" :product="product" />
    </div>
  </section>
  <section class="products-all-section" v-if="actual === 'all'">
    <div class="product-all-title-wrapper">
      <Subtitle :text="$t('pages.products.all.brands')" />
      <p v-html="$t('pages.products.all.brands-p')"></p>
    </div>
    
    <div class="details-video-wrapper">

      <div class="details-wrapper">
        <div>
          <h4>{{ $t('pages.products.all.bobbin') }}</h4>
          <p>{{ $t('pages.products.all.bobbin-p') }}</p>
        </div>
        
        <div>
          <h4>{{ $t('pages.products.all.production') }}</h4>
          <p>{{ $t('pages.products.all.production-p') }}</p>
        </div>
        
        <div>
          <h4>{{ $t('pages.products.all.flavor') }}</h4>
          <p>{{ $t('pages.products.all.flavor-p') }}</p>
        </div>
      </div>

      <div>
        <Video/>
      </div>
    
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Navigation from "@/components/UI/organisms/Product/Navigation/index.vue"
import Card from "@/components/UI/organisms/Product/Card/index.vue"
import Title from "@/components/UI/atoms/Text/Titles/Main/index.vue"
import Subtitle from '@/components/UI/atoms/Text/Subtitles/index.vue'
import products from '@/assets/products.json'
import Video from '@/components/UI/organisms/Video/Product/index.vue'
const actual = ref("all");

// Create a computed property to get the list of products based on the current category
const productList = computed(() => {
  return Object.values(products[actual.value] || {});
});

function getPosition(position) {
  actual.value = position;
}
</script>

<style scoped>
.products-navigation-section {
  border-bottom: 1px solid black;
  margin: 2rem auto;
  @media (width >= 768px) {
    width: 80%;
  }
}

.products-section {
  display: flex;
  justify-content: center;
}

.product-card-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 80%;
}

.products-all-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-all-title-wrapper {
  display: flex;
  flex-direction: column;
  @media (width >= 768px) {
    width: 80%;
  }
}

.product-all-title-wrapper h3 {
  text-align: start;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  color: white;
  padding: 1rem;
  background-color: #2e3192;
  @media (width < 768px) {
    text-align: center;
  }
}

.product-all-title-wrapper p {
  margin-top: 0;
  font-size: 18px;
  @media (width < 768px) {
    text-align: justify;
    width: 80%;
    align-self: center;
  }
}

.details-video-wrapper {
  display: flex;
  width: 80%;
  @media (width <= 768px) {
    flex-direction: column;
  }
}

.details-wrapper {
  @media (width > 768px) {
    padding-right: 10rem;
    width: 70%;
  }
}

.details-wrapper div h4 {
  margin: 0;
  font-size: 24px;
  color: white;
  padding: 0.3rem;
  background-color: #2e3192;
}

.details-wrapper div p {
  font-size: 18px;
  text-align: justify;
}
</style>