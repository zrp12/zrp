<template>
    <button @click="changeName">修改仓库中的用户姓名</button>
    <button @click="changeSex">修改仓库中的用户性别</button>
    <button @click="changeAge">修改仓库中的用户年龄</button>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore();

const changeName = () => {
    // userStore.userInfo.name = 'rp' // 不建议
    userStore.changeUserName('zzm')
}
const changeSex = () => {
    userStore.changeUserSex('男')
}
const changeAge = () => {
    userStore.changeUserAge(1)
}
</script>

<style lang="css" scoped>

</style>