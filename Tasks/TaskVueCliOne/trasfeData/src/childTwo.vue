<template>
  <div class="container">
    <h1>GrandChild</h1>
    <div class="button-group">
      <button style="background-color: red"></button>
      <button style="background-color: yellow"></button>
      <button style="background-color: green"></button>
      <button style="background-color: black"></button>
      <button style="background-color: blue"></button>
      <button style="background-color: purple"></button>
    </div>
    <div class="screen h-50 w-25" :style="{ 'background-color': GrandColor,'color':'white' }"> from child
    </div>
      <div class="screen h-50 w-25" :style="{ 'background-color': GrandChild , 'color': 'black'}"> from parent</div>

  </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
let GrandChild = inject('grandChildColor' ,'black')
defineProps({
  GrandColor: String,
});
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
  padding: 20px;
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
