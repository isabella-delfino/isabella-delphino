<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
  >

    <el-form-item prop="name">
      <el-input 
        :placeholder="$t('pages.contact.form.name')" 
        v-model="ruleForm.name" 
        autocomplete="off" 
        class="custom-input"
      />
    </el-form-item>
    
    <el-form-item prop="email">
      <el-input
        :placeholder="$t('pages.contact.form.email')"
        v-model="ruleForm.email"
        type="email"
        class="custom-input"
      />
    </el-form-item>
    
    <el-form-item prop="subject">
      <el-input 
        :placeholder="$t('pages.contact.form.subject')" 
        v-model.number="ruleForm.subject" 
        class="custom-input"
      />
    </el-form-item>

    <el-form-item prop="message">
      <el-input 
        :placeholder="$t('pages.contact.form.message')" 
        v-model.number="ruleForm.message" 
        type="textarea"
        :rows="10" 
        cols="50"
        class="custom-input"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)" round>
        {{ $t('pages.contact.form.submit') }}
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

//@ts-ignore
const requiredField = (fieldName: string) => (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(`Please input the ${fieldName}`))
  } else {
    callback()
  }
}

//@ts-ignore
const validateEmailFormat = (rule: any, value: any, callback: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (value === '') {
    callback(new Error('Please input the email'))
  } else if (!emailRegex.test(value)) {
    callback(new Error('Please input a valid email address'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: requiredField('name'), trigger: 'blur' }],
  email: [
    { validator: requiredField('email'), trigger: 'blur' },
    { validator: validateEmailFormat, trigger: 'blur' }
  ],
  subject: [{ validator: requiredField('subject'), trigger: 'blur' }],
  message: [{ validator: requiredField('message'), trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      console.log(ruleForm, "form")
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<style scoped>
.custom-input :deep(.el-input__inner) {
  background-color: aliceblue;
  opacity: 1;
  color: #000000;
}

.custom-input :deep(.el-textarea__inner) {
  background-color: aliceblue;
  opacity: 1;
  color: #000000;
}

.custom-input :deep(.el-input__inner::placeholder) {
  color: #000000;
  opacity: 1; /* Ensure the placeholder color is fully opaque */
}

.custom-input :deep(.el-textarea__inner::placeholder) {
  color: #000000;
  opacity: 1; /* Ensure the placeholder color is fully opaque */
}
</style>