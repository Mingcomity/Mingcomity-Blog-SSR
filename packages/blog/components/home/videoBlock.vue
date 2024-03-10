<template>
  <div class="homeNoteBlock">
    <HomeBgImgTitle
      title="视频创作"
      icon-bg-color="#FFA6C9"
      icon-class-name="bijibendefuben"
      bg-img-url="https://500px.com/staticV2/media/banner_licensing_desktop@2x.440dbd64.png"
    />
    <div class="content contentCenter">
      <div class="videoBox">
        <VideoShowBlock class="video" />
      </div>
      <div class="describe">
        <h3 class="title">记录山河湖泊</h3>
        <p class="text">
          描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
        </p>
        <el-button color="#222" size="large" round>领略山河</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.homeNoteBlock {
  width: 100%;
  .content {
    @include flex-center();
    padding: 12rem 0;
    .describe {
      flex: 3;
      .title {
        font-size: 3.8rem;
        letter-spacing: 4px;
        margin: 0;
      }
      .text {
        font-size: 1.7rem;
        letter-spacing: 2px;
        line-height: 2.6rem;
        color: $fontGrayColor;
        padding-right: 4.8rem;
        margin-bottom: 3.6rem;
      }
      .el-button {
        padding: 2.4rem;
        border-radius: 9999px;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
    .videoBox {
      height: 50rem;
      padding: 0 12rem;
      margin-right: 4.8rem;
      flex: 2;
      .video {
        box-shadow: 0 0 20px 0 $shadowGrayColor;
      }
    }
  }
}
</style>
