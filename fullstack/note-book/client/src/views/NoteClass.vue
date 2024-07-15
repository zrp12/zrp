<template>
    <div>
        noteClass
    </div>
</template>

<script setup>
import axios from '@/api';

axios.post('/home').then(res => {
    console.log(res);
})
</script>

<style lang="less" scoped>

</style>