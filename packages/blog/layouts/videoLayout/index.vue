<template>
  <div>
    <div class="headerBox">
      <app-header class="header" />
      <img class="img" src="/videoBanner.jpg" alt="迟到三年内的年终总结" />
      <div class="info">
        <div class="left">
          <h2 class="title">迟到三年内的年终总结</h2>
          <p class="describe">
            这是描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
          </p>
        </div>
        <div class="right">
          <ElButton class="videoBtn">11</ElButton>
        </div>
      </div>
    </div>
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.headerBox {
  position: relative;
  overflow: hidden;
  height: 80rem;
  .header {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 1000;
    background-color: transparent;
    margin: 0;
    height: $appHeaderHeight + 1rem;
    padding: 1rem 5rem 0;
    :deep(.left) {
      .logoText {
        color: $fontWhiteColor;
      }
      .navBox .linkBox .navItem {
        color: $fontShallowWhiteColor;
        &:hover {
          color: $fontWhiteColor;
        }
      }
    }
    :deep(.right) {
      .el-switch__core {
        background-color: #dcdfe6;
        .el-switch__action {
          background-color: #fff;
          border: none;
          #appHeaderMoon {
            fill: #666666;
          }
        }
      }
      .el-button.is-has-bg {
        background-color: #f5f7fa;
        #searchPath {
          fill: #777777;
        }
        .text {
          color: #777777;
        }
      }
    }
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }
  .info {
  }
}
</style>
