<template>
    <NavBar/>
    <Hero title="Parent to Component" subtitle="Parent to Component with default"/>
    <HomeCard/>
    <JobListing :limit="2"/>
</template>

<script setup >
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue'
import HomeCard from './components/HomeCard.vue';
import JobListing from './components/JobListing.vue';
</script>