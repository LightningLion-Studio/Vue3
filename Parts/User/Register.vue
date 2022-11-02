:<template>
  <n-form>
    <n-form-item-row label="用户名">
      <n-input :loading="nameLoading" v-model:value="username" :status="name" @change="change" placeholder="中文可用，emoji不可用">
        <template #suffix>
          {{ nametip }}
        </template>
      </n-input>
    </n-form-item-row>
    <n-form-item-row label="邮箱">
      <n-input placeholder="请输入邮箱" />
    </n-form-item-row>
    <n-form-item-row label="密码">
      <n-input placeholder="请输入密码" />
    </n-form-item-row>
    <n-form-item-row label="重复密码">
      <n-input placeholder="请重新输入密码" />
    </n-form-item-row>
  </n-form>
  <n-button disabled="next" type="primary" block> 注册 </n-button>
</template>

<script>
import { CheckName } from "@/Api"
export default {
  data() {
    return {
      username: "",
      nameLoading: false,
      nametip: "",
      name: "",
      mail: "",
      password: "",
      next: false,
    }
  },
  methods: {
    async change() {
      this.nameLoading = true
      const req = await CheckName(this.username)
      console.log(req)
      this.nametip = req.data.message
      if (req.data.code !== 200) {
        
      }
      this.nameLoading = false
    }
  }
}
</script>

<style lang="less" scoped></style>
