<template>
  <n-form id="register">
    <n-form-item-row label="用户名">
      <n-input
        :loading="nameLoading"
        v-model:value="username"
        :status="nameStatus"
        @change="change"
        placeholder="中文可用，emoji不可用"
        size="large"
      >
      </n-input>
    </n-form-item-row>
    <n-form-item-row label="邮箱">
      <n-input size="large" placeholder="请输入邮箱" />
    </n-form-item-row>
    <n-form-item-row label="验证码">
      <n-input size="large" class="code-input" placeholder="请输入邮箱验证码">
        <template #suffix>
          <n-button quaternary>发送验证码</n-button>
        </template>
      </n-input>
    </n-form-item-row>
    <n-form-item-row label="密码">
      <n-input size="large" placeholder="请输入密码" />
    </n-form-item-row>
    <n-form-item-row label="重复密码">
      <n-input size="large" placeholder="请重新输入密码" />
    </n-form-item-row>
  </n-form>
  <n-button
    size="large"
    @click="action()"
    :disabled="registerButton"
    type="primary"
    block
  >
    {{ registerButtonText }}
  </n-button>
</template>

<script>
import { CheckName } from "@/Api"
export default {
  data() {
    return {
      username: "",
      nameLoading: false,
      nameStatus: "",
      nametip: "",
      mail: "",
      password: "",
      registerButton: true,
      registerButtonText: "请填写上面的所有选项",
    }
  },
  methods: {
    /**
     * 判断用户名是否已存在
     *
     * @returns {Promise<void>}
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    async change() {
      this.nameLoading = true
      const req = await CheckName(this.username)
      console.log(req)
      this.nametip = req.data.message
      if (req.data.code == 200) {
        this.registerButton = false
        this.registerButtonText = "注册"
      } else {
        this.nameStatus = "error"
        this.registerButton = true
        this.$message.error(req.data.message)
        this.registerButtonText = req.data.message
      }
      this.nameLoading = false
    },
    /**
     * 注册
     *
     * @returns {Promise<void>}
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    async action() {
      let act
    },
  },
}
</script>

<style lang="less">
#register {
  .code-input .n-input-wrapper {
    padding-right: 0 !important;
  }
}
</style>
