<template>
  <div>
    <el-button-group class="ml-4">
      <el-button color="#FEBE00" @click="toggleLanguage('es')" type="primary"><Icon icon="flag:mx-4x3" /></el-button>
      <el-button color="#FEBE00" @click="toggleLanguage('en')" type="primary"><Icon icon="flag:us-4x3" /></el-button>
    </el-button-group>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  },
  methods: {
    toggleLanguage(language) {
      // Toggle between 'en' and 'es'
      this.$i18n.locale = language;
    }
  }
}
</script>