import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routes';
import { titleController } from "@/utils";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.afterEach((to, from) => {
  if (to.meta) {
    titleController.setRouterTitle(to.meta.title);
  }
});

export default router;