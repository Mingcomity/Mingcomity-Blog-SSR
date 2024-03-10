<template>
  <div class="items">
    <span
      v-for="item in classList"
      :key="item.id"
      :class="{
        item: true,
        active: current === item.id
      }"
      :checked="current === item.id"
      type="info"
      @click="onChange(item.id)"
    >
      {{ item.name }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    classList: Array<{
      name: string
      id: string
    }>
    defaultClass: string
  }>(),
  {
    classList: () => [],
    defaultClass: '1'
  }
)
const emit = defineEmits(['change'])

const current = ref('')
watch(
  () => props.defaultClass,
  newVal => {
    current.value = newVal
  },
  {
    immediate: true
  }
)

const onChange = (id: string) => {
  current.value = id
}

watch(current, newVal => {
  emit('change', newVal)
})
</script>
<style lang="scss" scoped>
.items {
  .item {
    @include margin-right(1.6rem);
    font-size: 1.6rem;
    color: $fontGrayColor;
    padding: 1rem 1.4rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s;
    &:hover {
      background-color: $blockHoverColor;
    }
    &.active {
      background-color: $blockHoverColor;
      color: $fontShallowBlackColor;
    }
  }
}
</style>
