import { createApp } from 'vue';
import MainApp from './MainApp.vue';
import naive from "naive-ui";

createApp(MainApp)
    .use(naive)
    .mount('#app');
