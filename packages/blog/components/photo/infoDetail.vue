<template>
  <div class="photoInfoDetail">
    <div class="photInfo">
      <div class="modelOfCamera">{{ photoInfo.modelOfCamera }}</div>
      <div class="lensOfCamera">{{ photoInfo.lensOfCamera }}</div>
      <div class="iconInfo">
        <div class="aperture">
          <span class="iconfont icon-aperture"></span>
          <span>F{{ photoInfo.aperture }}</span>
        </div>
        <div class="shutterSpeed">
          <span class="iconfont icon-shutterSpeed"></span>
          <span>{{ photoInfo.shutterSpeed }} s</span>
        </div>
        <div class="focalLength">
          <span class="iconfont icon-focalLength"></span>
          <span>{{ photoInfo.focalLength }}</span>
        </div>
        <div class="iso">
          <span class="iconfont icon-iso"></span>
          <span>{{ photoInfo.iso }}</span>
        </div>
      </div>
    </div>
    <div class="shootInfo">
      <div class="photographySpot">
        <span class="title">拍摄地点</span>
        <span class="text">{{ photographySpot }}</span>
      </div>
      <div class="shootingTime">
        <span class="title">拍摄时间</span>
        <span class="text">{{ shootingTime }}</span>
      </div>
      <div class="releaseTime">
        <span class="title">发布时间</span>
        <span class="text">{{ releaseTime }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    photoInfo: {
      modelOfCamera: string
      lensOfCamera: string
      aperture: string
      shutterSpeed: string
      focalLength: string
      iso: string
    }
    releaseTime: string
    shootingTime: string
    photographySpot: string
  }>(),
  {}
)
</script>
<style lang="scss" scoped>
.photoInfoDetail {
  .photInfo {
    text-align: center;
    color: $fontShallowBlackColor;
    padding: 1.2rem 2.4rem;
    border-bottom: 1px solid $borderShallowBlackColor;
    .modelOfCamera,
    .lensOfCamera,
    .iconInfo {
      @include margin-bottom(1rem);
    }
    .modelOfCamera {
      font-size: 1.8rem;
      letter-spacing: 0.5px;
    }
    .lensOfCamera {
      font-size: 1.4rem;
    }
    .iconInfo {
      font-size: 1.4rem;
      @include flex-center-every();
      .aperture,
      .shutterSpeed,
      .focalLength,
      .iso {
        @include flex-center-start-column();
        .iconfont {
          font-size: 3.8rem;
          color: $fontGrayColor;
          margin-bottom: 0.6rem;
        }
      }
    }
  }
  .shootInfo {
    padding: 2.4rem;
    .photographySpot,
    .shootingTime,
    .releaseTime {
      @include flex-center-between();
      @include margin-bottom(0.8rem);
      .title {
        color: $fontGrayColor;
      }
      .text {
        color: $fontShallowBlackColor;
      }
    }
  }
}
</style>
