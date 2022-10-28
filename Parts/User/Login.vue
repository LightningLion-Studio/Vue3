<template>
  <div class="login-part">
    <n-form>
      <n-form-item-row label="用户名">
        <n-input size="large" v-model="name" placeholder="请输入用户名" />
      </n-form-item-row>
      <n-form-item-row label="密码">
        <n-input size="large" v-model="pass" placeholder="请输入密码" />
      </n-form-item-row>
    </n-form>
    <n-button type="primary" size="large" circle>
      <template #icon>
        <n-icon>
          <KeyboardArrowRightSharp />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<script>
import { KeyboardArrowRightSharp } from "@vicons/material"
import { Login } from "@/Api"

export default {
  data() {
    return {
      name: "",
      pass: "",
    }
  },
  methods: {
    async loginAction() {
      const data = await Login(this.name, this.pass)
    },
  },
  components: { KeyboardArrowRightSharp },
}
</script>
