<template lang="html">
  <div>
    首页 - 已登录用户信息
    <ul v-if="users">
      <li>用户名：{{ users.username }}</li>
      <li>创建时间：{{ users.createdAt }}</li>
    </ul>
    <el-button type="danger" v-on:click.native="handlelogOut">退出登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: null
    }
  },
  methods: {
    // 登出函数
    handlelogOut () {
      this.$AV.User.logOut().then(() => {
        // 登出后跳转到登录页面
        this.$message('已经登出，正在跳转登录页面')
        this.$router.push('/login')
      })
    }
  },
  created () {
    // 获取当前登录用户状态
    let user = this.$AV.User.current()
    // 如果已经登录则获取用户信息
    if (user) {
      this.users = {
        username: user.get('username'),
        createdAt: user.get('createdAt')
      }
    } else {
      console.log('当前未登录，正在跳转登录页面')
      this.$router.push('/login')
    }
  }
}
</script>
