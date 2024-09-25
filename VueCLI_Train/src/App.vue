<script setup>
import { ref } from "vue";

const name = "loay Al-hindi";
const status = ref(true);
let link = ref("");
let backColor = ref("");
const arrOfSkills = ref([
  "HTML",
  "CSS",
  "JS",
  "TS",
  "Python",
  "Dart",
  "C++",
  "C#",
]);
const arrOfLinks = ref({
  Google: "https://www.google.com",
  Facebook: "https://www.facebook.com",
  Youtube: "https://www.youtube.com",
});
const changeStatus = () => {
  status.value = !status.value;
};
const colorSelected = (value) => (backColor.value = value);
</script>

<template>
  <h1>{{ name }}</h1>

  <button @click="changeStatus()">{{ status ? "Hide" : "Show" }}</button>
  <p v-if="status">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quia
    sed, accusantium quam repellat minima. Repudiandae harum eum accusamus esse
    beatae hic dolor dolore nobis, est rem omnis praesentium officiis.
  </p>
  <p v-else>Click to Show Paraghraph</p>
  <ul>
    <li v-for="skill in arrOfSkills" :key="skill">{{ skill }}</li>
  </ul>

  <select name="links" id="links" v-model="link">
    <option value="" disabled>Select a link</option>
    <option v-for="(value, key) of arrOfLinks" :key="key" :value="key">
      {{ key }}
    </option>
  </select>
  <a :href="arrOfLinks[link]" target="_blank">Go To {{ link }}</a>
  <form action="">
    <div :style="{ backgroundColor: backColor }" class="card">
      <button
        id="red"
        style="background-color: red"
        @click="colorSelected(`red`)"
        type="button"
      ></button>
      <button
        id="yellow"
        style="background-color: yellow"
        @click="colorSelected(`yellow`)"
        type="button"
      ></button>
      <button
        id="blue"
        style="background-color: blue"
        @click="colorSelected(`blue`)"
        type="button"
      ></button>
      <button
        id="green"
        style="background-color: green"
        @click="colorSelected(`green`)"
        type="button"
      ></button>
    </div>
  </form>
</template>

<style scoped>
.card {
  margin: 0 auto;
  width: 125px;
  height: 125px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.card button {
  width: 25%;
  height: 15%;
}
</style>
