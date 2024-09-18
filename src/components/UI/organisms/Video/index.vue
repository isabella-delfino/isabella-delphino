<template>
  <div class="video-container">
    <video :controls="false" muted autoplay loop :src="videoUrl">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Use a ref to store the video URL
const videoUrl = ref('/home-video.mp4');
</script>

<style scoped>
.video-container {
  max-width: 100%;
  text-align: center;
  overflow: hidden;
  @media (width > 768px) {
    height: 30rem;
  }
}

video {
  width: 100%;
  border-radius: 8px;
  @media (width > 768px) {
    height: 40rem;
  }
}
</style>
