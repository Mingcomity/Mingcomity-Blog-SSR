<template>
  <div class="sortSelect">
    <span class="text">{{ text }}：</span>
    <client-only>
      <el-select v-model="current" class="select" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string
    options: {
      value: string
      label: string
    }[]
    defaultValue: string
  }>(),
  {
    text: '排序',
    options: () => [],
    defaultValue: ''
  }
)

const current = ref('')

watch(
  () => props.defaultValue,
  newVal => {
    current.value = newVal
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.sortSelect {
  @include flex-center();
  .text {
    color: $fontShallowGrayColor;
    letter-spacing: 2px;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .select {
    width: 12rem;
    :deep(.el-select__placeholder) {
      color: $fontBlackColor;
      font-weight: 600;
    }
  }
}
</style>
