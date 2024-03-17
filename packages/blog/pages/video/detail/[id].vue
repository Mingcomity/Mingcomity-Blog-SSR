<template>
  <div class="videoDetail">
    <div class="content">
      <div class="videoBox">
        <video class="video" muted loop :src="data.videoUrl" controls>
          <!-- <source src="/banner-video-pc.mp4" type="video/mp4" /> -->
        </video>
      </div>
      <div class="infoBox">
        <h1 class="title">{{ data.title }}</h1>
        <div class="dataBox">
          <div class="start">
            <div class="date">{{ data.date }}</div>
            <div class="views">{{ data.viewsNumber }} 次观看</div>
          </div>
          <div class="last">
            <el-button :class="{ active: true }" round size="large">
              <span class="iconfont icon-like"></span>
              {{ data.likesNumber }}
            </el-button>
          </div>
        </div>
        <div class="describe">
          <ExpandedText line-height="2.2rem" :text="data.describe" />
        </div>
      </div>
      <div class="commentBox">
        <div class="head">
          <div class="title">{{ commentData.length }} 条评论</div>
        </div>
        <div class="replyBox">
          <CommentInputV2 />
        </div>
        <ul class="commentListBox">
          <li v-for="item in commentData" :key="item.data.id" class="item">
            <comment-list
              :data="item.data"
              input-version="v2"
              :text-config="{
                lineHeight: '1.8rem',
                row: 2
              }"
            />
            <div v-if="item.commentData.length" class="moreComment">
              <comment-list
                v-for="reply in item.commentData"
                :key="reply.id"
                class="replyItem"
                input-version="v2"
                :data="reply"
                :text-config="{
                  lineHeight: '1.6rem',
                  row: 2
                }"
              />
              <p class="viewAll" @click="viewAllHandler">
                查看全部{{ item.commentData.length }}条回复
                <span class="iconfont icon-xiala"></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <aside class="aside">
      <ul class="videoList">
        <li v-for="item in videoDataList" :key="item.id" class="item">
          <VideoListV2 :data="item" />
        </li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts" setup>
const data = {
  videoUrl: '/banner-video-pc.mp4',
  title: '迟到三年内的年终总结',
  date: '2024年02月14日',
  viewsNumber: '36000',
  likesNumber: '20',
  describe:
    '描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本描述文本文本'
}
const commentData = [
  {
    data: {
      id: '1',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 1
    },
    commentData: [
      {
        id: '1',
        commentName: 'abc',
        replyName: '',
        content:
          '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      },
      {
        id: '2',
        commentName: 'bbbbb',
        replyName: 'abc',
        content: '述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      },
      {
        id: '3',
        commentName: 'Mingcomity',
        replyName: '',
        content:
          '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      }
    ]
  },
  {
    data: {
      id: '2',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 10
    },
    commentData: []
  },
  {
    data: {
      id: '3',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 10
    },
    commentData: []
  }
]
const viewAllHandler = () => {
  // console.log('查看全部回复')
}
const videoDataList = [
  {
    id: '1',
    title: '迟到三年的年终总结',
    viewsNumber: 400000,
    date: '一天前',
    imgUrl: 'https://file.8kraw.com/photo/w1000w/c87a914976eeb73f441f849d696e2e93_w1000w.jpg'
  },
  {
    id: '2',
    title: '迟到三年的年终总结',
    viewsNumber: 2000,
    date: '一天前',
    imgUrl: 'https://file.8kraw.com/photo/w1000w/59f63fef228d1e451fb1c4302529159e_w1000w.jpg'
  },
  {
    id: '3',
    title: '庐山的雪是静谧的冬  遇见庐山的冬天',
    viewsNumber: 400000,
    date: '三个月前',
    imgUrl: 'https://file.8kraw.com/photo/w1000w/6342be494947dd682dfd80991f173c6c_w1000w.jpg'
  },
  {
    id: '4',
    title: '迟到三年的年终总结',
    viewsNumber: 2000,
    date: '一天前',
    imgUrl: 'https://file.8kraw.com/photo/w1000w/59f63fef228d1e451fb1c4302529159e_w1000w.jpg'
  },
  {
    id: '5',
    title: '庐山的雪是静谧的冬  遇见庐山的冬天',
    viewsNumber: 400000,
    date: '三个月前',
    imgUrl: 'https://file.8kraw.com/photo/w1000w/6342be494947dd682dfd80991f173c6c_w1000w.jpg'
  }
]
</script>
<style lang="scss" scoped>
.videoDetail {
  max-width: 165rem;
  margin: 1.2rem auto;
  @include flex-start-between();
  .content {
    margin-right: 2.4rem;
    max-width: 123.6rem;
    .videoBox,
    .infoBox,
    .commentBox {
      @include margin-bottom(1.2rem);
    }
    .videoBox {
      width: 100%;
      height: 69.5rem;
      border-radius: 16px;
      overflow: hidden;
      .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .infoBox {
      margin-bottom: 2.4rem;
      .title {
        margin: 0;
        font-size: 2.4rem;
      }
      .dataBox {
        @include flex-center-between();
        margin-bottom: 1.2rem;
        .start {
          @include flex-center();
          align-self: flex-end;
          gap: 2.4rem;
          font-size: 1.6rem;
          color: $fontGrayColor;
        }
        .last {
          .el-button {
            font-size: 1.6rem;
            background-color: $bgGrayColor;
            &.active {
              color: $primary;
            }
            :deep(.iconfont) {
              margin-right: 1.2rem;
            }
          }
        }
      }
      .describe {
        padding: 1.2rem;
        background-color: $bgGrayColor;
        border-radius: 16px;
        letter-spacing: 1px;
        font-size: 1.6rem;
      }
    }
    .commentBox {
      .head {
        margin-bottom: 2.4rem;
        .title {
          font-size: 2.2rem;
          font-weight: 600;
        }
      }
      .replyBox {
        margin-bottom: 2.4rem;
      }
      .commentListBox {
        .item {
          @include margin-bottom(1.2rem);
          :deep(.comment) {
            margin-bottom: 2.4rem;
            .commentName {
              font-size: 1.6rem;
              font-weight: 600;
              color: $fontBlackColor;
            }
            .content {
              font-size: 1.4rem;
            }
            .dataBox {
              font-size: 1.4rem;
              padding: 0;
              gap: 1.6rem;
              justify-content: flex-start;
            }
          }
          .moreComment {
            margin-top: 1.2rem;
            margin-left: 3.6rem;
            .replyItem {
              @include margin-bottom(1.2rem);
            }
            .viewAll {
              cursor: pointer;
              color: $fontGrayColor;
              letter-spacing: 1px;
              font-size: 1.4rem;
              &:hover {
                color: $primary;
              }
            }
          }
        }
      }
    }
  }
  .aside {
    flex: 1;
    min-width: 0%;
    .videoList {
      .item {
        @include margin-bottom(1.2rem);
        height: 8.6rem;
      }
    }
  }
}
</style>
