<template>
  <div class="home">
    <div class="brief">
      <HomeBrief />
    </div>
    <div class="picture">
      <HomePictureBlock />
    </div>
    <div class="video">
      <HomeVideoBlock />
    </div>
    <div class="note">
      <HomeNoteBlock />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home-layout'
})
</script>

<style lang="scss" scoped>
/* height: calc(100vh - $appHeaderHeight); */
.brief {
  padding: 4.8rem;
}

.home {
  .brief,
  .picture {
    width: 100%;
  }
}
</style>
