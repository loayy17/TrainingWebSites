<template>
  <div class="container">
    <button @click="changeColor(`red`)" style="background-color: red">{{ colorGrandChild }}</button>
    <button @click="changeColor(`yellow`)" style="background-color: yellow"></button>
    <button  @click="changeColor(`green`)" style="background-color: green"></button>
    <button @click="changeColor(`black`)" style="background-color: black"></button>
    <button @click="changeColor(`blue`)" style="background-color: blue"></button>
    <button @click="changeColor(`purple`)" style="background-color: purple"></button>
  </div>
  <div class="screen">
    <span :style="{backgroundColor:color}"></span>
  </div>
</template>

<script setup lang="ts">
import { ref,inject,provide } from 'vue';
let colorGrandChild = ref('white')
const changeColor = (value: any) => {
  colorGrandChild.value = value
}
provide ('colorGrandChild',colorGrandChild)
let color = inject("color",'white')
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
