<template>
    <div class="wrapper">
        <v-header/>
        <v-sidebar/>
        <div class="content-box">
            <router-view/>
        </div>
    </div>
    <router-view />
</template>

<script setup lang="ts">
import vHeader from '@/components/header.vue'
import vSidebar from '@/components/sidebar.vue'
</script>