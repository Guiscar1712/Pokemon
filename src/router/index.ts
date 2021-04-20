import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Pokemon from "../views/Pokemon.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Pokemon",
    component: Pokemon,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
