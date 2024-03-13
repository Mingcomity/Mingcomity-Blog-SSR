<template>
  <div class="video">
    <div class="controlBox"></div>
    <div class="videoListBox">
      <VideoList v-for="item in data" :key="item.id" class="item" :data="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VideoList from '~/components/video/videoList.vue'

definePageMeta({
  layout: 'video-layout'
})

const data = [
  {
    id: 1,
    tag: ['风光', '星空'],
    title: '迟到三年的年终总结',
    date: '2024年2月16日',
    url: '/videoBanner.jpg',
    viewsNumber: 36000,
    likesNumber: 10,
    commentsNumber: 2
  },
  {
    id: 2,
    tag: ['风光', '星空'],
    title: '迟到三年的年终总结',
    date: '2024年2月16日',
    url: 'https://file.8kraw.com/photo/w1000w/c87a914976eeb73f441f849d696e2e93_w1000w.jpg',
    viewsNumber: 36000,
    likesNumber: 10,
    commentsNumber: 2
  },
  {
    id: 3,
    tag: ['风光', '星空'],
    title: '迟到三年的年终总结',
    date: '2024年2月16日',
    url: 'https://file.8kraw.com/photo/w1000w/59f63fef228d1e451fb1c4302529159e_w1000w.jpg',
    viewsNumber: 36000,
    likesNumber: 10,
    commentsNumber: 2
  },
  {
    id: 4,
    tag: ['风光', '星空'],
    title: '迟到三年的年终总结',
    date: '2024年2月16日',
    url: 'https://file.8kraw.com/photo/w1000w/4e10ff4425210d3e7219ff3a2295bd38_w1000w.jpg',
    viewsNumber: 36000,
    likesNumber: 10,
    commentsNumber: 2
  },
  {
    id: 5,
    tag: ['风光', '星空'],
    title: '迟到三年的年终总结',
    date: '2024年2月16日',
    url: 'https://file.8kraw.com/photo/w1000w/6342be494947dd682dfd80991f173c6c_w1000w.jpg',
    viewsNumber: 36000,
    likesNumber: 10,
    commentsNumber: 2
  }
]
</script>

<style lang="scss" scoped>
.video {
  .controlBox {
    height: 6rem;
    background-color: $bgWhiteColor;
  }
  .videoListBox {
    background-color: $bgGrayColor;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    .item {
      margin: 12rem auto;
      width: 116rem;
    }
  }
}
</style>
