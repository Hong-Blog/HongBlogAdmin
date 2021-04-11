<template>
  <div style="background: #ececec; padding: 30px">
    <a-card
      title="用户登录"
      :bordered="false"
      style="width: 300px; margin: 0 auto"
    >
      <a-form-model
        layout="horizontal"
        :model="formInline"
        :rules="rules"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item prop="user">
          <a-input v-model="formInline.user" placeholder="用户名">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      rules: {
        user: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'change',
          },
          {
            min: 4,
            message: '用户名至少4个字符',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    handleSubmit(e) {
      this.$api
        .login({
          username: this.formInline.user,
          password: this.formInline.password,
        })
        .then((res) => {
          console.log(res)
          this.$message.success('登录成功')
          this.$router.push('/')
        })
        .catch((e) => {
          const data = e.response.data
          this.$message.error(data.message)
        })
    },
  },
}
</script>
