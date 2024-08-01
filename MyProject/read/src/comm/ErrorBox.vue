<!-- components/ErrorBox.vue -->
<template>
    <transition name="fade">
        <div class="error-box" v-if="showError">
            <p>{{ error }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        showError: {
            type: Boolean,
            required: true
        },
        error: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.error-box {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, visibility 0.3s;
}

.fade-enter-to,
.fade-leave-to {
    opacity: 1;
    visibility: visible;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    visibility: hidden;
}
</style>