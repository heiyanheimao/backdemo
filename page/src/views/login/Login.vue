<template>
  <div class="login">
    <div class="login_box">
      <div class="avater_box">
        <img src="~assets/logo.png" alt />
      </div>
      <el-form ref="form" label-width="0px">
        <el-form-item>
          <el-input
            placeholder="请输入账号"
            prefix-icon="fa fa-user-o"
            v-model="username"
            aria-hidden="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入密码"
            prefix-icon="fa fa-lock"
            show-password
            v-model="password"
            aria-hidden="true"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    /**
     * @desc 重置表单
     */
    reset () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.el-form {
  width: 100%;
  padding: 0 100px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>
