<template>
  <div class="navigation">
    <Draggable id="drawer"><Drawer v-if="viewport === 'mobile'"/></Draggable>
    <div v-if="!(viewport === 'mobile')" class="navigationItems">
      <div class="logo-wrapper">
        <Logo />
        <h2>Maquiladora de botanas lourdes</h2>
      </div>
      <NavAnchors />
    </div>
  </div>
</template>

<script setup>
import { useViewport } from '@/composables/useViewport';
import Logo from '@/components/UI/atoms/Anchor/Layout/Logo/index.vue'
import NavAnchors from '@/components/UI/molecules/Navigation/index.vue'

import Drawer from "@/components/UI/organisms/Drawer/Header/Index.vue"
import Draggable from "@/components/Draggable/index.vue"

const { viewport } = useViewport();
</script>

<style scoped>
.navigation {
  display: flex;
  padding: 30px 50px;
  align-items: center;
  background-color: transparent;

  position: relative;
  z-index: 1000;
}

.navigationItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0%;
  border-bottom: 2px solid black;
}

.logo-wrapper {
  display: flex;
  gap: 10px;
}

.logo-wrapper h2 {
  @media (width < 1200px) {
    display: none;
  }
}
</style>