<template>
  <div class="login-part">
    <n-form>
      <n-form-item-row label="用户名">
        <n-input size="large" v-model:value="name" placeholder="请输入用户名" />
      </n-form-item-row>
      <n-form-item-row label="密码">
        <n-input
          type="password"
          size="large"
          v-model:value="pass"
          placeholder="请输入密码"
        />
      </n-form-item-row>
    </n-form>
    <div class="action">
      <n-button size="large" quaternary type="info">忘记密码？</n-button>
      <n-button
        :loading="loading"
        @click="loginAction()"
        type="primary"
        size="large"
        circle
      >
        <template #icon>
          <n-icon>
            <KeyboardArrowRightSharp />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<script>
import { KeyboardArrowRightSharp } from "@vicons/material"
import { Login } from "@/Api"
import storage from "@/Utils/Storage"

export default {
  data() {
    return {
      name: "",
      pass: "",
      loading: false,
    }
  },
  methods: {
    async loginAction() {
      this.loading = true
      const data = await Login(this.name, this.pass)
      if (data.data.code !== 200) {
        this.$message.error(data.data.message)
      } else {
        this.$message.success(data.data.message)
        storage.json("token", data.data.data)
        location.href = "/user"
      }
      this.loading = false
    },
  },
  components: { KeyboardArrowRightSharp },
}
</script>

<style lang="less" scoped>
.action {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
