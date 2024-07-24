<template>
    <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
        <div
        class="item flex-[0_0_auto] w-28 space-y-2"
        v-for="(item, index) in items"
        :key="item.title">
        <div class="item-img">
            <img :src="item.cover" alt="item.name" class="rounded-lg" />
        </div>
        <div class="item-info">
            <div class="item-name text-xs fold-bold">{{ item.title }}</div>
            <div class="item-price text-xs fold-bold">{{ item.price }}</div>
        </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import { RecentlyViewItem } from '@/types/home';
import { defineProps } from 'vue';
// defineProps({
//     items: {
//         type: Array,
//     }
// })

defineProps<{
    items: RecentlyViewItem[]
}>()
  
</script>
