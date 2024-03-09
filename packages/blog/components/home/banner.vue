<template>
  <div class="homrBanner">
    <video class="video" autoplay muted loop src="/banner-video-pc.mp4">
      <source src="/banner-video-pc.mp4" type="video/mp4" />
    </video>
    <!-- <img class="img" src="/name-logo.png" alt="logo" /> -->
    <span class="text">MINGCOMITY</span>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.homrBanner {
  height: $homeBannerHeight;
  position: relative;
  overflow: hidden;
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: $fontWhiteColor;
    font-size: 14rem;
    font-family: 'Poppins-BlackItalic';
    user-select: none;
    animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
</style>
