<template>
    <div class="container">
      <div class="content">
        <h1>Create Your Mankr</h1>
        <div class="phone-number">{{ maskedPhoneNumber }}</div>
        <button class="login-btn" @click="login('current')">本机一键登录</button>
        <button class="login-btn other" @click="login('other')">其他手机号登录</button>
        <div class="checkbox-container">
          <input type="checkbox" id="agreement" v-model="agreement">
          <label for="agreement">
            我已阅读并同意
            <a href="#">《用户协议》</a>
            <a href="#">《隐私政策》</a>
          </label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phoneNumber: '13912340751',
        agreement: false,
      };
    },
    computed: {
      maskedPhoneNumber() {
        return this.phoneNumber.slice(0, 3) + '*****' + this.phoneNumber.slice(-4);
      },
    },
    methods: {
      login(type) {
        if (!this.agreement) {
          alert('请先同意用户协议和隐私政策');
          return;
        }
        if (type === 'current') {
          alert('本机一键登录');
        } else {
          alert('其他手机号登录');
        }
      },
    },
  };
  </script>
  
  <style lang="less">
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
  
  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    // height: 100%;
    background: url('@/assets/images/login.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  
  .content {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
  h1 {
    margin: 0;
    font-size: 2.5em;
  }
  
  .phone-number {
    margin: 20px 0;
    font-size: 1.2em;
  }
  
  .login-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 5px;
  
    &.other {
      background-color: transparent;
      border: 2px solid white;
    }
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: 0.9em;
  
    &:hover {
      text-decoration: underline;
    }
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  
    input {
      margin-right: 10px;
    }
  }
  </style>
  