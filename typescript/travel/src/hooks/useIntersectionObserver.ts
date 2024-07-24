import { ref, watch, onUnmounted, Ref } from 'vue'

/*
 * @func 滚动到底部或最右边加载更多
 * @desc 是否滚动到了底部？ IntersectionObserver  
 * 最后一个元素是否在可视区域？
 * @params {node 最后一个元素 ref  loadMore 下一页的加载函数} 
*/
export const useIntersectionObserver = (node: Ref<HTMLElement | null>, loadMore: () => void) => {
    const hasMore = ref<boolean>(true)
    // 监听节点进入视窗
    let observer:IntersectionObserver
    // 监听节点变化
    watch(node, (newRef, oldRef) => {
        // 取消监听旧节点
        if (oldRef) { // 有了
            observer.unobserve(oldRef)
        }

        if (newRef) {
            // 组件挂载后
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    // 底部加载更多
                    loadMore()
                }
            })

            observer.observe(newRef)
        }
    })
    // 组件卸载,取消监听  防止内存泄漏
    onUnmounted(() => {
        observer.disconnect();
    })
    // hasMore false 停止监听   
    watch(hasMore, (value) => {
        value?observer.observe(node.value!):observer.disconnect()
    })

    return {
        hasMore,
        setHasMore: (value:boolean) => {
            hasMore.value = value
        }
    }
}