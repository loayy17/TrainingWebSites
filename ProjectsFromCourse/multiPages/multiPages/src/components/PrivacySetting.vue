<template>
    <div>
        <h2 class="text-2xl mb-4">Privacy</h2>
        <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-2">
          <input type="checkbox" v-model="privacySetting.searchEngineIndexing"/>
          <label>Search Ingine Indexing</label>
      </div>
      <div>
        <label class="mb-2 mt-5">Visibility</label>
        <select v-model="privacySetting.visibility">
          <option value="" disabled selected>Select Country</option>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button @click.prevent="save" type="submit" class="btn-primary">Save</button>
    </form>
    </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { privacySetting } = useSettings();
const {addNotification} = useNotifications()
const save = () => {
  addNotification('Privacy Setting save successfully')
}
</script>

<style scoped>

</style>