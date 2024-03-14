<template>
  <div class="comment">
    <div class="commentName">
      <span class="commentUser">{{ data.commentName }}</span>
      <span v-if="data.replyName" class="replyUser">
        <span class="reply">回复</span>{{ data.replyName }}
      </span>
    </div>
    <div class="content">{{ data.content }}</div>
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
      <CommentInput ref="commentInputRef" @blur="commentBlurHandler" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CommentInput } from '#build/components'

const emit = defineEmits(['likeClick'])
const ifReply = ref(false)
const commentInputRef = ref<InstanceType<typeof CommentInput>>()
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
withDefaults(
  defineProps<{
    data: {
      commentName: string
      replyName: string
      content: string
      date: string
      likesNumber: number
      commentNumber: number
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
    })
  }
)
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
    line-height: 2.4rem;
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
