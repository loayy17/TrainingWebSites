<template>
  <div class="container">
    <h1>Parent</h1>
    <div class="button-group">
      <button @click="changeColor('red')" style="background-color: red"></button>
      <button @click="changeColor('yellow')" style="background-color: yellow"></button>
      <button @click="changeColor('green')" style="background-color: green"></button>
      <button @click="changeColor('black')" style="background-color: black"></button>
      <button @click="changeColor('blue')" style="background-color: blue"></button>
      <button @click="changeColor('purple')" style="background-color: purple"></button>
    </div>
    <h2>grandChildControl</h2>
    <div class="button-group">
      <button @click="changeGrandColor('red')" style="background-color: red"></button>
      <button @click="changeGrandColor('yellow')" style="background-color: yellow"></button>
      <button @click="changeGrandColor('green')" style="background-color: green"></button>
      <button @click="changeGrandColor('black')" style="background-color: black"></button>
      <button @click="changeGrandColor('blue')" style="background-color: blue"></button>
      <button @click="changeGrandColor('purple')" style="background-color: purple"></button>
    </div>
    <div class="screen">
      <childOne :Childcolor="Parentcolor"></childOne>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, inject } from 'vue';
import childOne from './childOne.vue';

const Parentcolor = ref('white');
const GrandChildColor = ref('white')
const changeColor = (value: string) => {
  Parentcolor.value = value;
};
const changeGrandColor = (value: string) => {
  GrandChildColor.value = value;
};
provide('grandChildColor',GrandChildColor)

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  padding: 20px;
}

.button-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  padding: 40px;
  margin: 10px;
}

.screen {
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  padding: 20px;
}
</style>
