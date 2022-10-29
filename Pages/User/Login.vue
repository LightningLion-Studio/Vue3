<template>
  <div class="login">
    <BottomBar on="2" />
    <Header>登录</Header>

    <div class="logo">
      <img src="/Assets/logo.png" />
    </div>
    <div style="width: 70%">
      <n-tabs
        justify-content="space-evenly"
        default-value="signin"
        size="large"
        animated
      >
        <n-tab-pane name="signin" tab="登录" class="log">
          <Login />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input placeholder="请输入用户名" />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input placeholder="请输入密码" />
            </n-form-item-row>
            <n-form-item-row label="重复密码">
              <n-input placeholder="请重新输入密码" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block> 注册 </n-button>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
import BottomBar from "@/Parts/BottomBar.vue"
import Login from "@/Parts/User/Login.vue"
import Header from "@/Parts/Header.vue"

export default {
  components: { BottomBar, Login, Header },
}
</script>

<style lang="less" scoped>
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
