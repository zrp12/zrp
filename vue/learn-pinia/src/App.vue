<template>
  <div>
    <Child :msg = "title" @onSub="handle"/>
    <h1>{{ res }}</h1>
  </div>
</template>

<script setup>
import Child from '@/components/Child.vue'
import { ref } from 'vue'

const title = 'hello world'
const res = ref('')
const handle = (e) => { // 父组件会有事件参数e
  // console.log(e);
  res.value = e;
}
</script>

<style lang="css" scoped>

</style>