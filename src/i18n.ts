import { App, Plugin } from 'vue';

import fr from './i18n/fr';

export interface I18nDefinitions {
  [key: string]: string;
}

const translate = (key: string): string => {
  return fr[key] || key;
};

const i18nPlugin: Plugin = {
  install(app: App) {
    // inject a globally available $t() method
    app.config.globalProperties.$t = translate;
  },
};

export default i18nPlugin;

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string) => string;
  }
}
