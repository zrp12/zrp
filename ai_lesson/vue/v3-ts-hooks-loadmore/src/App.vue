<script setup lang="ts">
import { useArticleStore } from './store/article.ts'
import { ref, onMounted, toRefs } from 'vue';
import  useIntersectionObserver  from './hooks/useIntersectionObserver.ts'

const articleStore = useArticleStore()

onMounted (async() => {
  await articleStore.getArticles(1)
})
const { articles } = toRefs(articleStore)

const itemRef = ref<HTMLElement | null>(null)
const hasMore = ref<boolean>(true)

// 定义当前的页数，初始值为1
const currentPage = ref<number>(1)

// 处理加载下一页
const handleNextPage = async(setHasMore: (value: boolean) => void) => {
  currentPage.value += 1
  const res = await articleStore.getArticles(currentPage.value)
  if (!res.hasMore) {
    setHasMore(false)
    hasMore.value = false
  }
}

const { setHasMore } = useIntersectionObserver(itemRef, () => {
  handleNextPage(setHasMore)
})
</script>

<template>
  <section>
    <article
    v-for="(item, index) in articles" 
    :key="item.id"
    class="item"
    :ref="(el) => ((index === articles.length - 1) ? (itemRef = el as HTMLElement) : '')"
    >
      <h2>{{ item.title }}</h2>
    </article>
    <div v-if="!hasMore">
      <h2>没有数据了</h2>
    </div>
  </section>
</template>

<style scoped>
.item {
  height: 20vh;
}
</style>
