<template>
  <div class="home">
      <div class="top-bg absolute h-36 -z-10 w-screen
       bg-gradient-to-b from-orange-500 to-white"></div>
      <van-search
          v-model="searchField"
          placehold="请输入搜索关键词"
          show-action
          shape="round"
          background="transparent"
          class="mb-2">
          <template #action>
              <div class="text-white">
                  <van-icon name="shopping-cart-o" size="1.25rem"/>
              </div>
          </template>
      </van-search>
      <main class="flex flex-col space-y-4">
          <header class="w-[calc(100vw-2rem)] min-h-24 
          bg-white rounded-2xl p-2 shoadow-md self-center">
              <section class="topbar flex justify-around mb-3">
                  <div
                      v-for="item in topBarState"
                      :key="item.title" 
                      class="topbar-item flex flex-col items-center">
                      <div class="topbar-item__icon">
                          <van-icon :name="item.icon" size="2rem"/>
                      </div>
                      <div class="topbar-item__text text-xs">{{item.title}}</div>
                  </div>
              </section>
              <van-button type="primary" 
              block size="small" color="rgb(246,247,248)">
                  <div class="text-black flex">
                      <van-icon name="apps-o" size="1rem" />
                      <span class="text-xs ml-2 font-bold">所有分类</span>     
                  </div>
              </van-button>
          </header>
          <section class="navbar flex overflow-x-scroll w-screen space-x-4 px-4">
              <div
              class="navbar-item flex flex-col border rounded-lg flex-[0_0_auto] w-24"
              v-for="item in navBarState"
              :key="item.title"
              >
              <div class="navbar-item__text text-xs p-2 pb-0">{{ item.title }}</div>
              <div class="navbar-item__icon self-end p-2">
                  <van-icon :name="item.icon" size="1.5rem" />
              </div>
              </div>
          </section>
          <section>
              <h2 class="title">最近浏览</h2>
              <RecentlyViewCard :items="recentlyViewedState"/>
          </section>
          <section>
              <h2 class="title">想去哪里玩？</h2>
              <div class="flex w-screen overflow-x-scroll space-x-2 px-4">
              <div class="region-item flex-[0_0_auto]" v-for="item in discountInfo" :key="item.region">
                  <div class="item-wrapper w-32 h-20 rounded-lg overflow-hidden relative">
                  <img :src="item.discounts[0].cover" alt="" />
                  <div class="item-mask absolute w-full h-full bg-black opacity-20 bottom-0"></div>
                  <div class="item-title absolute z-10 text-sm font-bold text-white bottom-1 left-1">{{ item.region }}</div>
                  </div>
              </div>
              </div>
          </section>
          <section>
              <h2 class="title">探索更多</h2>
              <PromotionalList class="px-4" :items="promotionalList" :next="handleNextPage" />
          </section>

      </main>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, onMounted } from 'vue'
import { useHomeStore } from '@/store/homeStore'
import RecentlyViewCard from '@/components/RecentlyView/RecentlyViewCard.vue'
import { usePromotionalStore } from '@/hooks/promotionalStore.ts'
import PromotionalList from '@/components/Promotional/Promotional.vue'

const searchField = ref('')
const homeStore = useHomeStore()

const { 
  topBarState, 
  navBarState, 
  recentlyViewedState 
} = toRefs(homeStore)

// promotional 
const promotionalStore = usePromotionalStore()
const { promotionalList } = toRefs(promotionalStore)
const currentPage = ref(1)

const handleNextPage = async () => {
  currentPage.value++
  const res = await promotionalStore.getPromotionalList(
      currentPage.value,
      6
  )
  if (!res.hasMore) {
      setHasMore(false)
  }
}

onMounted(async () => {
  currentPage.value++
  const res = await promotionalStore.getPromotionalList(currentPage.value, 6)
  if (!res.hasMore) {
      setHasMore(false)
  }


})

</script>