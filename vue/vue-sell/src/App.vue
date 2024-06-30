<template>
  <div>
    <!-- <Header></Header> -->
     <Header :seller="sellerData"/>
  </div>
</template>

<script setup>
import Header from '@/components/header/index.vue'
import { getSeller  } from '@/api';
import { ref } from 'vue';

let sellerData = ref({})

// axiox request seller
getSeller().then(seller => {
  console.log(seller);
  sellerData.value = seller;
})

</script>

<style lang="less" scoped>

</style>