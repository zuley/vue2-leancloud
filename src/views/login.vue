<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">登录</span>
    </div>
    <el-form label-width="100px" class="demo-ruleForm" v-bind:rules="rules" ref="ruleForm" v-bind:model="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" auto-complete="off" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="handleSubmit">登录</el-button>
        <el-button v-on:click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    let validatorName = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入账号'))
      } else if (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test(value) || value.length < 6) {
        callback(new Error('账号只能是6位以上中英文或者数字'))
      } else {
        callback()
      }
    }
    let validatorPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (!/^[A-Za-z0-9]+$/.test(value) || value.length < 6) {
        callback(new Error('密码只能是6位以上英文或者数字'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: validatorName, trigger: 'blur' }
        ],
        password: [
          { validator: validatorPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('验证通过')
          axios.post('https://api.leancloud.cn/1.1/login', {
            username: this.ruleForm.name,
            password: this.ruleForm.password
          }).then(data => {
            console.log(data)
            if (data.status === 200) {
              this.$message('成功登录')
              window.localStorage.setItem('sessionToken', data.data.sessionToken)
              axios.defaults.headers['X-LC-Session'] = window.localStorage.getItem('sessionToken')
              this.$router.push('/')
            } else {
              this.$message.error('登录错误，请检查输入')
            }
          })
        } else {
          console.log('验证不通过')
        }
      })
    },
    handleReset () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="css">
</style>
