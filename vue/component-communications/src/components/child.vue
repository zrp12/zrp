<template>
    <div>
        <div class="child">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const list = ref(['html', 'css', 'js'])

const props = defineProps({
    msg: ''
})
watch(
    () => props.msg,
    (newVal, oldVal) => {
        list.value.push(newVal)
    }
)
// list.value.push(props.msg)

// defineProps({
//     list: {
//         type: Array,
//         default: () => []
//     }
// })
</script>

<style lang="css" scoped>

</style>