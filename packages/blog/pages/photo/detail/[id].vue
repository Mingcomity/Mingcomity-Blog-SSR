<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <AppHeader />
      </template>
      <template #default>
        <div class="photoDetail">
          <div class="main">
            <img class="img" src="/photoBanner.jpg" alt="photo" />
            <div class="fullScreen"></div>
            <div
              class="next"
              @mouseenter="() => (showNextBtn = true)"
              @mouseleave="() => (showNextBtn = false)"
            >
              <el-button
                :class="{ nextBtn: true, show: !showNextBtn }"
                size="large"
                color="#22222222"
              >
                <span class="iconfont icon-right"></span>
              </el-button>
            </div>
            <div
              class="prev"
              @mouseenter="() => (showPrevBtn = true)"
              @mouseleave="() => (showPrevBtn = false)"
            >
              <el-button
                :class="{ prevBtn: true, show: !showPrevBtn }"
                size="large"
                color="#22222222"
              >
                <span class="iconfont icon-left"></span>
              </el-button>
            </div>
          </div>
          <aside class="aside">
            <div class="dataBox">
              <div class="likes active">
                <span class="iconfont icon-like"></span>
                {{ data.likesNumber }}
              </div>
              <div class="comments">
                <span class="iconfont icon-pinglun"></span> {{ data.commentsNumber }}
              </div>
              <div class="views">
                <span class="iconfont icon-guankan"></span> {{ data.viewsNumber }}
              </div>
            </div>
            <div class="describeBox">
              <h2 class="title">{{ data.title }}</h2>
              <ExpandedText class="text" :text="data.describe" :row="3" line-height="1.6rem" />
            </div>
            <div class="detailBox">
              <div
                :class="{
                  showDetail: showPhotoDetail,
                  textBtn: true
                }"
                @click="() => (showPhotoDetail = !showPhotoDetail)"
              >
                详情
              </div>
              <el-collapse-transition>
                <PhotoInfoDetail
                  v-if="showPhotoDetail"
                  class="photoInfoDetail"
                  :photo-info="{
                    modelOfCamera: 'Nikon D610',
                    lensOfCamera: '腾龙 15-30一代',
                    aperture: '2.8',
                    shutterSpeed: '1.5',
                    focalLength: '15',
                    iso: '100'
                  }"
                  release-time="2024.01.14 19:00"
                  shooting-time="2023.05.20 05:20"
                  photography-spot="江西省上犹县草山"
                />
              </el-collapse-transition>
            </div>
            <div class="commentBox">
              <div class="replyBox">
                <CommentInputV2 />
              </div>
              <ul class="commentListBox">
                <li v-for="item in commentData" :key="item.data.id" class="item">
                  <comment-list
                    :data="item.data"
                    input-version="v2"
                    :text-config="{
                      lineHeight: '1.6rem',
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
          </aside>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false
})
const showPrevBtn = ref(false)
const showNextBtn = ref(false)
const data = {
  url: '/photoBanner.jpg',
  likesNumber: 100,
  commentsNumber: 10,
  viewsNumber: 4600,
  title: '翠绿下的瀑布',
  describe:
    '述文本描文本描1述文本描述文本ss描述文本述文本描述文本描述文本描述文本描述文本述文本描述文本描述文本描述文本描述文本',
  detail: {}
}
const showPhotoDetail = ref(false)
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
</script>
<style lang="scss" scoped>
:deep(.appHeader) {
  border-bottom: 1px solid $borderGrayColor;
}
:deep(.photoDetail) {
  height: calc(100vh - $appHeaderHeight - 1rem);
  overflow: hidden;
  @include flex-start-between();
  .main {
    flex: 1;
    position: relative;
    border-right: 1px solid $borderGrayColor;
    padding: 1.2rem 0;
    .img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .next,
    .prev,
    .fullScreen {
      height: 100%;
      position: absolute;
      top: 0;
    }
    .next,
    .prev {
      width: 25%;
      cursor: pointer;
    }
    @mixin btnStyle() {
      opacity: 1;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 2.4rem 1.2rem;
      transition: opacity 0.3s;
      &.show {
        opacity: 0;
      }
      .iconfont {
        font-size: 3.6rem;
      }
    }
    .next {
      right: 0;
      .nextBtn {
        @include btnStyle();
        right: 5%;
      }
    }
    .prev {
      left: 0;

      .prevBtn {
        @include btnStyle();
        left: 5%;
      }
    }
    .fullScreen {
      cursor: zoom-in;
      width: 50%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .aside {
    width: 36rem;
    overflow: auto;
    .dataBox,
    .describeBox,
    .commentBox {
      padding: 2.4rem;
      border-bottom: 1px solid $borderGrayColor;
    }
    .dataBox {
      @include flex-center-between();
      gap: 2.4rem;
      font-size: 1.6rem;
      color: $fontGrayColor;
      .likes,
      .comments,
      .views {
        @include flex-center();
        .iconfont {
          font-size: 2.2rem;
          margin-right: 0.4rem;
        }
      }
      .likes {
        cursor: pointer;
        &.active {
          color: $primary;
        }
      }
    }
    .describeBox {
      .title {
        margin: 0 0 1.2rem;
      }
      .text {
        font-size: 1.4rem;
      }
    }
    .detailBox {
      background-color: $bgGrayColor;
      .textBtn {
        cursor: pointer;
        padding: 1.6rem 2.4rem;
        font-size: 1.6rem;
        border-bottom: 1px solid $borderShallowBlackColor;

        &.showDetail {
          color: $primary;
          background-color: $bgDeepGrayColor;
        }
      }
      .photoInfoDetail {
        border-bottom: 1px solid $borderShallowBlackColor;
      }
    }
    .commentBox {
      background-color: $bgGrayColor;
      .replyBox {
        margin-bottom: 2.4rem;
      }
      .commentListBox {
        .item {
          @include margin-bottom(1.2rem);
          .comment {
            margin-bottom: 1.2rem;
            .commentName {
              font-size: 1.4rem;
              font-weight: 600;
              color: $fontShallowBlackColor;
            }
            .content {
              font-size: 1.2rem;
              line-height: 1.6rem;
            }
            .dataBox {
              font-size: 1.2rem;
              padding: 0;
              gap: 1.6rem;
              justify-content: flex-start;
            }
          }
          .moreComment {
            margin-top: 1.2rem;
            margin-left: 2.4rem;
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
}
</style>
