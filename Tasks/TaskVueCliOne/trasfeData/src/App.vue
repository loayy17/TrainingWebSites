<template>
  <div class="container">
    <button @click="changeColor(`red`)" style="background-color: red">{{ colorFromChild }}</button>
    <button @click="changeColor(`yellow`)" style="background-color: yellow"></button>
    <button  @click="changeColor(`green`)" style="background-color: green"></button>
    <button @click="changeColor(`black`)" style="background-color: black"></button>
    <button @click="changeColor(`blue`)" style="background-color: blue"></button>
    <button @click="changeColor(`purple`)" style="background-color: purple"></button>
  </div>
  <div class="screen">
    <span :style="{backgroundColor:colorFromChild}" ><childOne></childOne></span>
    
  </div>
</template>

<script setup lang="ts">
import {ref,provide,inject } from 'vue'
import childOne from './childOne.vue';
const color = ref("white")
const changeColor = (value: any) => {
  color.value = value
}
provide('color', color)
const colorFromChild = inject('colorGrandChild','white')
console.log(colorFromChild)
</script>
<style scoped>

.container {
  display: flex;
  justify-content: center;
}
.screen {
  display: flex;
  justify-content: center;

}
button {
  padding: 100px;
  margin: 25px;

}
span {
  align-self: center;
  margin-top: 2%;
padding: 1000px;
margin: 10px auto;
}
</style>