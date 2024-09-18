<template>
  <Video />
  <section class="our-mision-section">
    <div>
      <Subtitle :text="$t('pages.home.mission')" />
      <p>{{ $t('pages.home.mission-p') }}</p>
    </div>
    <div>
      <Subtitle :text="$t('pages.home.quality')" />
      <p>{{ $t('pages.home.quality-p') }}</p>
    </div>
  </section>
  <section class="images-section">
    <Subtitle :text="$t('pages.home.products')" />
    <!-- Imagenes -->
    <div class="images-wrapper">
      <img src="/home/MINI-ANILLO.jpg" alt="">
      <img src="/home/TAKIS-ROJO.png" alt="">
      <img src="/home/MAIZ-TRIANGULO.jpg" alt="">
      <img src="/home/MAIZ-ENROLLADO.jpg" alt="">
      <img src="/home/PELLET-SARGAZON.jpg" alt="">
      <img src="/home/TAKIS.png" alt="">
    </div>
    <span>{{ $t('pages.home.products-p') }}</span>
  </section>
  <!-- Join us -->
  <!-- <div class="join-us-wrapper">
    <Subtitle class="join-us-title" :text="$t('pages.about.join')" />
    <div class="join-us-span-container">
      <span>{{ $t('pages.about.join-p') }}</span>
    </div>
  </div> -->
  <!-- Certificaciones -->
  <section class="certifications-wrapper">
    <Subtitle :text="$t('certification')" />
    <div class="certification-images">
      <div>
        <img src="/kosher.png" alt="kosher certification">
        <h2>Kosher</h2>
      </div>
      <div>
        <img src="/halal.png" alt="halal certification">
        <h2>Halal</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Video from '@/components/UI/organisms/Video/index.vue'
import Subtitle from '@/components/UI/atoms/Text/Subtitles/index.vue'

const message = ref('Welcome to the Home Page');
</script>

<style>
.our-mision-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  @media (width <= 1000px) {
    flex-direction: column;
    align-items: center;
  }
  @media (width > 400px) {
    padding: 5rem;
    margin: 3rem;
  }
}

/* .our-mision-section::before {
  content: "";
  background-image: url(/bg-chips.png);
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
  z-index: -5;
  background-position: center;
} */

.our-mision-section div {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (width > 768px) {
    width: 40%;
  }
}

.our-mision-section div h3 {
  margin-top: 0 !important;
  background-color: #2e3192;
  color: white;
  padding: 2rem;
  width: 80%;
  @media (width < 768px) {
    margin-top: 1rem !important;
  }

  height: 4rem;
  display: flex;
  align-items: center;
  align-self: center;
  text-align: center;
  justify-content: center;
}

.our-mision-section div:nth-child(1) h3 {
  margin-top: 0;
  /* align-self: start; */
  width: 80%;
  @media (width < 768px) {
    align-self: center;
    margin-top: 3rem !important;
  }
  @media (width >= 768px) and (width < 1024px) {
    width: 100%;
    align-self: center;
  }
}

.our-mision-section div p {
  width: 70%;
  text-align: justify;
  font-size: 18px;
}

.images-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images-section h3 {
  align-self: center;
  text-align: start !important;
  @media (width > 768px) {
    width: 1200px;
  }
}

.images-section span {
  margin-top: 10px;
  text-align: center;
  letter-spacing: 1px;
  font-size: 24px;

  margin: 3rem;
  background-color: #3375ff;
  padding: 3rem;
  color: white;
  font-weight: 700;
  box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
  @media (width > 768px) {
    width: 1200px;
    margin: 3rem;
    padding: 3rem;
    color: white;
    font-weight: 700;
  }
}

.images-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 -5px 3px -3px black, 0 5px 3px -3px;
  @media (width <= 768px) {
    flex-direction: column;
  }
  @media (width > 768px) {
    width: 1200px;
  }
}

.images-wrapper img {
  width: 400px;
  height: 200px;
  transition: 1s all ease;
  @media (width <= 320px) {
    width: 320px;
  }
}

.images-wrapper img:hover {
  scale: 1.1;
}

.join-us-wrapper {
  font-size: 24px;
  text-align: justify;
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: auto;
}

.join-us-span-container {
  /* background-color: #e00000; */
  padding: 3rem;
  color: white;
  font-weight: 700;
  /* box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3); */
  margin: auto;
}

.join-us-title {
  background-color: #2e3192;
  color: white;
  width: 100%;
  text-align: center;
  margin: 3rem auto;
  padding: 1rem 0;
  box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
}

.certifications-wrapper h3 {
  background-color: #2e3192;
  color: white;
  width: 80%;
  text-align: center;
  margin: 3rem auto;
  padding: 1rem 0;
  box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
}

.certification-images {
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (width < 1280px) {
    flex-direction: column;
  }
}

.certification-images div {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 40%; */
}

.certification-images div img {
  width: 200px;
  @media (width < 1280px) {
    width: 80%;
  }
}
</style>