<template>
  <div class="sortSelect">
    <span class="text">{{ text }}：</span>
    <el-select v-model="current" class="select" placeholder="Select">
      <client-only>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </client-only>
    </el-select>
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
    color: $fontBlackColor;
    font-weight: 600;
  }
}
</style>
