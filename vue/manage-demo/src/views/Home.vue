<template>
    <div class="home">
        <header class="header">
            <div class="name">图书管理系统</div>
            <div class="userInfor">
                <span>欢迎 {{ user }}</span>
            </div>
        </header>
        <section class="main">
            <div class="menu">
                <ul class="menu-list" v-for="item in menu">
                    <li class="list-item">
                        <router-link v-bind:to="`/home${item.path}`">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script setup>
import { menu } from '../menuDate'
const user = localStorage.getItem("user")
</script>

<style lang="css" scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header {
    height: 60px;
    background-color: #e8ac9a;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}
.name {
    font-size: 26px;
    font-weight: bold;
}
.main {
    display: flex;
    flex: 1;
}
.menu {
    flex: 0 0 200px;
    height: 100%;
    background-color: #e1bab0;
}
.menu-list {
    padding: 20px 0;
}
.list-item {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}
.list-item a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
}
.list-item:hover{
    background-color: rgba(191, 139, 139, 0.5)
}
.content {
    flex: 1;
    background-color: #e3bfb4;
}
</style>