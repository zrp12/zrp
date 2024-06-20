# 指令
1. v-for
2. v-on

# watch
watch(xx, (newval, oldval) => {

})
监听一个属性值，当该属性值变更时，会自动触发回调

# 计算属性 computed
const xxx = computed(() => {
    return xx
})
当computed中的变量值变更时，computed就会重新执行一遍