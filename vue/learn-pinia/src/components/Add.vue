<template>
    <div>
        <button @click="num++">add -- {{ num }}</button>
    </div>
</template>

<script setup>
import { num } from '@/global.js'
</script>

<style lang="css" scoped>

</style>