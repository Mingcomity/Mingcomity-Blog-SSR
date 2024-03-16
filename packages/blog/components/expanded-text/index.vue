<template>
  <div class="expandedText">
    <p class="text">
      {{ text }}
    </p>
    <p ref="calculateRowBoxRef" class="calculateRowBox">{{ text }}</p>
    <ClientOnly>
      <span v-if="textRow > row" class="expandedBtn" @click="() => (isExpanded = !isExpanded)">{{
        isExpanded ? '收起' : '展开'
      }}</span>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string
    row: number
    lineHeight?: string
  }>(),
  {
    text: '',
    row: 3,
    lineHeight: '1.2em'
  }
)

const calculateRowBoxRef = ref<HTMLElement>()
const textRow = computed(() => {
  const height = calculateRowBoxRef.value?.getBoundingClientRect().height!
  const lineHeight = process.client
    ? getNumFromValue(
        document.defaultView?.getComputedStyle(calculateRowBoxRef.value!, null).lineHeight!
      )
    : getNumFromValue(props.lineHeight)
  const row = height / lineHeight
  return row
})
const isExpanded = ref(false)
const textBoxHeight = computed(() => {
  if (textRow.value < props.row) isExpanded.value = true
  if (isExpanded.value) {
    return 'auto'
  } else {
    const lineHeight = process.client
      ? getNumFromValue(
          document.defaultView?.getComputedStyle(calculateRowBoxRef.value!, null).lineHeight!
        )
      : getNumFromValue(props.lineHeight)
    return props.row * lineHeight + (process.client ? 'px' : getUnitFromValue(props.lineHeight))
  }
})
const lineHeight = computed(() => {
  return process.client ? 'inherit' : props.lineHeight
})
</script>
<style lang="scss" scoped>
.expandedText {
  position: relative;
  overflow: hidden;
  .text {
    line-height: v-bind(lineHeight);
    margin: 0;
    overflow: hidden;
    height: v-bind(textBoxHeight);
  }
  .calculateRowBox {
    position: absolute;
    line-height: v-bind(lineHeight);
    width: 100%;
    top: 99999px;
    left: 99999px;
    visibility: hidden;
  }
  .expandedBtn {
    color: $primary;
    cursor: pointer;
  }
}
</style>
