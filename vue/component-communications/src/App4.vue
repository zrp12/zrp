<template>
    <Child ref="childRef"></Child>

    <div>
        <div class="child">
        <ul>
            <li v-for="item in childRef?.list">{{ item }}</li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import Child from '@/components/child4.vue'
import {onMounted, ref} from 'vue'

const childRef = ref(null)

// onMounted(() => {
//     console.log(childRef.value);
// })
</script>

<style lang="css" scoped>


</style>