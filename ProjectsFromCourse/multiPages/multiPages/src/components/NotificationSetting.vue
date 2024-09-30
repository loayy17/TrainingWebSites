<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notificationsSetting.email" />
        <label>Email Notifications</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notificationsSetting.sms" />
        <label>SMS Notifications</label>
      </div>
      <button @click.prevent="save" type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { notificationsSetting } = useSettings();
const {addNotification} = useNotifications()
const save = () => {
  addNotification('Notifications Setting save successfully')
}
</script>

<style scoped></style>
