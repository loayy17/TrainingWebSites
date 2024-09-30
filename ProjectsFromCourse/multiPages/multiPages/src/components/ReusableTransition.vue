<template>
    <transition mode="out-in" name="fade">
        <slot></slot>
    </transition>
</template>

<style scoped>
.fade-enter-active, /*v-enter-active for global transmision*/
.fade-leave-active {
  transition: opacity 0.3s linear;
}
.fade-enter-form,
.fade-leave-to {
  opacity: 0;
}

</style>