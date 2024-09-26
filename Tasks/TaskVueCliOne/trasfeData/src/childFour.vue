<template>
  <div class="container">
    <button style="background-color: red"></button>
    <button style="background-color: yellow"></button>
    <button style="background-color: green"></button>
    <button style="background-color: black"></button>
    <button style="background-color: blue"></button>
    <button style="background-color: purple"></button>
  </div>
  <div class="screen">
    <span></span>
  </div>
</template>

<script setup lang="ts">
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
padding: 10px;
margin: 10px auto;
}
</style>