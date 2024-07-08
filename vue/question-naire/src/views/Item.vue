<template>
    <itemContainer parentComponent="item"/>
</template>

<script setup>
import itemContainer from '@/components/itemContainer.vue'
import { useQuestionStore } from '@/stores/question.js'

const questionStore = useQuestionStore()
// console.log(questionStore);
questionStore.getQuestionList()
</script>

<style lang="scss" scoped>

</style>