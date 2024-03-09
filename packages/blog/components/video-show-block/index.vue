<template>
  <div class="videoShowBlock">
    <video class="video" autoplay muted loop src="/banner-video-pc.mp4">
      <source src="/banner-video-pc.mp4" type="video/mp4" />
    </video>
    <div
      class="maskingBox"
      :style="{
        backgroundImage:
          'url(https://file.8kraw.com/photo/w1000w/53800c4a5f417fd83bed0b44c266dc56_w1000w.jpg)'
      }"
    ></div>
    <div class="describe">
      <h4 class="title">迟到三年的年终总结</h4>
      <p class="text">
        描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
@mixin absolute-fill() {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.videoShowBlock {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 3.6rem;

  .video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .maskingBox {
    @include absolute-fill();
    @include bgImgSelfAdaption();
    transition: opacity 1s;
  }
  .describe {
    @include absolute-fill();
    padding: 4.8rem 4.8rem 6.4rem;
    @include flex-center-between-column();
    .title {
      color: $fontShallowWhiteColor;
      font-size: 3.6rem;
      letter-spacing: 4px;
      line-height: 4.8rem;
      margin: 0;
      user-select: none;
      @include multi-line(2);
      transition: color 1s;
    }
    .text {
      color: $fontShallowWhiteColor;
      font-size: 1.6rem;
      letter-spacing: 2px;
      line-height: 2.2rem;
      user-select: none;
      @include multi-line(8);
      opacity: 0;
      transform: translateY(50%);
      transition: transform, opacity, 1s;
    }
  }
  &:hover {
    .maskingBox {
      opacity: 0;
    }
    .describe {
      .title {
        color: $fontWhiteColor;
      }
      .text {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
}
</style>
