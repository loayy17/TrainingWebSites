<template>
  <form method="get">
    <div class="inputOne">
      <label for="inputOne">first Name</label>
      <input type="text" id="inputOne" v-model="firstName" />
    </div>
    <div>
      <label for="inputTwo">last Name</label>
      <input v-model="lastName" v-auto-focus type="text" id="inputTwo" />
    </div>
    <input @click.prevent="showData" type="submit" value="Submit" />
  </form>
  <div v-if="display">
    You write: fName {{ firstName ? firstName : "Nothing" }} lName
    {{ lastName ? lastName : "Nothing" }}
  </div>
</template>

// script
<script setup lang="ts">
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const display = ref("");
const showData = () => {
  display.value = `first name = ${firstName.value} <br> last name = ${lastName.value}`;
};
const vAutoFocus = {
  mounted: (el: { focus: () => void }) => {
    el.focus();
  },
};
</script>

//style

<style>
form {
  display: flex;
  justify-content: flex-start;
}
form div label {
  margin-right: 25px;
}
div {
  margin-right: 25px;
}
form .auto-focus {
}
</style>
