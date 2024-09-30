import { ref, watch } from 'vue';

interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface INotificationSettings {
  email: boolean;
  sms: boolean;
}
type visibility = 'public' | 'private';
interface IPrivacySettings {
  visibility: visibility;
  searchEngineIndexing: boolean;
}

const general = ref<IGeneralSettings>(
  (() => {
    const stored = localStorage.getItem('general');
    return stored !== null
      ? JSON.parse(stored)
      : {
          about: '',
          country: 'jordan',
          gender: 'male',
          email: '',
          username: ''
        };
  })()
);

const notificationsSetting = ref<INotificationSettings>(
  (() => {
    const stored = localStorage.getItem('notifications');
    return stored !== null
      ? JSON.parse(stored)
      : {
          email: false,
          sms: false
        };
  })()
);
const privacySetting = ref<IPrivacySettings>(
  (() => {
    const stored = localStorage.getItem('privacy');
    return stored !== null
      ? JSON.parse(stored)
      : {
          visibility: 'public',
          searchEngineIndexing: false
        };
  })()
);

watch(
  [general, notificationsSetting,privacySetting],
  (value) => {
    localStorage.setItem('general', JSON.stringify(value[0]));
    localStorage.setItem('notifications', JSON.stringify(value[1]));
    localStorage.setItem('privacy',JSON.stringify(value[2]))
  },
  { deep: true }
);

export function useSettings() {
  return {
    general,
    notificationsSetting,
    privacySetting
  };
}
