<template>
  <div class="home">
    <section class="brief">
      <HomeBrief />
    </section>
    <section class="picture">
      <HomePictureBlock />
    </section>
    <section class="video">
      <HomeVideoBlock />
    </section>
    <section class="note">
      <HomeNoteBlock />
    </section>
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
