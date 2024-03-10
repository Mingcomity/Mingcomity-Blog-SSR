<template>
  <header class="appHeader">
    <div class="left">
      <div class="logoBox">
        <NuxtLink to="/">
          <h1 class="logoText">{{ appConfig.title }}</h1>
        </NuxtLink>
      </div>
      <div class="navBox">
        <NuxtLink class="linkBox" to="/note"> <div class="navItem">笔记</div></NuxtLink>
        <NuxtLink class="linkBox" to="/"> <div class="navItem">图片库</div></NuxtLink>
        <NuxtLink class="linkBox" to="/"> <div class="navItem">影视创作</div></NuxtLink>
        <NuxtLink class="linkBox" to="/"> <div class="navItem">生活随笔</div></NuxtLink>
      </div>
    </div>
    <div class="right">
      <div ref="modeSwitch" class="themeBox">
        <ClientOnly>
          <el-switch v-model="themeMode" size="large" style="--el-switch-on-color: #2c2c2c">
            <template #inactive-action>
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
              >
                <path
                  d="M716.8 307.2c9.8304 9.8304 23.3472 15.36 37.2736 15.36 13.9264 0 27.2384-5.5296 37.2736-15.36l46.4896-46.4896c5.12-4.9152 9.4208-10.6496 12.288-16.9984 2.8672-6.5536 4.5056-13.5168 4.5056-20.48 0.2048-7.168-1.2288-14.1312-3.8912-20.6848-2.6624-6.5536-6.5536-12.4928-11.6736-17.6128-4.9152-4.9152-11.0592-9.0112-17.6128-11.6736-6.5536-2.6624-13.7216-3.8912-20.6848-3.8912-7.168 0.2048-14.1312 1.6384-20.48 4.5056-6.5536 2.8672-12.288 7.168-16.9984 12.288L716.8 232.6528c-4.9152 4.9152-8.8064 10.6496-11.4688 16.9984-2.6624 6.3488-4.096 13.312-4.096 20.0704 0 6.9632 1.4336 13.7216 4.096 20.0704A50.57024 50.57024 0 0 0 716.8 307.2zM512 222.4128c13.9264 0 27.4432-5.5296 37.2736-15.36s15.36-23.3472 15.36-37.2736V103.8336c0-6.9632-1.4336-13.7216-4.096-20.0704-2.6624-6.3488-6.5536-12.288-11.4688-16.9984-4.9152-4.9152-10.6496-8.8064-17.2032-11.4688A49.9712 49.9712 0 0 0 512 51.2c-6.9632 0-13.7216 1.4336-20.0704 4.096-6.3488 2.6624-12.288 6.5536-17.2032 11.4688-4.9152 4.9152-8.8064 10.6496-11.4688 16.9984-2.6624 6.3488-4.096 13.312-4.096 20.0704v65.7408c0 13.9264 5.5296 27.4432 15.36 37.2736 10.0352 10.0352 23.552 15.5648 37.4784 15.5648zM232.6528 307.19488c4.9152 5.12 10.6496 9.4208 17.2032 12.288 6.5536 2.8672 13.5168 4.5056 20.48 4.5056 7.168 0.2048 14.1312-1.2288 20.6848-3.8912 6.5536-2.6624 12.4928-6.5536 17.6128-11.6736 4.9152-4.9152 9.0112-11.0592 11.6736-17.6128 2.6624-6.5536 3.8912-13.5168 3.8912-20.6848-0.2048-7.168-1.6384-14.1312-4.5056-20.48-2.8672-6.5536-7.168-12.288-12.288-16.9984l-46.4896-46.4896c-10.24-9.8304-23.552-15.36-37.4784-15.36-13.9264 0-27.4432 5.5296-37.2736 15.36s-15.36 23.3472-15.36 37.2736c0 13.9264 5.5296 27.4432 15.36 37.2736l46.4896 46.4896zM222.4128 512c0-13.9264-5.5296-27.4432-15.36-37.2736s-23.3472-15.36-37.2736-15.36H103.8336c-6.9632 0-13.7216 1.4336-20.0704 4.096-6.3488 2.6624-12.288 6.5536-16.9984 11.4688-4.9152 4.9152-8.8064 10.6496-11.4688 16.9984A51.712 51.712 0 0 0 51.2 512c0 29.0816 23.552 52.6336 52.6336 52.6336h65.7408c13.9264 0 27.4432-5.5296 37.2736-15.36 10.0352-9.8304 15.5648-23.3472 15.5648-37.2736zM269.7216 702.25408c-13.7216-0.2048-27.0336 5.12-36.864 14.5408l-46.4896 46.4896c-9.8304 9.8304-15.36 23.3472-15.36 37.2736 0 13.9264 5.5296 27.2384 15.36 37.2736 9.8304 9.8304 23.3472 15.36 37.2736 15.36 13.9264 0 27.4432-5.5296 37.2736-15.36l46.4896-46.4896c9.4208-10.0352 14.7456-23.1424 14.5408-37.0688-0.2048-13.7216-5.7344-27.0336-15.36-36.6592a54.0672 54.0672 0 0 0-36.864-15.36zM549.2736 817.152c-4.9152-4.9152-10.6496-8.8064-17.2032-11.4688-6.3488-2.6624-13.312-4.096-20.0704-4.096-13.9264 0-27.4432 5.5296-37.2736 15.36s-15.36 23.3472-15.36 37.2736v65.7408c0 13.9264 5.5296 27.4432 15.36 37.2736 9.8304 10.0352 23.3472 15.5648 37.2736 15.5648 13.9264 0 27.4432-5.5296 37.2736-15.36s15.36-23.3472 15.36-37.2736v-65.7408c0-6.9632-1.4336-13.7216-4.096-20.0704-2.4576-6.5536-6.3488-12.288-11.264-17.2032zM694.4768 436.42368c-9.8304-23.9616-24.576-45.6704-42.8032-64.1024-18.432-18.432-40.1408-32.9728-64.1024-42.8032a198.89152 198.89152 0 0 0-75.5712-14.9504c-52.4288 0-102.6048 20.8896-139.6736 57.7536a197.49376 197.49376 0 0 0-57.9584 139.6736c0 52.4288 20.8896 102.6048 57.9584 139.6736a197.49376 197.49376 0 0 0 139.6736 57.9584c26.0096 0 51.6096-5.12 75.5712-14.9504s45.6704-24.576 64.1024-42.8032c18.432-18.432 32.9728-40.1408 42.8032-64.1024 9.8304-23.9616 14.9504-49.5616 14.9504-75.5712 0-26.2144-5.12-51.8144-14.9504-75.776zM791.3472 716.8c-9.8304-9.8304-23.3472-15.36-37.2736-15.36-13.9264 0-27.4432 5.5296-37.2736 15.36s-15.36 23.3472-15.36 37.2736c0 13.9264 5.5296 27.4432 15.36 37.2736l46.4896 46.4896a51.968 51.968 0 0 0 37.0688 14.5408c13.7216-0.2048 27.0336-5.7344 36.6592-15.36 9.8304-9.8304 15.36-22.9376 15.36-36.6592 0.2048-13.7216-5.12-27.0336-14.5408-37.0688l-46.4896-46.4896zM957.44 474.7264c-9.8304-9.8304-23.3472-15.36-37.2736-15.36h-65.9456c-6.9632 0-13.7216 1.4336-20.0704 4.096-6.3488 2.6624-12.288 6.5536-16.9984 11.4688-4.9152 4.9152-8.8064 10.6496-11.4688 16.9984-2.6624 6.3488-4.096 13.312-4.096 20.0704 0 29.0816 23.552 52.6336 52.6336 52.6336h65.9456c13.9264 0 27.4432-5.5296 37.2736-15.36s15.36-23.3472 15.36-37.2736c0-13.9264-5.5296-27.4432-15.36-37.2736z"
                  fill="#666666"
                  p-id="913"
                ></path>
              </svg>
            </template>
            <template #active-action>
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
              >
                <path
                  d="M653.80352 760.40704a463.62624 463.62624 0 0 1-213.48864-178.14528C332.3648 414.03392 347.37152 202.96704 460.16512 51.2a462.52032 462.52032 0 0 0-153.216 62.208 466.21696 466.21696 0 0 0-203.32544 293.6064c-26.14272 120.78592-3.38944 247.37792 63.41632 351.45728a460.94336 460.94336 0 0 0 126.1056 130.94912 465.9712 465.9712 0 0 0 166.53312 72.61696 464.2304 464.2304 0 0 0 181.78048 3.38944c60.27264-10.89536 117.63712-33.64864 169.19552-66.56512a465.664 465.664 0 0 0 120.29952-114.24768 466.23744 466.23744 0 0 1-277.15072-24.20736z"
                  fill="#e6e6e6"
                ></path>
              </svg>
            </template>
          </el-switch>
        </ClientOnly>
      </div>
      <div class="searchBox">
        <el-button size="large" round text bg @click="visibleSearchDialog = !visibleSearchDialog">
          <AppHeaderCCpnsSearch class="searchIcon" />
          <span class="text">搜索</span>
        </el-button>
        <ClientOnly>
          <el-dialog v-model="visibleSearchDialog" :show-close="false">
            <template #header="{ close }">
              <el-input
                v-model="searchText"
                style="width: 100%"
                size="large"
                placeholder="Search..."
              >
                <template #prefix>
                  <AppHeaderCCpnsSearch class="searchIcon" :loading="searchLoading" />
                </template>
                <template #suffix>
                  <el-button type="info" text @click="close">
                    <span class="iconfont icon-close"></span
                  ></el-button>
                </template>
              </el-input>
            </template>
            <AppHeaderCCpnsResultList />
          </el-dialog>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { AppHeaderCCpnsSearch, AppHeaderCCpnsResultList } from '#components'
