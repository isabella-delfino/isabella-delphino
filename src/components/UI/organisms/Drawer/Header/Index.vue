<template>
  <div>
    <el-button type="primary" style="margin-left: 16px" color="#FEBE00" @click="drawer = true">
      <Icon icon="pajamas:hamburger" />
    </el-button>

    <el-drawer size="70%" v-model="drawer" title="Header Drawer" :with-header="false">
      <div class="drawer-content-wrapper">
        <LayoutAnchor to='/' :text='$t("navigation.home")' />
        <LayoutAnchor to='/products' :text='$t("navigation.products")' />
        <LayoutAnchor to='/about' :text='$t("navigation.about")' />
        <LayoutAnchor to='/contact' :text='$t("navigation.contact")' />
        <i18n />
      </div>
    </el-drawer>
  </div>
</template>
 
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import LayoutAnchor from "@/components/UI/atoms/Anchor/Layout/index.vue"
import i18n from '@/components/UI/organisms/i18n/index.vue'
const drawer = ref(false)
</script>

<style scoped>
.drawer-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
