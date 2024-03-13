<template>
  <div class="article">
    <div class="contentCenter">
      <h2 class="title">笔记</h2>
      <div class="content">
        <div class="main">
          <nav class="controlBox">
            <classification class="classification" :class-list="classList" :default-class="'1'" />
            <sort-select :options="sortOptions" :default-value="'1'" />
          </nav>
          <ul class="lists">
            <article-item-block v-for="item in noteDatas" :key="item.title" :data="item" />
          </ul>
        </div>
        <aside class="aside">
          <div class="callBox">
            <p class="callText">下午好!</p>
            <p class="sayingText">天空黑暗到一定程度，星辰就会耀耀生辉</p>
          </div>
          <article-aside-block class="recommendBox" title="推荐文章" :list-data="recommendData">
          </article-aside-block>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home-layout'
})
const classList = [
  {
    name: '全部',
    id: '1'
  },
  {
    name: 'Vue',
    id: '2'
  },
  {
    name: 'React',
    id: '3'
  },
  {
    name: 'Uniapp',
    id: '4'
  },
  {
    name: '微信小程序',
    id: '5'
  }
]
const sortOptions = [
  {
    value: '1',
    label: '发布时间'
  },
  {
    value: '2',
    label: '浏览量'
  },
  {
    value: '3',
    label: '阅读时长'
  },
  {
    value: '4',
    label: '点赞数'
  }
]
const noteDatas = [
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  },
  {
    title: '2023年底被裁，分享一下面试经历',
    described:
      '人生中第一次被裁员2023年11月11日。“来一下小会议室”。领导给我私发了一条消息。我隐约感觉到有不好的事情要发生了。在经历了一段时间的996之后，公司也开始陆续裁员了。前几天就已经连续走了好几个同事。我也是猜到被单独叫到小会议室意味着什么。',
    viewsNumber: 36000,
    likesNumber: 288,
    coverImgUrl: 'https://file.8kraw.com/photo/w2000w/19dd4b524143d0e617f5bce3d87007fd_w2000w.jpg'
  }
]
const recommendData = [
  { title: 'Vue3 开发笔记', link: '' },
  { title: 'React 开发笔记', link: '' },
  { title: 'Vue2 开发笔记', link: '' },
  { title: '理解CSS', link: '' }
]
</script>

<style lang="scss" scoped>
.article {
  background-color: $bgGrayColor;
  padding: 3.6rem 0;
  position: relative;
  .title {
    margin-top: 0;
    font-size: 4.4rem;
    letter-spacing: 2px;
    color: $fontShallowBlackColor;
  }
  .content {
    @include flex-start-between();

    .main {
      flex: 1;
      background-color: $bgWhiteColor;
      padding: 2.4rem 0;
      border-radius: 6px;
      margin-right: 2.4rem;
      .controlBox {
        @include flex-center-between();
        padding: 0 2.4rem 1.2rem;
        border-bottom: 1px solid $borderGrayColor;
        .classification {
          margin-right: 3.6rem;
        }
      }
      .lists {
        padding: 0 2.4rem;
      }
    }
    .aside {
      width: 34rem;
      position: sticky;
      top: 2rem;
      align-self: flex-start;
      .callBox,
      .recommendBox {
        background-color: $bgWhiteColor;
        border-radius: 8px;
      }
      .callBox {
        padding: 2.4rem;
        margin-bottom: 2.4rem;
        .callText {
          font-size: 2rem;
          letter-spacing: 2px;
          margin: 0;
          margin-bottom: 1.2rem;
        }
        .sayingText {
          margin: 0;
          line-height: 1.8rem;
          color: $fontGrayColor;
          @include multi-line(2);
        }
      }
    }
  }
}
</style>
