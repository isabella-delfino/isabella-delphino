<template>
  <div class="navigationWrap">
    <i18n />
    <nav class="navigationItems" role="navigation">
      <LayoutAnchor to='/' :text='$t("navigation.home")' />
      <LayoutAnchor to='/products' :text='$t("navigation.products")' />
      <LayoutAnchor to='/about' :text='$t("navigation.about")' />
      <LayoutAnchor to='/contact' :text='$t("navigation.contact")' />
    </nav>
  </div>
</template>

<script setup>
import LayoutAnchor from "@/components/UI/atoms/Anchor/Layout/index.vue"
import i18n from '@/components/UI/organisms/i18n/index.vue'
</script>

<style scoped>
.navigationWrap {
  display: flex;
  align-items: center;
}

.navigationItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0%;
}
</style>