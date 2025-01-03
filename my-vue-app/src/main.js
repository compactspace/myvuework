import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';



//주의 해라 이는 핀야로 저장한걸 마치 세션처럼 저장해준다.
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { VueQueryPlugin } from '@tanstack/vue-query';
import VueAwesomePaginate from 'vue-awesome-paginate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
createApp(App)
.use(VueQueryPlugin)
.use(pinia)
.use(router)
.use(VueAwesomePaginate)
.mount('#app');