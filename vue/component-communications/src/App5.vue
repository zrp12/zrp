<template>
        <div class="input-group">
            <input type="text" v-model="value">
            <button @click="add">添加</button>
        </div>

        <div class="child">
            <ul>
                <li v-for="item in list">{{ item }}</li>
            </ul>
        </div>

</template>

<script setup>
import { ref } from 'vue';
const list = ref(['玫瑰','牡丹','月季'])
const value = ref('')
const add = () => {
    list.value.push(value.value)
    value.value = ''
}
</script>

<style lang="css" scoped>
</style>
