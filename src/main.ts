import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18nPlugin from './i18n';

createApp(App).use(i18nPlugin).mount('#app');
