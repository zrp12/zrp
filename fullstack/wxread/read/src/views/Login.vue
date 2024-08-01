<template>
    <div class="container">
      <div class="content">
        <h1>欢迎来到</h1>
        <span class="read">阅享世界</span>
        <div class="form">
          <input class="input" type="text" placeholder="输入手机号">
          <input class="input" type="text" placeholder="输入密码">
          <button class="btn" @click="login('current')">登录</button>
          <button class="btn other" @click="login('other')">注册</button>
          <div class="checkbox-container">
            <input class="agreement" type="checkbox" id="agreement" v-model="agreement" >
            <label for="agreement">
              我已阅读并同意
              <a href="#">《用户协议》</a>
              <a href="#">《隐私政策》</a>
            </label>
          </div>
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
  // body, html {
  //   margin: 0;
  //   padding: 0;
  //   height: 100%;
  //   overflow: hidden;
  //   font-family: Arial, sans-serif;
  // }
  
  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url('@/assets/images/login.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    overflow: hidden;

    .content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    h1 {
      margin-top: 1.5rem;
      margin-bottom: 0.6rem;
      font-size: 2.5em;
    }
    .read {
      font-size: 1.6rem;
    }
    
    .form {
      display: flex;
      flex-direction: column;
      .input {
      margin-top: 1.2rem;
      padding: 0.4rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #d8dff2;
      font-size: 0.4rem;
      }

      .btn {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        width: 80%;
        margin: 0.8rem auto 0;
        // margin: 0.8rem auto;
  
        &.other {
          background-color: transparent;
          border: 2px solid white;
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
        a {
          color: #4CAF50;
          text-decoration: none;
          font-size: 0.9em;
  
        &:hover {
          text-decoration: underline;
        }
  }
      }
    }
  }
}
  
  
  
  </style>
  