<template>
  <SectionCard>
    <template #header>
      {{ title }}
    </template>

    {{ when }}

    <template #footer>
        <div class="space-y-4">
        <p>{{ description }}</p>
          <div class="flex justify-end p-4">
            <RegisteerButton @click="$emit('register')">Register</RegisteerButton>
          </div>
        </div>
      </template>
  </SectionCard>
</template>

<script setup lang="ts">
import RegisteerButton from './RegisteerButton.vue';
import SectionCard from './SectionCard.vue';
defineProps({
  title: String,
  when: String,
  description: String
});
defineEmits(['register']);
</script>

<style scoped></style>
