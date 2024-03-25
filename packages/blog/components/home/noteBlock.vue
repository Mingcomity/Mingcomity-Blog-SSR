<template>
  <div class="homeArticleBlock">
    <HomeBgImgTitle
      title="笔记"
      icon-bg-color="#00ffff"
      icon-class-name="bijibendefuben"
      bg-img-url="https://500px.com/staticV2/media/banner_editors_desktop@2x.50cf130f.png"
    />
    <div class="content contentCenter">
      <div class="describe">
        <h3 class="title">时常发布新的文章</h3>
        <p class="text">
          描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
        </p>
        <el-button color="#222" size="large" round>查看更多笔记</el-button>
      </div>
      <div class="imgBox">
        <img class="img" src="~/assets/svg/homeNote1.svg" alt="note" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.homeArticleBlock {
  width: 100%;
  .content {
    @include flex-center();
    padding: 12rem 0;
    .describe {
      margin-right: 4.8rem;
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
    .imgBox {
      width: 60rem;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
