<script setup lang="ts">
import { useStorage } from '@/hooks/useStorage';
import Dialog from '@/components/Dialog.vue';

let userInfo = useStorage('username');
console.log(userInfo.value);
userInfo.value = {
  name: '张三',
  age: 18
}

</script>

<template>
  <!-- <Dialog >
    <template #header>
      <span>&nbsp;&nbsp;&gt;</span>
      <h1>title</h1>
      <button>按钮</button>
    </template>
    <from>
      <input type="text" placeholder="请输入用户名">
    </from>
    <template #footer>
      授权用户信息
    </template>
  </Dialog> -->
  <router-view />
  <van-tabbar>
    <van-tabbar-item>首页</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>
