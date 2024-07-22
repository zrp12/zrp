<script setup lang="ts">
import TabBer from '@/views/layout/TabBer.vue'
</script>

<template>
  <div >
    <RouterView />
    <!-- 1rem为4个单位 -->
    <div class="footer h-12">
        <TabBer class="fixed bottom-0"/>
    </div>
  </div>
</template>

<style scoped>

</style>
