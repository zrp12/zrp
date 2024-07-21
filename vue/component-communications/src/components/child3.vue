<template>
    <div class="input-group">
      <input type="text" v-model="value">
      <button @click="add">添加</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const value = ref('')
const props = defineProps({
    msg: {
        type: Array,
        default: () => []
    }
})

const emits = defineEmits(['update:msg'])
const add = () => {
    // props.list.push(value.value)// 不建议直接操作父组件给过来的数据
    const arr = props.msg
    arr.push(value.value)
    emits('update:msg', arr)
    value.value = ''
}
</script>

<style lang="css" scoped>

</style>