import { createWebHistory, createRouter } from "vue-router";
import userPage from "./components/userPage.vue";
import firstPage from "./components/firstPage.vue";
const routes = [
  {
    path: "/user/:Id/:Net/:Time",
    component: userPage,
  },
  {
    path:"/",
    component:firstPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;