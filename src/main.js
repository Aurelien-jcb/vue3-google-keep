import '@/assets/main.css'
import store from '@/store/index'
import { createApp } from 'vue'
import App from '@/App.vue'
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App).use(VueQueryPlugin).use(store).mount("#app");
