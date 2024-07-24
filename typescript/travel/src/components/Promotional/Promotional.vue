<template>
    <div class="list-wrapper flex flex-wrap items-center">
        <div
        class="item flex_[0_0_50%]"
        v-for="(item,index) in items"
        :key = "item.id">
        <div>{{ item.title }}</div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { PromotionalItem } from '@/types/promotional';
import { defineProps } from 'vue';

defineProps<{
    items: PromotionalItem[]
}>()
</script>