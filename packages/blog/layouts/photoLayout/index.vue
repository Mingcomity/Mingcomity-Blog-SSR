<script lang="ts" setup></script>

<template>
  <div>
    <div class="headerBox">
      <el-carousel class="carousel" :interval="10000" arrow="never">
        <app-header class="header" />
        <el-carousel-item>
          <nuxt-link to="/photo/detail/11111">
            <div class="imgBox">
              <img class="img" src="/photoBanner.jpg" />
              <div class="infoBox">
                <div class="top">
                  <h3 class="title">翠绿涧的瀑布</h3>
                </div>
                <div class="bottom">
                  <p class="describe">
                    这是描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
                  </p>
                  <span>2023年10月12日 · 庐山秀峰瀑布</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </el-carousel-item>
        <el-carousel-item>
          <nuxt-link to="/photo/detail/11111">
            <div class="imgBox">
              <img class="img" src="/photoBanner2.jpg" />
              <div class="infoBox">
                <div class="top">
                  <h3 class="title">热气球的王国</h3>
                </div>
                <div class="bottom">
                  <p class="describe">
                    这是描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
                  </p>
                  <span>2023年10月12日 · 庐山秀峰瀑布</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </el-carousel-item>
        <el-carousel-item>
          <nuxt-link to="/photo/detail/11111">
            <div class="imgBox">
              <img class="img" src="/photoBanner3.jpg" />
              <div class="infoBox">
                <div class="top">
                  <h3 class="title">秋水共长天一色</h3>
                </div>
                <div class="bottom">
                  <p class="describe">
                    这是描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本
                  </p>
                  <span>2023年10月12日 · 庐山秀峰瀑布</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.headerBox {
  padding: 1rem;
}
.carousel {
  border-radius: 8px;
  .header {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 1000;
    background-color: transparent;
    margin: 0;
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
  :deep(.el-carousel__container) {
    height: 80rem;
    .imgBox {
      height: 100%;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(95%);
      }
      .infoBox {
        position: absolute;
        left: 0;
        bottom: 15%;
        width: 100%;
        padding: 0 4rem;
        .top,
        .bottom {
          @include flex-center-between();
          color: $fontWhiteColor;
        }
        .top {
          .title {
            font-size: 3.6rem;
            letter-spacing: 4px;
          }
        }
        .bottom {
          font-size: 1.6rem;
          line-height: 2.4rem;
          letter-spacing: 3px;
          color: $fontShallowWhiteColor;
          align-items: start;
          .describe {
            margin: 0;

            width: 35%;
            @include multi-line(3);
          }
        }
      }
    }
  }
  :deep(.el-carousel__indicators) {
    left: 4rem;
    bottom: 5%;
    transform: translateY(-50%);
    .el-carousel__button {
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #fff;
      background-color: transparent;
      border-radius: 50%;
      opacity: 1;
    }
    .is-active {
      .el-carousel__button {
        background-color: #fff;
      }
    }
  }
}
</style>
