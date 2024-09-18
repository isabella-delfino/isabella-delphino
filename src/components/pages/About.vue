<template>
  <!-- <Title :text="$t('pages.about.title')" /> -->
  <!-- <section class="about-us-section">
    <div class="tijuana-wrapper">
      <img src="/tijuana.jpg" alt="" class="tijuana-pic">
      <span>{{ $t('pages.about.title-p') }}</span>
    </div>
  </section> -->
  <Subtitle class="about-us-culture" :text="$t('pages.about.culture')" />
  <section class="about-us-culture-section">
    <!-- <div class="about-us-culture-images">
      <img src="/about/cortaditos.jpg" alt="">
      <img src="/about/enrrollado.jpg" alt="">
    </div> -->
    <div class="mission-wrapper">
      <Subtitle :text="$t('pages.about.mission')" />
      <span>{{ $t('pages.about.mission-p') }}</span>
    </div>
    <div class="vision-wrapper">
      <Subtitle :text="$t('pages.about.vision')" />
      <span>{{ $t('pages.about.vision-p') }}</span>
    </div>
  </section>
  <section class="join-us-section">
    <div class="innovation-wrapper">
      <Subtitle :text="$t('pages.about.innovation')" />
      <span>{{ $t('pages.about.innovation-p') }}</span>
    </div>
    <div class="join-us-wrapper">
      <Subtitle class="join-us-title" :text="$t('pages.about.join')" />
      <div class="join-us-span-container">
        <span>{{ $t('pages.about.join-p') }}</span>
      </div>
    </div>
  </section>
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
import Title from '@/components/UI/atoms/Text/Titles/Main/index.vue'
import Subtitle from '@/components/UI/atoms/Text/Subtitles/index.vue'
</script>

<style scoped>
.about-us-section {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.about-us-culture {
  /* background-color: #2e3192; */
  /* color: white; */
  color: #2e3192;
  text-decoration: underline;
  width: 80%;
  text-align: center;
  margin: 3rem auto;
  padding: 1rem 0;
  font-size: 48px;
  line-height: 5rem;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
  /* box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3); */
}

.about-us-culture-section {
  position: relative;
  padding: 3rem;
  width: 80%;
  margin: auto;

  @media (width > 768px) {
    padding: 10rem;
    background-image: url(/about/background.png);
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
  }
}

.about-us-culture-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
}

.about-us-culture-images img {
  position: absolute;
  height: 20vh; /* Set a consistent height */
  width: auto;  /* Allow the width to adjust according to aspect ratio */
  border-radius: 10px;
  object-fit: cover; /* Maintain aspect ratio and cover the area */
}

.about-us-culture-images img:nth-child(1) {
  top: 50vh;
  left: 5vw;
  transform: rotate(-15deg);
}

.about-us-culture-images img:nth-child(2) {
  top: 10vh;
  right: 5vw;
  transform: rotate(20deg);
}

@media (max-width: 768px) {
  .about-us-culture-images img {
    height: 15vh; /* Reduce height on smaller screens */
  }
}

/* .about-us-culture-section::before {
  content: "";
  background-image: url(/target.png);
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.65;
  z-index: -5;
  background-position: center;
} */

.tijuana-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  gap: 50px;

  @media (width <=1024px) {
    flex-direction: column;
  }
}

.tijuana-wrapper span {
  text-align: justify;
  font-size: 22px;

  @media (width > 400px) {
    letter-spacing: 3px;
  }

  @media (width >=768px) {
    padding: 0 5rem;
  }
}

.tijuana-pic {
  width: 500px;
}

.mission-wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (width <=1024px) {
    flex-direction: column;
  }

  @media (width > 1024px) {
    width: 50%;
    margin-left: 10rem;
  }
}

.mission-wrapper h3 {
  margin: 0;
  color: #3375ff;
}

.mission-wrapper span {
  text-align: justify;
  width: 50%;
  font-size: 18px;
  letter-spacing: 1px;
}

.vision-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;

  @media (width <=1024px) {
    flex-direction: column;
  }
}

.vision-wrapper h3 {
  margin: 0;
  color: #3375ff;
  @media (width <=1024px) {
    margin: 2rem;
  }
}

.vision-wrapper span {
  text-align: justify;
  width: 30%;
  font-size: 18px;
  letter-spacing: 1px;

  @media (width <=1024px) {
    width: 50%;
  }

  @media (width > 1024px) {
    margin-right: 15rem;
  }
}

.join-us-section {
  width: 80%;
  margin: auto;
}

.innovation-wrapper {
  display: flex;
  flex-direction: column;
}

.innovation-wrapper h3 {
  text-align: start;

  @media (width < 768px) {
    text-align: center;
  }
}

.innovation-wrapper span {
  align-self: flex-end;
  font-size: 24px;
  text-align: justify;
  letter-spacing: 3px;

  @media (width >=768px) {
    width: 80%;
  }
}

.join-us-wrapper {
  font-size: 24px;
  text-align: justify;
}

.join-us-span-container {
  /* background-color: #e00000; */
  padding: 3rem;
  color: black;
  font-weight: 700;
  /* box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3); */
}

.join-us-title {
  background-color: #2e3192;
  color: white;
  width: 80%;
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
}

.certification-images div img {
  @media (width < 1280px) {
    width: 80%;
  }
}
</style>