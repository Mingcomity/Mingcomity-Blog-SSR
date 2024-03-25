<template>
  <div class="commentInput">
    <el-input
      ref="inputRef"
      v-model="textarea"
      maxlength="500"
      placeholder="友善评论，和谐交流"
      show-word-limit
      resize="none"
      :autosize="{
        minRows: 3,
        maxRows: 6
      }"
      type="textarea"
      @blur="() => emit('blur', !!textarea)"
    />
    <div class="operationBox">
      <el-button type="primary" @click="submitHandler">发送</el-button>
    </div>
    <client-only>
      <el-dialog v-model="dialogFormVisible" title="请输入相关信息..." width="500">
        <el-form
          ref="formRef"
          :model="formData"
          label-position="left"
          label-width="100px"
          :rules="rules"
        >
          <el-form-item label="显示的昵称" prop="username">
            <el-input v-model="formData.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="formData.email" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="submitForm(formRef)"> 确认 </el-button>
          </div>
        </template>
      </el-dialog>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, InputInstance, FormRules } from 'element-plus'
const emit = defineEmits(['blur'])
const textarea = ref('')
function submitHandler() {
  dialogFormVisible.value = true
}
const inputRef = ref<InputInstance>()
defineExpose({
  inputFocus: () => inputRef.value?.focus()
})
interface RuleForm {
  username: string
  email: string
}
const formRef = ref<FormInstance>()
const formData = reactive<RuleForm>({
  username: '',
  email: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true,
      message: '请输入显示的昵称',
      whitespace: true,
      trigger: 'blur'
    },
    {
      type: 'string',
      message: '请输入长度在3至15之间的值',
      trigger: 'change',
      min: 3,
      max: 15
    }
  ],
  email: [
    {
      required: true,
      message: '请输入您的邮箱',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱',
      trigger: 'change'
    }
  ]
})
const dialogFormVisible = ref(false)
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      // 验证通过
    } else {
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.commentInput {
  .el-textarea {
    margin-bottom: 1.2rem;
  }
  .operationBox {
    text-align: end;
  }
}
</style>
