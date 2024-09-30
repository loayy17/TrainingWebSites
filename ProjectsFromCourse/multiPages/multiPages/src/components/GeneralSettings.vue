<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form class="space-y-4 mx-auto">
      <div>
        <label class="mb-1 mt-5">Username</label>
        <input type="text" v-model="general.username"/>
      </div>
      <div>
        <label class="mb-1 mt-5">Email</label>
        <input type="email" v-model="general.email"/>
      </div>
      <div>
        <label class="mb-1 mt-5">About Me</label>
        <input type="text" v-model="general.about"/>
      </div>
      <div>
        <label class="mb-1">Gender</label>
        <label>
          <input type="radio" value="male" v-model="general.gender"/>
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="female" v-model="general.gender"/>
          <span>Female</span>
        </label>
      </div>
      <div>
        <label class="mb-1 mt-5">Country</label>
        <select v-model="general.country">
          <option value="" disabled selected>Select Country</option>
          <option value="jordan">Jordan</option>
          <option value="palestine">Palestine</option>
          <option value="iraq">Iraq</option>
          <option value="saudi">Saudi Arabia</option>
        </select>
      </div>
      <button @click.prevent="save" type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { general } = useSettings();
const {addNotification} = useNotifications()
const save = () => {
  addNotification('General Setting save successfully')
}

</script>

<style scoped></style>
