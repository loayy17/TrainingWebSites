<template>
  <div class="container h-50 mt-5 rounded-3 p-0">
    <div class="exit-icon text-end"><button class="btn fs-5">X</button></div>
    <div class="fs-2 text-center title">Member Login</div>
    <div
      v-if="userExist === 1"
      class="existUser text-center"
      style="color: #00ce81"
    >
      Exist Users
    </div>

    <div
      v-else-if="userExist === 2"
      class="existUser text-center"
      style="color: red"
    >
      Wrong Username or Password
    </div>
    <div v-else class="existUser text-center" style="color: red"></div>
    <form method="GET" class="mt-3 needs-validation" @submit.prevent="logIn">
      <div class="input-group mb-3 w-75 m-auto">
        <span
          class="bg-body border-end-0 input-group-text"
          id="basic-addon1"
          :class="state.userName === 'invalid' ? 'border-danger' : state.userName === 'valid' ? 'border-success' : '' "
          ><i class="bi bi-person-fill"></i
        ></span>
        <input
          :class="state.userName === 'invalid' ? 'border-danger' : state.userName === 'valid' ? 'border-success' : '' "

          v-auto-focus
          v-model="inputUsername"
          type="text"
          class="form-control border-start-0"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="validationCustomUsername"
          @input="() => (state.userName = ValidationStateEnum.unset)"
        />
      </div>
      <div class="input-group mb-3 w-75 m-auto">
        <span 
        :class="state.userName === 'invalid' ? 'border-danger' : state.userName === 'valid' ? 'border-success' : '' "
        class="bg-body border-end-0 input-group-text" id="basic-addon1"
          ><i class="bi bi-lock-fill"></i
        ></span>
        <input
        :class="state.userName === 'invalid' ? 'border-danger' : state.userName === 'valid' ? 'border-success' : '' "
          v-model="inputPassword"
          type="password"
          class="form-control border-start-0"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="mt-4 text-center">
        <button
          type="submit"
          class="btn btn-lg w-75 m-auto"
          style="background-color: #00ce81; color: white"
        >
          Login
        </button>
      </div>
      <div
        class="p-3 mt-4 text-center rounded-bottom-3"
        style="background-color: #ecf0f1"
      >
        <a href="" style="color: #a599b0; text-decoration: none"
          >Forget Password</a
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from "vue";
import axios from "axios";
import { ValidationStateEnum } from "./assets/validationState";
const inputUsername  = ref("") as Ref<string>;
const inputPassword = ref("") as Ref<string>;
const Users = ref([]) as Ref<string[]>;
const userExist = ref(0) as Ref<number>;
const state = reactive({
  userName: ValidationStateEnum.unset,
  password: ValidationStateEnum.unset,
});

onMounted(async () => {
  try {
    const response = await axios.get("testData.json");
    Users.value = response.data;
    console.log(Users.value);
  } catch (err) {
    console.log(err);
  }
});
const logIn = (): void => {
  if (
    Users.value.some(
      (value : any) =>
        value["username"] === inputUsername.value &&
        value["password"] === inputPassword.value
    )
  ) {
    userExist.value = 1;
    state.userName = ValidationStateEnum.valid;
    state.password = ValidationStateEnum.valid;
  } else {
    userExist.value = 2;
    state.userName = ValidationStateEnum.invalid;
    state.password = ValidationStateEnum.invalid;
  }
};
const vAutoFocus = {
  mounted: (el: { focus: () => void }) => {
    el.focus();
  },
};
</script>

<style scoped></style>
