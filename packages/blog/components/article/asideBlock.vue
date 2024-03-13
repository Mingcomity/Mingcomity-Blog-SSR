<template>
  <div class="asideBlock">
    <h4 class="title">{{ title }}</h4>
    <ul class="items">
      <li v-for="item in listData" :key="item.link" class="item">
        <nuxt-link :to="item.link" class="link"> {{ item.title }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string
    listData: {
      title: string
      link: string
    }[]
  }>(),
  {
    title: '',
    listData: () => []
  }
)
</script>
<style lang="scss" scoped>
.asideBlock {
  padding: 2.4rem 0 1.8rem;
  .title {
    font-size: 1.8rem;
    margin: 0;
    padding: 0 2.4rem 1.2rem;
    border-bottom: 1px solid $borderGrayColor;
  }
  .items {
    margin-top: 1.2rem;
    padding: 0 1.2rem;
    .item {
      color: $fontShallowBlackColor;
      font-size: 1.4rem;
      border-radius: 4px;
      padding: 1.2rem 1.2rem;
      letter-spacing: 1px;
      .link {
        @include multi-line(1);
      }
      &:hover {
        background-color: $blockHoverShallowColor;
      }
    }
  }
}
</style>
