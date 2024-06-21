<template>
  <div class="app">
    <button class="btn" @click="changeTab(1)">购物车</button>
    <button class="btn" @click="changeTab(2)">todos</button>

    <!-- Shopping -->
    <Shopping v-if="tabIndex === 1"></Shopping>

    <!-- todos -->
     <Todos v-else></Todos>
  </div>
</template>

<script setup>
import Shopping from './components/Shopping.vue'
import Todos from './components/Todos.vue'
import {ref} from 'vue'

let tabIndex = ref(1)

const changeTab = (index) => {
  // console.log(index);
  tabIndex.value = index
}
</script>

<style lang="css" scoped>
.app {
  text-align: center;
}
.btn {
  font-size: 20px;
  width: 100px;
  height: 40px;
  margin: 20px;
}
</style>