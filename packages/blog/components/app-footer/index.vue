<template>
  <div class="appFooter">
    <div class="content contentCenter">
      <div class="info">
        <div class="copyright">
          <span class="icon">&copy;</span>
          <span class="text">{{ appConfig.title }}</span>
        </div>
        <span class="contact">联系方式：2662504913@qq.com</span>
        <div class="iconLink">
          <a href="https://github.com/Mingcomity" target="_blank" style="margin-right: 1.6rem">
            <span class="iconfont icon-github"></span>
          </a>
          <a href="https://space.bilibili.com/411990887" target="_blank">
            <span class="iconfont icon-bilibili"></span>
          </a>
        </div>
      </div>
      <div class="link">
        <a class="top" target="_blank" href="https://beian.miit.gov.cn/">赣ICP备2022010008</a>
        <a
          class="bottom"
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36048202000057"
        >
          <img
            src="https://mdimages-1314620922.cos.ap-guangzhou.myqcloud.com/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png"
          />
          &nbsp;赣公网安备&nbsp;36048202000057号&nbsp;
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<style lang="scss" scoped>
.appFooter {
  background-color: #1a1a1a;
  padding: 2.4rem 0;
  .content {
    @include flex-center-between();
    .info {
      font-size: 1.6rem;
      letter-spacing: 0.5px;
      color: $fontWhiteColor;
      .copyright {
        @include flex-center();
        margin-bottom: 1.6rem;
        .icon {
          font-size: 2rem;
          margin-right: 0.2rem;
        }
        .text {
          color: $fontShallowWhiteColor;
        }
      }
      .contact {
        font-size: 1.5rem;
        margin-bottom: 1.6rem;
        @include flex-center();
      }
      .iconLink {
        @include flex-center();
        .iconfont {
          font-size: 2rem;
          color: $fontShallowWhiteColor;
        }
      }
    }
    .link {
      @include flex-start-start-column();
      font-size: 1.4rem;
      letter-spacing: 0.5px;
      .top {
        color: $fontWhiteColor;
        margin-bottom: 1.6rem;
      }
      .bottom {
        color: $fontWhiteColor;
        @include flex-center();
      }
    }
  }
}
</style>
