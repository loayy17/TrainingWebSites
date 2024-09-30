<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList @register="handledRegistration($event)"></EventList>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-4">
      <template v-if="!bookingsLoading">
        <booking-item
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancelled="cancelBooking(booking.id)"
        ></booking-item>
      </template>
      <template v-else>
        <LoadingBookings v-for="i in 4" :key="i"></LoadingBookings>
      </template>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import axios from 'axios';
import BookingItem from './components/BookingItem.vue';
import LoadingBookings from './components/LoadingBookings.vue';
import EventList from './components/EventList.vue';


const bookings = ref([]);
const bookingsLoading = ref(false);

const findBookingById = (id) => bookings.value.findIndex((b) => b.id === id);

const axiosBookings = async () => {
  bookingsLoading.value = true;
  try {
    const response = await axios('http://localhost:3001/bookings');
    bookings.value = await response.data;
  } finally {
    bookingsLoading.value = false;
  }
};
const handledRegistration = async (event) => {
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    // buttonRegister.value = 'Registed';
  }
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  };
  bookings.value.push(newBooking);
  try {
    const response = await axios.post('http://localhost:3001/bookings', {
      ...newBooking,
      status: 'confirmed'
    });
    console.log(response.status === 201);
    if (response.status === 201) {
      const index = findBookingById(newBooking.id);
      bookings.value[index] = await response.data;
    } else {
      throw new Error('Error to Confirm Booking');
    }
  } catch (err) {
    console.error('Failed to Register for Event', err);
    bookings.value = bookings.value.filter((b) => b.id !== newBooking.id);
  }
};
const cancelBooking = async (bookingId) => {
  const index = findBookingById(bookingId);
  const originalBooking = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await axios.delete(`http://localhost:3001/bookings/${bookingId}`);
    if (!response.status === 201) {
      throw new Error('Booking Could not be Cancel');
    }
  } catch (err) {
    console.error('Failed to cancelled the booking');
    bookings.value.splice(index, 0, originalBooking);
  }
};
onMounted(() => {
  axiosBookings();
});
</script>
