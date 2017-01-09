<template lang="html">
  <div>
    首页 - 已登录用户信息
    <ul v-if="users">
      <li>用户名：{{ users.username }}</li>
      <li>创建时间：{{ users.createdAt }}</li>
      <li>创建时间：{{ users.createdAt }}</li>
    </ul>
    <el-button type="danger">退出登录</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: null
    }
  },
  created () {
    axios.get('https://api.leancloud.cn/1.1/users/me').then(data => {
      this.users = data.data
    }, (error, data) => {
      console.log(error)
      this.$message({
        message: '您还没有登录',
        type: 'error'
      })
      this.$router.push('/login')
    })
  }
}
</script>

<style lang="css">
</style>
