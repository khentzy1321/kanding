import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DengueInfo from "../views/dengue/DengueInfo.vue";
import DengueApplicationTracker from "../views/dengue/DengueApplicationTracker.vue";
import CreateNewCase from "../views/dengue/CreateNewCase.vue";
import Update from "../views/dengue/Update.vue";
import Delete from "../views/dengue/Delete.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/dengue-info",
      component: DengueInfo,
    },
    {
      path: "/dengue-info/:id",
      name: "view-dengue-tracker",
      component: DengueApplicationTracker,
      props: true,
    },
    {
      path: "/dengue-info/edit/:id",
      name: "view-dengue-tracker-edit",
      component: Update,
      props: true,
    },
    {
      path: "/dengue-info-delete/:id",
      name: "view-dengue-tracker-delete",
      component: Delete,
      props: true,
    },
    {
      path: "/create-new-case",
      component: CreateNewCase,
    },
  ],
});

export default router;
