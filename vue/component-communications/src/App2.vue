<template>
    <!-- 订阅create事件 -->
    <Child @create="handle"></Child>
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
const list = ref(['玫瑰','牡丹','月季'])
const handle = (event) => {
    // console.log(event);
    list.value.push(event)
}

</script>

<style lang="css" scoped>

</style>