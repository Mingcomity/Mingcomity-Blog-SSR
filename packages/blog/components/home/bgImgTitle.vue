<template>
  <div class="bgImgTitle" :style="{ backgroundImage: `url(${bgImgUrl})` }">
    <div class="iconBox" :style="{ backgroundColor: iconBgColor }">
      <span :class="`iconfont icon-${iconClassName}`"></span>
    </div>
    <h2 class="text">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    bgImgUrl: string
    iconClassName: string
    iconBgColor: string
  }>(),
  {
    title: '',
    bgImgUrl: '',
    iconClassName: '',
    iconBgColor: ''
  }
)
</script>
<style lang="scss" scoped>
.bgImgTitle {
  padding: 4.8rem;
  @include flex-center-start-column();
  @include bgImgSelfAdaption();
  .iconBox {
    border-radius: 9999px;
    width: 6.8rem;
    height: 6.8rem;
    margin-bottom: 2.4rem;
    @include flex-center-center();
    .iconfont {
      font-size: 4.8rem;
      color: #222;
    }
  }

  .text {
    font-size: 4.8rem;
    letter-spacing: 4px;
    color: $fontWhiteColor;
    margin: 0;
  }
}
</style>
