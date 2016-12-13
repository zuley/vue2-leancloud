<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">注册</span>
    </div>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="pass">
        <el-input type="text" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="age">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
