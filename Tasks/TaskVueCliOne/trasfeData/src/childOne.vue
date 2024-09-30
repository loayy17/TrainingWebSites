<template>
  <div class="container">
    <h1>Child</h1>
    <div class="button-group">
      <button @click="changeColor('red')" style="background-color: red"></button>
      <button @click="changeColor('yellow')" style="background-color: yellow"></button>
      <button @click="changeColor('green')" style="background-color: green"></button>
      <button @click="changeColor('black')" style="background-color: black"></button>
      <button @click="changeColor('blue')" style="background-color: blue"></button>
      <button @click="changeColor('purple')" style="background-color: purple"></button>
    </div>
    <div class="screen h-75 w-50" :style="{ 'background-color': Childcolor }">
      <childTwo @changeColorFromGrand="changeColorFromGrand" :GrandColor="GrandchildColor"></childTwo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import childTwo from './childTwo.vue';

const GrandchildColor = ref('white');
const changeColorFromGrand = (newColor: string) => {
  GrandchildColor.value = newColor;
};
defineProps({
  Childcolor: String,
});

const changeColor = (color: string) => {
  GrandchildColor.value = color;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  padding: 20px;
  margin: 20px 0;
}

.button-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  padding: 30px;
  margin: 10px;
}

.screen {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 2px solid #000;
  padding: 20px;
}
</style>
