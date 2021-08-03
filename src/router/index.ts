import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Tab1 from "../views/Tab1.vue";
import Tab3 from "../views/Tab3.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/home/tab_1",
        name: "Tab 1",
        component: Tab1,
      },
      {
        path: "/home/tab_3",
        name: "Tab 3",
        component: Tab3,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
