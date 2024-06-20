<template>
    <div>
        <h2>当前温度： {{ temp }}</h2>
        <h2>建议穿衣： {{ suggest }}</h2>

        <button v-on:click="add">+</button>
        <button v-on:click="minus">-</button>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue'
let temp = ref(20)
let suggest = ref('夹克')

const add = () => {
    temp.value += 5
    // if(temp.value >= 30) {
    //     suggest.value = '短袖'
    // }else if(temp.value >= 20) {
    //     suggest.value = '夹克'
    // }else if(temp.value >= 0) {
    //     suggest.value = '棉袄'
    // }else {
    //     suggest.value = '羽绒服'
    // }
}
const minus = () => {
    temp.value -= 5
}
// 观察者
watch(temp, (newval, oldval) => {
    // console.log(newval, oldval);
    if(newval >= 30) {
        suggest.value = '短袖'
    }else if(newval >= 20) {
        suggest.value = '夹克'
    }else if(newval >= 0) {
        suggest.value = '棉袄'
    }else {
        suggest.value = '羽绒服'
    }
}
)
</script>

<style lang="css" scoped>

</style>