<template>
  <div :class="`${backGround} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  backGround: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>
