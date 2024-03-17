<template>
  <div class="videoList">
    <div class="infoBox">
      <h3 class="title">{{ data.title }}</h3>
      <div class="date">{{ data.date }}</div>
      <div class="tag">
        <span v-for="tag in data.tag" :key="tag"># {{ tag }}</span>
      </div>
      <div class="data">
        <div>
          <span class="iconfont icon-guankan1"></span> <span>{{ data.viewsNumber }}</span>
        </div>
        <div>
          <span class="iconfont icon-like"></span> <span>{{ data.likesNumber }}</span>
        </div>
        <div>
          <span class="iconfont icon-pinglun"></span> <span>{{ data.commentsNumber }}</span>
        </div>
      </div>
    </div>
    <div class="imgBox">
      <el-image class="img" style="height: 100%; width: 100%" :src="data.url" fit="cover" lazy />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: {
      title: string
      date: string
      url: string
      viewsNumber: number
      likesNumber: number
      commentsNumber: number
      tag: string[]
    }
  }>(),
  {
    data: () => ({
      tag: [],
      title: '',
      date: '',
      url: '',
      viewsNumber: 0,
      likesNumber: 0,
      commentsNumber: 0
    })
  }
)
</script>
<style lang="scss" scoped>
.videoList {
  width: 100%;
  height: 100%;
  @include flex-start-between();
  .infoBox {
    flex: 1;
    margin-right: 3.6rem;
    .title {
      font-size: 3.6rem;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 4.6rem;
      margin-top: 0;
      color: $fontBlackColor;
      @include multi-line(5);
    }
    .date {
      font-size: 1.4rem;
      margin: 2.4rem 0;
      color: $fontGrayColor;
    }
    .tag {
      font-size: 1.6rem;
      margin-bottom: 3.2rem;
      color: $fontShallowBlackColor;
      & > span {
        @include margin-right(1.6rem);
      }
    }
    .data {
      @include flex-center();
      & > div {
        @include margin-right(2.4rem);
        @include flex-center();
        color: $fontShallowBlackColor;
        font-size: 1.8rem;
        .iconfont {
          font-size: 1.8rem;
          margin-right: 0.4rem;
        }
      }
    }
  }
  .imgBox {
    flex: 3;
    height: 45rem;
  }
}
</style>
