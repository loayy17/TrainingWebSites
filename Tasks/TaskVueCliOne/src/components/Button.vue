<template>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ numberFromParent: number }>();
</script>

<style scoped>
/* Adding a gradient to the button */
.btn-gradient {
  background: linear-gradient(45deg, #007bff, #00c6ff); /* Blue gradient */
  color: white; /* White text for better contrast */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

/* Add hover and focus effects */
.btn-gradient:hover,
.btn-gradient:focus {
  background: linear-gradient(45deg, #0056b3, #00a6e6); /* Darker gradient on hover */
  transform: scale(1.05); /* Slight zoom effect */
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.4); /* Box shadow on hover */
}

/* Custom button size and appearance */
button {
  min-height: 60px; /* Increase height for a larger button */
  font-size: 1.25rem; /* Larger font for better readability */
  letter-spacing: 0.1em; /* Add space between letters */
}
</style>
