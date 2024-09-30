<template>
  <menu class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink @click="currentTap = tab.key" :current-tab="currentTap" :tab="tab"></TabLink>
        </li>
      </ul>
    </nav>
    <ReusableTransition>
      <keep-alive>
        <component :is="currentTabComponent"/>
      </keep-alive>
    </ReusableTransition>
    <NotificationList></NotificationList>
  </menu>
</template>

<script setup lang="ts">
import TabLink from './components/TabLink.vue';
import { computed, ref } from 'vue';
import type { ITab, TTabKey } from './types';
import GeneralSettings from './components/GeneralSettings.vue';
import NotificationSetting from './components/NotificationSetting.vue';
import PrivacySetting from './components/PrivacySetting.vue';
import ReusableTransition from './components/ReusableTransition.vue';
import NotificationList from './components/NotificationList.vue';
const tabs: ITab[] = [
  {
    key: 'General',
    label: 'General',
    component:GeneralSettings
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component:NotificationSetting
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: PrivacySetting
  }
];
const currentTap = ref<TTabKey>('General');
const currentTabComponent = computed(()=>tabs.find(tab => tab.key === currentTap.value)?.component)
</script>


