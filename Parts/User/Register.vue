<template>
  <n-form id="register">
    <n-form-item-row label="用户名">
      <n-input
        :loading="nameLoading"
        v-model:value="allValue.username"
        :status="nameStatus"
        @change="change"
        placeholder="中文可用，emoji不可用"
        size="large"
      >
      </n-input>
    </n-form-item-row>
    <n-form-item-row label="邮箱">
      <n-input
        v-model:value="allValue.email"
        @change="change"
        size="large"
        placeholder="请输入邮箱"
      />
    </n-form-item-row>
    <n-form-item-row label="验证码">
      <n-input
        @change="change"
        size="large"
        class="code-input"
        placeholder="请输入邮箱验证码"
        v-model:value="allValue.code"
      >
        <template #suffix>
          <n-button quaternary>
            {{ sendMailButtonText }}
          </n-button>
        </template>
      </n-input>
    </n-form-item-row>
    <n-form-item-row label="密码">
      <n-input
        v-model:value="allValue.password"
        @change="change()"
        size="large"
        placeholder="请输入密码"
      />
    </n-form-item-row>
    <n-form-item-row label="重复密码">
      <n-input
        v-model:value="allValue.passwordRetry"
        @change="change()"
        size="large"
        placeholder="请重新输入密码"
        :status="passwordStatus"
      />
    </n-form-item-row>
  </n-form>
  <n-button
    size="large"
    @click="action()"
    :disabled="registerButton"
    :status="passwordStatus"
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
      nameLoading: false,
      nameStatus: "",
      nametip: "",
      mail: "",
      password: "",
      registerButton: true,
      registerButtonText: "请填写上面的所有选项",
      sendMailButtonText: "发送验证码",
      passwordStatus: "",
      allValue: {
        username: "",
        email: "",
        code: "",
        password: "",
        passwordRetry: "",
      },
    }
  },
  methods: {
    /**
     * 表单改变事件
     *
     * @returns {Promise<void>}
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    async change() {
      if (!this.passwordChecker()) {
        this.registerButtonText = "请确保密码正确"
        return
      }

      this.nameLoading = true
      const req = await CheckName(this.username)
      console.log(req)
      this.nametip = req.data.message
      if (req.data.code == 200) {
        this.registerButton = false
        this.registerButtonText = "注册"
        this.nameStatus = ""
      } else {
        this.nameStatus = "error"
        this.registerButton = true
        this.$message.error(req.data.message)
        this.registerButtonText = req.data.message
      }
      this.nameLoading = false
    },
    /**
     * 表单改变事件：两次密码是否输入正确
     *
     * @apiDescription 密码不准为空且不能不一致
     * @returns void
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    passwordChecker() {
      if (this.password !== this.passwordRetry) {
        return false
      } else if (
        this.password == null ||
        this.password == undefined ||
        this.password == ""
      ) {
        return false
      } else if (
        this.passwordRetry == null ||
        this.passwordRetry == undefined ||
        this.passwordRetry == ""
      ) {
        return false
      } else {
        return true
      }
    },
    /**
     * 发送验证码
     *
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    async send() {
      this.sendMailButtonText = "正在发送"
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
