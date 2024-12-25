import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';

import { VueQueryPlugin } from '@tanstack/vue-query';
import VueAwesomePaginate from 'vue-awesome-paginate';
const pinia = createPinia();
createApp(App)
.use(VueQueryPlugin)
.use(pinia)
.use(router)
.use(VueAwesomePaginate)
.mount('#app');