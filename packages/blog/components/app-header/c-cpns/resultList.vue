<template>
  <div class="resultList">
    <div class="resultBlock">
      <h4 class="title">笔记</h4>
      <ul class="items">
        <NuxtLink to="/">
          <li class="item">
            <span class="iconfont icon-bijibendefuben"></span>
            <span class="text">关于关于关于关于关于关于关于</span>
          </li>
        </NuxtLink>
        <NuxtLink to="/">
          <li class="item">
            <span class="iconfont icon-bijibendefuben"></span>
            <span class="text">关于关于关于关于关于关于关于</span>
          </li>
        </NuxtLink>
        <NuxtLink to="/">
          <li class="item">
            <span class="iconfont icon-bijibendefuben"></span>
            <span class="text">关于关于关于关于关于关于关于</span>
          </li>
        </NuxtLink>
      </ul>
    </div>
    <div class="resultBlock">
      <h4 class="title">图片库</h4>
      <ul class="items">
        <NuxtLink to="/">
          <li class="item">
            <span class="iconfont icon-picture"></span>
            <span class="text">关于关于关于关于关于关于关于</span>
          </li>
        </NuxtLink>
      </ul>
    </div>
    <div class="resultBlock">
      <h4 class="title">影像</h4>
      <ul class="items">
        <NuxtLink to="/">
          <li class="item">
            <span class="iconfont icon-shipinbofang"></span>
            <span class="text">关于关于关于关于关于关于关于</span>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.resultList {
  padding: 1rem 0;
  .resultBlock {
    border-bottom: 1px solid $borderGrayColor;
    @include margin-bottom(1rem);
    &:last-child {
      border: none;
    }
  }
  .title {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  .items {
    padding-bottom: 1rem;
    .item {
      @include flex-center();
      @include margin-bottom(1rem);
      margin: 0 1rem;
      padding: 0.4rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
      color: $fontGrayColor;
      &:hover {
        background-color: $blockHoverColor;
        color: $fontBlackColor;
      }
      .iconfont {
        margin-right: 1rem;
        font-size: 2.2rem;
      }
      .text {
        letter-spacing: 0.1px;
        @include multi-line(1);
      }
    }
  }
}
</style>
