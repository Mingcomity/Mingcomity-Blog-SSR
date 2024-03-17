<template>
  <div class="videoListV2">
    <div class="mediaBox">
      <img class="media" :src="data.imgUrl" alt="" />
    </div>
    <div class="infoBox">
      <h4 class="title">{{ data.title }}</h4>
      <div class="dataBox">
        <span>{{ data.viewsNumber }} 次观看</span>
        <span style="font-weight: 800">·</span>
        <span>{{ data.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: {
      title: string
      viewsNumber: number
      date: string
      imgUrl: string
    }
  }>(),
  {
    data: () => ({
      title: '',
      viewsNumber: 0,
      date: '',
      imgUrl: ''
    })
  }
)
</script>
<style lang="scss" scoped>
.videoListV2 {
  width: 100%;
  height: 100%;
  cursor: pointer;
  @include flex-start();
  .mediaBox {
    height: 100%;
    flex: 43;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 1.2rem;
    .media {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .infoBox {
    flex: 57;
    .title {
      margin: 0;
      font-size: 1.5rem;
      color: $fontShallowBlackColor;
      font-weight: 400;
      line-height: 1.4;
      @include multi-line(2);
      margin-bottom: 1.2rem;
    }
    .dataBox {
      @include flex-center();
      gap: 0.6rem;
      font-size: 1.3rem;
      color: $fontGrayColor;
    }
  }
}
</style>
