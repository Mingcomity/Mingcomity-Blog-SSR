<template>
  <div class="homePhotoBlock">
    <HomeBgImgTitle
      title="图片库"
      icon-bg-color="#FF7900"
      icon-class-name="picture"
      bg-img-url="https://500px.com//staticV2/media/banner_portfolio_desktop.7c38b910.png"
    />
    <div class="content contentCenter">
      <div class="describe">
        <h3 class="title">将所见美好以图片展示</h3>
        <p class="text">
          描述文本描述文本描述文本描述文本描述文本描述文本描述描述文本描述文本描述文本描述文本描述文本描述文本描述文本
        </p>
        <el-button color="#222" size="large" round>访问图片库</el-button>
      </div>
      <div class="imgBox">
        <div class="imageContainer">
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors1@3x.e0b9b07f.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors2@3x.fc1a8fcc.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors3@3x.0e716ea7.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors4@3x.0a146aef.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors5@3x.55520542.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors6@3x.152133df.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors7@3x.7a76c89b.png"
            alt="q"
          />
          <img
            class="img"
            src="https://500px.com/staticV2/media/editors8@3x.1d22d3c1.png"
            alt="q"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.homePhotoBlock {
  width: 100%;
  .content {
    @include flex-center-start-column();
    padding: 3.6rem 0;
    .describe {
      @include flex-center-start-column();
      margin-bottom: 3.6rem;
      .title {
        font-size: 2.8rem;
        letter-spacing: 4px;
        margin: 0;
      }
      .text {
        font-size: 1.6rem;
        letter-spacing: 2px;
        line-height: 2rem;
        text-align: center;
        max-width: 75rem;
        color: $fontGrayColor;
      }
      .el-button {
        padding: 2.4rem;
        border-radius: 9999px;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
    .imgBox {
      width: 100%;
      .imageContainer {
        @include flex-center-center();
        flex-wrap: wrap;
        .img {
          height: 29.4rem;
          margin: 0 0.6rem 1.2rem 0.6rem;
        }
      }
    }
  }
}
</style>
