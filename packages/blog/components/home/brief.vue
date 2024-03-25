<template>
  <div class="homeBrief contentCenter">
    <ul class="listBox">
      <li class="item">
        <span class="iconfont icon-sudu"></span>
        <h4 class="title">超快的SSR渲染</h4>
        <p class="text">使用同构渲染，速度速度速度速度速度速度速度速度速度速度</p>
      </li>
      <li class="item">
        <span class="iconfont icon-suibi"></span>
        <h4 class="title">丰富的开发笔记</h4>
        <p class="text">使用同构渲染，速度速度速度速度速度速度速度速度速度速度</p>
      </li>
      <li class="item">
        <span class="iconfont icon-sheyingshexiang"></span>
        <h4 class="title">用摄影的方式看</h4>
        <p class="text">使用同构渲染，速度速度速度速度速度速度速度速度速度速度</p>
      </li>
      <li class="item">
        <span class="iconfont icon-shenghuo1"></span>
        <h4 class="title">记录人生之路</h4>
        <p class="text">使用同构渲染，速度速度速度速度速度速度速度速度速度速度</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.homeBrief {
  @include flex-center();
  height: 100%;
  max-width: 144rem;
  color: $fontShallowBlackColor;
  .title {
    font-size: 3.6rem;
    letter-spacing: 4px;
  }
  .listBox {
    @include flex-center-every();
    .item {
      padding: 2.4rem 4rem;
      text-align: center;
      .iconfont {
        font-size: 4.8rem;
      }
      .title {
        font-size: 2.2rem;
        letter-spacing: 2px;
      }
      .text {
        color: $fontGrayColor;
        font-size: 1.5rem;
        letter-spacing: 1px;
        line-height: 2.6rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>
