import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
const pinia = createPinia();
createApp(App)
.use(VueQueryPlugin)
.use(pinia)
.use(router)
.mount('#app');