import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import ComponentID from 'vue-component-id';

createApp(App).use(ComponentID).use(i18n).use(store).use(router).mount("#app");
