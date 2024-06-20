<template>
    <div>
        <h2>当前温度： {{ temp }}</h2>
        <h2>建议穿衣： {{ suggest }}</h2>

        <button v-on:click="add">+</button>
        <button v-on:click="minus">-</button>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
let temp = ref(20)
// let suggest = ref('夹克')

const add = () => {
    temp.value += 5
}
const minus = () => {
    temp.value -= 5
}
const suggest =  computed(() => {
    if (temp.value >= 30){
        return '短袖'
    }else if (temp.value >= 20){
        return '夹克'
    }else if (temp.value >= 0){
        return '棉袄'
    }else {
        return '羽绒服'
    }
    
})

</script>

<style lang="css" scoped>

</style>