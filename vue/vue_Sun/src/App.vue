<template>
 <input v-model="message" placeholder="edit me">
 <p>作者是: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue'
 let message = ref('')
</script>

<!-- <style lang="css" scoped>
img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}
.bd {
  border: 8px solid #51bbd3;
}
</style> -->