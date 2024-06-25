<template>
    <!-- 订阅add1事件 -->
    <Child @add1="handle"></Child>
    <div>
        <div class="child">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import Child from '@/components/child2.vue'
import {ref} from 'vue'
const list = ref(['html','js','css'])

const handle = (event) => {
    // console.log(event);
    list.value.push(event)
}

</script>

<style lang="css" scoped>

</style>