const appConfig = useAppConfig()
// 黑夜模式切换
const modeSwitch = ref<HTMLElement>()
const { themeMode } = useSwitchMode(modeSwitch)
// 搜索
const visibleSearchDialog = ref(false)
const searchText = ref('')
const searchLoading = ref(true)
</script>

<style lang="scss" scoped>
.appHeader {
  height: $appHeaderHeight;
  background-color: $appHeaderBgColor;
  padding: 0 4rem;
  @include flex-center-between();
  .left,
  .right {
    @include flex-center();
  }
  .left {
    .logoBox {
      margin-right: 4rem;
      .logoText {
        margin: 0;
        font-family: 'Parisienne-Regular';
        letter-spacing: 1px;
        font-weight: 400;
        font-size: 3.6rem;
        color: $fontBlackColor;
      }
    }
    .navBox {
      @include flex-center();
      .linkBox {
        @include margin-right(4rem);
        .navItem {
          color: $fontGrayColor;
          letter-spacing: 1px;
          line-height: 4rem;
          font-size: 1.8rem;
          position: relative;
          transition: color 0.2s;
          &:hover {
            color: $fontBlackColor;
            &::after {
              width: 100%;
            }
          }
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 0%;
            background-color: $borderBlackColor;
            transition: width 0.2s;
          }
        }
      }
    }
  }
  .right {
    .themeBox {
      margin-right: 3.6rem;
      :deep(.el-switch__action) {
        background-color: $appHeaderBgColor;
      }
    }
    .searchBox {
      .searchIcon {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1.6rem;
        :deep(#searchPath),
        :deep(#searchPathLoading) {
          fill: $fontGrayColor;
        }
      }
      .text {
        font-size: 1.6rem;
        color: $fontGrayColor;
      }
      :deep(.el-dialog) {
        padding: 0;
        width: 50rem;
        max-height: 40rem;
        border-radius: 8px;
        overflow: hidden;
        @include flex-start-start-column();
        .el-dialog__header {
          border-bottom: 1px solid $borderGrayColor;
          padding: 0;
          .el-input__wrapper {
            box-shadow: none;
            padding-left: 2rem;
            .el-button {
              padding: 8px;
            }
          }
        }
        .el-dialog__body {
          flex: 1;
          min-height: 0%;
          overflow: auto;
        }
      }
    }
  }
}
</style>
