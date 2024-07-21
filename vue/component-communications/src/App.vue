<template>
    <div class="input-group">
      <input type="text" v-model="value">
      <button @click="add">添加</button>
    </div>

    <Child :msg="toChild"></Child>
     <!-- <Child :msg="list"></Child> -->
</template>

<script setup>
import { ref } from 'vue';
import Child from '@/components/child.vue'

// const list = ref(['玫瑰','牡丹','月季'])
const value = ref('')
const toChild = ref('')
let add = () => {
  // list.value.push(value.value)
  // value.value = ''
  toChild.value = value.value
  value.value = ''
}
</script>

<style lang="css" scoped>

</style>