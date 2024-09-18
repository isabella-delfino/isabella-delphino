<template>
  <section class="contact-section">
    <div class="contact-section-text-wrapper">
      <h1>{{ $t('pages.contact.title') }}</h1>
      <h3>{{ $t('pages.contact.join') }}</h3>
      <p>{{ $t('pages.contact.join-p') }}</p>
      <h4>
        <em>E-mail:</em> 
        <Icon icon="line-md:email" height="auto" />
        <span>isabelle@plourdes.com</span>
      </h4>
      <img src="/contact.png" alt="Sending Emails" style="width: 100%;">
    </div>
    <div class="contact-section-form-wrapper">
      <Form/>
    </div>
  </section>
</template>

<script setup>
import Form from "@/components/UI/organisms/Form/Contact/index.vue"
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.contact-section {
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 5rem;
  @media (width < 768px) {
    flex-direction: column;
  }
}
.contact-section-text-wrapper {
  @media (width >= 768px) {
    width: 50%;
    padding-right: 10rem;
  }
}
.contact-section-text-wrapper h1 {
  font-size: 36px;
}
.contact-section-text-wrapper h3 {
  font-size: 22px;
}
.contact-section-text-wrapper p {
  font-size: 18px;
  text-align: justify;
}
.contact-section-text-wrapper h4 {
  font-size: 18px;
  display: flex;
  gap: 10px;
}
.contact-section-text-wrapper h4 > em {
  text-decoration: none;
  font-style: normal;
}
.contact-section-text-wrapper h4 > span {
  font-weight: 500;
}
.contact-section-form-wrapper {
  @media (width >= 768px) {
    width: 30%;
  }
  @media (width > 768px) {
    padding: 5rem;
    background-color: #2e3192;
    box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
  }
}
.contact-section-form-wrapper {
  display: flex;
  align-items: center;
}
</style>