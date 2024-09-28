<script setup>
import EventCard from '@/components/EventCard.vue';
import BookingItem from './components/BookingItem.vue';
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <event-card
      v-for="i in 8"
      :key="i"
      title="Vue Training"
      when="2024-05-03"
      description="Just test to Props Data" 
      @register="console.log('pass')"
      ></event-card>
    </section>
    <h2 class="text-2xl font-medium">Your Bookins</h2>
    <section class="grid grid-cols-1 gap-4">
      <booking-item v-for="i in 8" :key="i"></booking-item>
    </section>
  </main>
</template>
