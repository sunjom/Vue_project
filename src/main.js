import { createApp } from 'vue'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import FriendContact from './components/FriendContract.vue';
import firstPage from './components/firstPage.vue';
import router from './router'
const app = createApp(App).use(router);

app.component("friend-contact",FriendContact);
app.component("login-page",firstPage);
app.mount('#app')
