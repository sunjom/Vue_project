import { createApp } from 'vue'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import FriendContact from './components/FriendContract.vue';
import firstPage from './components/firstPage.vue';
import router from './router'
import axios from "axios";
const app = createApp(App).use(router).use(axios);

app.component("friend-contact",FriendContact);
app.component("login-page",firstPage);
app.config.globalProperties.$axios = axios;
app.mount('#app')