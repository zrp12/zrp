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

const list = ref(['玫瑰','牡丹','月季'])

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
//     msg: {
//         type: Array,
//         default: () => []
//     }
// })
</script>

<style lang="css" scoped>

</style>