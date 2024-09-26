<template>
<div>
  <div class="container">
    <button style="background-color: red"></button>
    <button style="background-color: yellow"></button>
    <button style="background-color: green"></button>
    <button style="background-color: black"></button>
    <button style="background-color: blue"></button>
    <button style="background-color: purple"></button>
  </div>
  <div class="screen">
    <span>
      <ChildTwo></ChildTwo>
    </span>
    
  </div>
</div>
</template>

<script setup lang="ts">
import ChildTwo from './childTwo.vue';
</script>
<style scoped>

.container {
  display: flex;
  justify-content: center;
}
.screen {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
button {
  padding: 100px;
  margin: 25px;

}
span {
  margin-top: 2%;
padding: 1000px;
margin: 10px auto;
}
</style>