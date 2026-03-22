import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

import * as blogApi from "./api/blog";
blogApi.getBlogTypes().then((r) => {
  console.log(r);
});
blogApi.getBlogs(2, 10, 3).then((r) => {
  console.log(r);
})