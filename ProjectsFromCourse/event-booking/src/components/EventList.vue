<template>
    <template v-if="error">
        <SectionCard>
            <div class="space-y-4 items-center flex flex-col">
                <div class="text-red-500">
                    Could not load Events at this Moment. Please try again
                </div>
                <div>
                    <RegisteerButton @click="axiosEvents">
                        Retry Now
                    </RegisteerButton>
                </div>
            </div>
        </SectionCard>
    </template>
  <template v-else>
    <section class="sm:grid grid-cols-1 lg:grid-cols-2 gap-8">
    <template v-if="!Loading">
      <template v-if="events.length">
        <event-card
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.date"
          :description="event.description"
          @register="$emit('register', event)"
        ></event-card>
      </template>
      <template v-else>
        <div class="col-span-2 text-center text-gray-500">
            No Events yet
        </div>
      </template>
    </template>
    <template v-else>
      <LoadingEventCard v-for="i in 5" :key="i"></LoadingEventCard>
    </template>
  </section>
  </template>
</template>

<script setup>
import EventCard from './EventCard.vue';
import LoadingEventCard from './LoadingEventCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import SectionCard from './SectionCard.vue';
import RegisteerButton from './RegisteerButton.vue';

defineEmits(['register']);
const events = ref([]);
const Loading = ref(false);
const error = ref(null);
const axiosEvents = async () => {
  Loading.value = true;
  error.value = null;
  try {
    const response = await axios('http://localhost:3001/events');
    events.value = await response.data;
  } catch (err) {
    error.value = err;
  } finally {
    Loading.value = false;
  }
};
onMounted(() => axiosEvents());
</script>

<style scoped></style>
