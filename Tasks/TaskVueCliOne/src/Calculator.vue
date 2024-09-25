<template>
<div class="container container p-4 rounded-4">
  <div class="row">
    <div class="col">
        <div class="outputScreen p-5 bg-primary-subtle m-4 outputScreen p-5 rounded-4">
        </div>
    </div>
  </div>
  <div class="row gap-3 mb-3 justify-content-center">
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      7
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      8
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      9
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button style="background-color: red;" type="button" class="btn w-100 shadow-lg rounded-pill py-3 px-4 text-uppercase">
      AC
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
    </div>
  <div class="row gap-3 mb-3 justify-content-center">
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
    </div>
  <div class="row gap-3 mb-3 justify-content-center">
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
      <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      5
    </button>
  </div>
    </div>
  <div class="row gap-3 mb-3 justify-content-center">
    <div class="col-6">
        <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      3
    </button>
  </div>
      </div>
      <!-- Other buttons as normal -->
      <div class="col">
          <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      4
    </button>
  </div>
      </div>
      <div class="col">
          <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      4
    </button>
  </div>
      </div>
      <div class="col">
          <div class="col px-0 mb-3">
    <button type="button" class="btn btn-dark btn-gradient px-4 py-3 rounded-pill shadow-lg text-uppercase w-100">
      4
    </button>
  </div>
      </div>
    </div>
  </div>

</template>
//script
<script setup lang="ts">
import {ref} from 'vue';

</script>
//style
<style>

.container {
    background-color: rgb(0, 0, 202);
    margin: 5%;
    width: 75%;
}
.btn-gradient {
  background: linear-gradient(45deg, #007bff, #00c6ff); /* Blue gradient */
  color: white; /* White text for better contrast */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-gradient:hover,
.btn-gradient:focus {
  background: linear-gradient(45deg, #0056b3, #00a6e6); /* Darker gradient on hover */
  transform: scale(1.05); /* Slight zoom effect */
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.4); /* Box shadow on hover */
}

button {
  min-height: 60px;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  color: white;
}
</style>