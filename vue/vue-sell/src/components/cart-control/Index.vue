<template>
    <div class="cart-control">
        <div class="cart-decrease" >
            <i class="iconfont icon-jianhao"></i>
        </div>
        <div class="cart-count">1</div>
        <div class="cart-add" @click="addCart">
            <i class="iconfont icon-jiahao"></i>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    food: {
        type: Object,
        default: () => {}
    }
})

const emits = defineEmits(['update:food'])
const addCart = () => {
    const obj = props.food
    // console.log(props.food);
    if (!obj.count) {
        obj.count = 1
    }else {
        obj.count++
    }
    emits('update:food', obj)
}
</script>

<style lang="less" scoped>
.cart-control {
    display: flex;
    align-items: center;
    // justify-content: center;
    .cart-decrease {
        padding: 6px;
        opacity: 1;
        .icon-jianhao {
            font-size: 18px;
            color: rgb(0, 160, 220);
        }
    }
    .cart-count {
        padding: 6px;
        font-size: 10px;
        color: rgb(147, 153, 159);
    }
    .cart-add {
        padding: 6px;
        // opacity: 1;
        .icon-jiahao {
            font-size: 22px;
            color: rgb(0, 160, 220);
        }
    }
}
</style>