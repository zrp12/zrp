<template>
    <div class="app">
        <!-- <h2>{{ title }}</h2>
        <h2 v-text="title2"></h2>
        <h3 v-html="content"></h3> -->
        <!-- <button v-on:click="add" @mousemove="move">{{ count }}</button> -->
         <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="{'bd':active}"> -->
         <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class='name'> -->
         <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="state.count >= 3 ? 'bd' : ''"> -->
         <!-- <img v-bind:src="url" alt="" @click="handle" :class="getClass()"> -->
         <!-- <img v-bind:src="url" alt="" @click="handle" :style="`border:  ${num}px solid #469e99;`"> -->
    </div>

    <div class="main">
        <!-- <h2 v-if="isEn">{{title1}}</h2>
        <h2 v-else>{{title2}}</h2> -->
        <h2 v-if="isEn">{{title2}}</h2>
        <h2 v-show="isEn">{{title1}}</h2>
        <button @click="change">切换</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// let title = ref('hello')

let title1 = 'Hello'
let title2 = '你好'
let isEn = ref(true)
const change = () => {
    isEn.value = !isEn.value
    // if (title.value === 'hello') {
    //     title.value = '你好'
    // }else{
    //     title.value = 'hello'
    // }
}
</script>

<!-- <script setup>
// const title = 'Hello World'
// const title2 = '标题'
// const content = '<p>床前明月光</p><p>疑似地上霜</p>'

// import {ref} from 'vue'
// let count = ref(0)
// // let count = 0 // 响应式
// const add = () => {
//     count.value++
//     console.log(count.value);
// }
// const move = () => {
//     console.log('鼠标在button上移动');
// }
import {ref, reactive} from 'vue'
const url = 'https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0';
let active = ref(false);
let name = ref('')
let state = reactive({
    count: 0
})
let classObj = {
    bd: true
}
let num = 15
const handle = () =>{
    // active.value = true
    // name.value = 'bd'
    // state.count++
}
const getClass = () => {
    return 'bd'
}
</script> -->

<style lang="css" scoped>
img{
    width: 300px;
    height: 300px;
}
.bd{
    border: 4px solid #469e99;
}

</style>