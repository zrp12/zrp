<template>
    <div class="login">
        <h3>图书管理系统</h3>
        <div class="user">
            <span>账号：</span>
            <input type="text" placeholder="请输入账号"  v-model="state.user">
        </div>
        <div class="pwd">
            <span>密码：</span>
            <input type="text" placeholder="请输入密码" v-model="state.pwd">
        </div>
        <div class="btn" @click="login">
            <button>登录</button>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import { useRouter } from 'vue-router';

let state = reactive({
    user: '',
    pwd: ''
})

const router = useRouter()
const login = () => {
    if (state.user !== '' && state.pwd !== ''){
        localStorage.setItem('user', state.user)
        router.push('/home')
    }
}
</script>

<style lang="css" scoped>

.login{
    background-color: #e9e9e9;
    width: 350px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #e9e9e9;
    padding: 20px;
    box-sizing: border-box;
}
h3 {
    margin-bottom: 20px;
    text-align: center;
}
.user, .pwd {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
span{
    width: 50px;
}
input {
    flex: 1;
    font-size: 19px;
    padding: 3px 10px;
}
/* .btn {
    text-align: center;
} */
button{
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 5px 0;
    background-color: #d7897b;
    color: #fff;
    border: none;
    border-radius: 100px;
    cursor: pointer;
}
</style>