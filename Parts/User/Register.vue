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
        :maxlength="6"
        v-model:value="allValue.code"
      >
        <template #suffix>
          <n-button @click="send()" quaternary :disabled="sendMailButton">
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
        type="password"
      />
    </n-form-item-row>
    <n-form-item-row label="重复密码">
      <n-input
        v-model:value="allValue.passwordRetry"
        @change="change()"
        size="large"
        placeholder="请重新输入密码"
        :status="passwordStatus"
        type="password"
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

<script lang="ts">
import { CheckName, SendMail, Register } from "@/Api"
import empty from "@/Utils/Empty"
import storage from "@/Utils/Storage"
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
      sendMailButton: false,
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
      this.nameLoading = true
      const req = await CheckName(this.allValue.username)
      console.log(req)
      this.nameLoading = false
      this.nametip = req.data.message
      if (req.data.code == 200) {
        // 检查邮箱是否为空
        if (empty(this.allValue.email)) {
          this.registerButtonText = "请填写邮箱"
          this.registerButton = true
          return
        }
        // 检查验证码是否为空
        if (empty(this.allValue.code)) {
          this.registerButtonText = "请填写验证码"
          this.registerButton = true
          return
        }
        // 检查密码 见 `passwordChecker` 函数
        if (!this.passwordChecker()) {
          this.registerButtonText = "请确保密码正确"
          return
        } else {
          this.registerButtonText = "注册"
        }
        this.registerButton = false
        this.registerButtonText = "注册"
        this.nameStatus = ""
      } else {
        this.nameStatus = "error"
        this.registerButton = true
        this.$message.error(req.data.message)
        this.registerButtonText = req.data.message
      }
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
      if (this.allValue.password !== this.allValue.passwordRetry) {
        return false
      } else if (empty(this.allValue.password)) {
        return false
      } else if (empty(this.allValue.passwordRetry)) {
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
      const req = await SendMail(this.allValue.email)
      if (req.data.code === 200) {
        this.$message.success(req.data.message)
      } else {
        this.$message.error(req.data.message)
      }
      let count = 60
      const timer = setInterval(() => {
        this.sendMailButtonText = `${count}s` 
        if (count == 0) {
          this.sendMailButton = false
          this.sendMailButtonText = "重新发送"
          clearInterval(timer)
        } else {
          this.sendMailButton = true
          count--
        }
      },1000)
    },
    /**
     * 注册
     *
     * @returns {Promise<void>}
     * @author Zero <1203970284@qq.com>
     * @since 2022
     */
    async action() {
      // 注册实例
      let act = await Register({
        username: this.allValue.username,
        password: this.allValue.password,
        email: this.allValue.email,
        code: this.allValue.code,
      })
      this.$message.warning(act.data.message)
      if (act.data.code == 200) {
        storage.json("token", act.data.token)
        this.$router.push("/user")
      }
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
