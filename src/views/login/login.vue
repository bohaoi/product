<template>
  <div class="login">
    <div class="form_container">
      <div class="manage_tip">
        <span class="title">产品管理平台</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginForm"
          label-width="60px"
          class="loginForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginUser.username" placeholder="请输入账号" autofocus></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      loginUser: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
          {
            min: 3,
            max: 8,
            message: "账号长度在3到8之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 5,
            max: 12,
            message: "密码长度在5到12之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit')
          this.$router.push("/index");
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && Object.trim().length === 0)
      );
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/bg.jpg);
  background-size: 100% 100%;
  box-sizing: border-box;
}

.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}

.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;

  font-size: 26px;
  color: #fff;
}

.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #ccc;
  padding-top: 50px;
}

.submit_btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
</style>