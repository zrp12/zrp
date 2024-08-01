<template>
    <div class="login-page" :style="{ backgroundImage: `url(${backgroundImage})`}">
      <div class="container">
        <h1 class="title">欢迎来到阅享世界</h1>
        <input type="text" v-model="phone" placeholder="输入手机号" @blur="validatePhone" />
        <input type="password" v-model="password" placeholder="输入密码" @blur="validatePassword" />
        <button class="btn btn-login" @click="handleSubmit">登录</button>
        <router-link to="/register" class="link">注册</router-link>
        <van-checkbox v-model="agreed" style="margin-top: 20px;" @change="handleChange">我已阅读并同意《用户协议》《隐私政策》</van-checkbox>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const phone = ref('');
      const password = ref('');
      const agreed = ref(false);
      const backgroundImage = ref('');
  
      onMounted(() => {
        // 获取背景图片URL，这里假设从服务器获取
        fetchBackgroundImage().then(url => {
          backgroundImage.value = url;
        });
      });
  
      function fetchBackgroundImage() {
        // 假设这是一个异步函数，返回一个 Promise 对象
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('https://example.com/your-background-image.jpg'); // 替换为你的背景图片URL
          }, 1000);
        });
      }
  
      function validatePhone() {
        if (!/^\d{11}$/.test(phone.value)) {
          alert('手机号格式不正确');
          phone.value = '';
        }
      }
  
      function validatePassword() {
        if (!/^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(password.value)) {
          alert('密码格式不正确');
          password.value = '';
        }
      }
  
      function handleChange() {
        // 处理勾选事件
      }
  
      function handleSubmit() {
        // 表单提交逻辑
      }
  
      return {
        phone,
        password,
        agreed,
        backgroundImage,
        validatePhone,
        validatePassword,
        handleChange,
        handleSubmit
      };
    }
  };
  </script>
  
  <style lang="less" scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
    .container {
      width: 100%;
      max-width: 400px;
      padding: 30px;
      box-sizing: border-box;
  
      .title {
        margin-bottom: 20px;
      }
  
      input {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        font-size: 16px;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 0 10px;
      }
  
      button {
        width: 100%;
        height: 40px;
        font-size: 16px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        background-color: green;
        color: white;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: darken(green, 10%);
        }
      }
  
      .link {
        text-decoration: underline;
        color: blue;
        cursor: pointer;
      }
    }
  }
  </style>