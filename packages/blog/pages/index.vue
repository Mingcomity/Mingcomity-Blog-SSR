<template>
  <div class="home">
    <div class="firstScreen">
      <HomeBanner />
      <div class="brief">
        <HomeBrief />
      </div>
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

<script lang="ts" setup></script>

<style lang="scss" scoped>
.firstScreen {
  height: calc(100vh - $appHeaderHeight);
  @include flex-start-start-column;
  .brief {
    flex: 1;
    min-height: 0%;
  }
}

.home {
  .brief,
  .picture {
    width: 100%;
  }
}
</style>
