<template>
  <li class="liBlock">
    <NuxtLink to="/" class="noteItemBlock">
      <div class="infoBox">
        <h3 class="title">{{ data.title }}</h3>
        <p class="described">{{ data.described }}</p>
        <div class="data">
          <div class="views">
            <span class="iconfont icon-guankan"></span>
            <span>{{ data.viewsNumber }}</span>
          </div>
          <div class="likes">
            <span class="iconfont icon-dianzan"></span>
            <span>{{ data.likesNumber }}</span>
          </div>
        </div>
      </div>
      <div class="imgBox">
        <img class="img" :src="data.coverImgUrl" :alt="data.title" />
      </div>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: {
      title: string
      described: string
      viewsNumber: number
      likesNumber: number
      coverImgUrl: string
    }
  }>(),
  {
    data: () => ({ title: '', described: '', viewsNumber: 0, likesNumber: 0, coverImgUrl: '' })
  }
)
</script>
<style lang="scss" scoped>
.liBlock {
  border-bottom: 1px solid $borderGrayColor;
  &:last-child {
    border: none;
  }
}
.noteItemBlock {
  @include flex-center-between();
  height: 11rem;
  padding: 1.8rem 0;
  .infoBox {
    height: 100%;
    margin-right: 2.4rem;
    flex: 1;
    @include flex-start-between-column();
    .title {
      margin: 0;
      letter-spacing: 1px;
      color: $fontBlackColor;
    }
    .described {
      margin: 0;
      color: $fontGrayColor;
      letter-spacing: 0.1px;
      @include multi-line(1);
    }
    .data {
      @include flex-center();
      color: $fontGrayColor;
      .views,
      .likes {
        @include flex-center();
        .iconfont {
          margin-right: 0.6rem;
        }
      }
      .views {
        margin-right: 2.4rem;
      }
    }
  }
  .imgBox {
    height: 100%;
    width: 11.1rem;
    .img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
