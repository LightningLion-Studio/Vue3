<template>
  <div class="login">
    <BottomBar on="2" />
    <Header>登录</Header>

    <div class="logo">
      <img src="/Assets/logo.png" />
    </div>
    <div class="container">
      <n-tabs
        justify-content="space-evenly"
        default-value="signin"
        size="large"
        animated
      >
        <n-tab-pane name="signin" tab="登录" class="log">
          <Login />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册"><Register /></n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue"
import Login from "@/Parts/User/Login.vue"
import Register from "@/Parts/User/Register.vue"
import Header from "@/Parts/Header.vue"

export default {
  components: { BottomBar, Login, Header, Register },
}
</script>

<style lang="less" scoped>
.login .container {
  margin-bottom: 200px;
  width: 70%;
}
.logo,
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.logo {
  width: 60%;
  margin-top: 10vh;
}
.logo img {
  width: 100%;
}
</style>
