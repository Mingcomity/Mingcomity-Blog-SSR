<template>
  <div class="comment">
    <div class="commentName">
      <span class="commentUser">{{ data.commentName }}</span>
      <span v-if="data.replyName" class="replyUser">
        <span class="reply">回复</span>{{ data.replyName }}
      </span>
    </div>
    <ExpandedText
      class="content"
      :row="textConfig.row"
      :text="data.content"
      :line-height="textConfig.lineHeight"
    ></ExpandedText>
    <div class="dataBox">
      <span class="date">{{ data.date }}</span>
      <span class="likesNumber" @click="() => emit('likeClick')">
        <span class="iconfont icon-dianzan"></span>
        {{ data.likesNumber ? data.likesNumber : '点赞' }}
      </span>
      <span
        :class="{
          commentsNumber: true,
          active: ifReply
        }"
        @click="commentClickHandler"
      >
        <span class="iconfont icon-pinglun"></span>
        {{ ifReply ? '取消回复' : data.commentNumber ? data.commentNumber : '回复' }}
      </span>
    </div>
    <div v-if="ifReply" class="commentInput">
      <CommentInputV1
        v-if="inputVersion === 'v1'"
        ref="commentInputRef"
        @blur="commentBlurHandler"
      />
      <CommentInputV2 v-else ref="commentInputRef" @blur="commentBlurHandler" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CommentInputV1 } from '#build/components'
const props = withDefaults(
  defineProps<{
    data: {
      commentName: string
      replyName: string
      content: string
      date: string
      likesNumber: number
      commentNumber: number
    }
    inputVersion?: 'v1' | 'v2'
    textConfig?: {
      lineHeight: string
      row: number
    }
  }>(),
  {
    data: () => ({
      commentName: '',
      replyName: '',
      content: '',
      date: '',
      likesNumber: 0,
      commentNumber: 0
    }),
    inputVersion: 'v1',
    textConfig: () => ({
      lineHeight: '2.4rem',
      row: 3
    })
  }
)
const emit = defineEmits(['likeClick'])
const ifReply = ref<boolean>(false)
const commentInputRef = ref<InstanceType<typeof CommentInputV1>>()
// 点击评论按钮
const commentClickHandler = () => {
  ifReply.value = !ifReply.value
  nextTick(() => {
    ifReply.value && commentInputRef.value?.inputFocus()
  })
}
// 回复框失去焦点事件
const commentBlurHandler = (ifValue: boolean) => {
  setTimeout(() => {
    ifReply.value = ifValue
  }, 200)
}
</script>
<style lang="scss" scoped>
.comment {
  .commentName,
  .content,
  .dataBox {
    font-size: 1.6rem;
    @include margin-bottom(0.8rem);
  }
  .commentName {
    color: $fontDeeprayColor;
    .replyUser {
      .reply {
        color: $fontBlackColor;
        margin: 0 0.6rem;
      }
    }
  }
  .content {
    letter-spacing: 1px;
    line-height: v-bind('props.textConfig.lineHeight');
  }
  .dataBox {
    font-size: 1.4rem;
    color: $fontGrayColor;
    @include flex-center();
    gap: 1.6rem;
    .iconfont {
      margin-right: 0.4rem;
    }
    .likesNumber,
    .commentsNumber {
      @include flex-center();
      cursor: pointer;
    }
    .active {
      color: $primary;
    }
  }
}
</style>
