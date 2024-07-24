import { ref, watch, onMounted } from 'vue'

export const useIntersectionObserver = () => {
    const hasMore = ref<boolean>(true)
    onMounted(() => [

    ])
    watch(hasMore, (value) => {
        
    })
    return {
        hasMore,
        setHasMore: (value: boolean) => {
            hasMore.value = value
        }
    }
}