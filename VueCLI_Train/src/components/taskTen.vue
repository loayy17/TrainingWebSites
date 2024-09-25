<template>
  <div class="todoList">
    <h2 style="text-align: center">TODO List</h2>
    <form @submit.prevent="addTask">
      <label for="newTask"></label>
      <input
        type="text"
        id="newTask"
        v-model="newTask"
        placeholder="Write Your Task"
      />
      <input type="submit" value="submit" id="submit" />
    </form>
    <div v-if="errShow" style="color: red">the value can not be duplicated</div>
    <ul id="tasks">
      <li v-for="(task, index) in props.Tasks">
        {{ task }} <button @click="deleteTask(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    Tasks : Array
})
const Tasks = ref("")
const newTask = ref("");
let errShow = ref(false);
const addTask = () => {
  if (props.Tasks.value.includes(newTask.value)) {
    errShow.value = true;
  } else if (newTask.value.trim() !== "") {
    errShow.value = false;
    props.Tasks.value.unshift(newTask.value);
    newTask.value = "";
  }
};
const deleteTask = (removeTask) => {
  props.Tasks.value.splice(removeTask, 1);
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.todoList form {
  position: sticky;
}
.todoList {
  width: 50%;
  background-color: rgb(215, 153, 153);
  margin: 10% auto;
  box-shadow: 2px 6px 14px 3px;
  border-radius: 15px;
}
.todoList h2 {
  margin: 15px auto;
  padding: 15 px;
}
.todoList form #newTask {
  width: 86%;
  padding: 1% 5%;
  margin-bottom: 15px;
  border-radius: 15px 0 0 0;
  border-color: gray transparent gray gray;
}
.todoList form #submit {
  width: calc(100% - 86%);
  padding: 1% 2%;
  border-radius: 0 15px 0 0;
  border-color: gray gray gray transparent;
}
.todoList ul {
  list-style-type: none;
  border-radius: 20px;
  max-height: 100%;
  overflow-y: auto;
  max-height: 50vh;
}
.todoList ul li {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: aliceblue;
  margin: 0px 5px 15px 5px;
  border-radius: 15px;
}
.todoList ul :last-child {
  border-radius: 0 0 15px 15px;
}
.todoList ul li button {
  border-radius: 0 0 0 0;
  background-color: transparent;
  border: 1px solid transparent;
  color: red;
}
.todoList ul li button:hover {
  cursor: pointer;
  color: rgb(121, 0, 0);
}
</style>
