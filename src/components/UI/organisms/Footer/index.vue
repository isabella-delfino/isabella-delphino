<template>
  <Separator />
  <div class="footer-wrapper">
    <div class="footer-logo-links">
      <Logo />
      <!-- i18n button -->
    </div>

    <div class="footer-web-links">
      <h2>Menu</h2>
      <LayoutAnchor to='/' :text="$t('navigation.home')" />
      <LayoutAnchor to='/products' :text="$t('navigation.products')" />
      <LayoutAnchor to='/about' :text="$t('navigation.about')" />
      <LayoutAnchor to='/contact' :text="$t('navigation.contact')" />
    </div>

    <div class="footer-social-links">
      <h2>{{ $t('footer.follow') }}</h2>
      <div>
        <AwesomeSocialButton type="instagram" :link="{ href: 'https://instagram.com', target: '_blank' }" shape="square" />
        <AwesomeSocialButton type="facebook" :link="{ href: 'https://facebook.com', target: '_blank' }" shape="square" />
        <AwesomeSocialButton type="twitter" :link="{ href: 'https://twitter.com', target: '_blank' }" shape="square" />
      </div>
      <i18n class="i18n"/>
    </div>

  </div>
</template>

<script setup>
import Logo from '@/components/UI/atoms/Anchor/Layout/Logo/index.vue'
import LayoutAnchor from "@/components/UI/atoms/Anchor/Layout/index.vue"
import Separator from "@/components/UI/atoms/Separator/Main/Index.vue"
import { AwesomeSocialButton } from 'awesome-social-button'
import i18n from '@/components/UI/organisms/i18n/index.vue'
</script>

<style scoped>
.footer-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  @media (width < 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.footer-wrapper div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (width >= 768px) {
    width: 33.33%;
  }
}

.footer-social-links div {
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (width >= 768px) and (width < 1024px) {
    width: 80% !important;
  }
}

.i18n {
  margin-top: 3rem;
  @media (width >= 768px) and (width < 1024px) {
    width: 100% !important;
  }
}
</style>