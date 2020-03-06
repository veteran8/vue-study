import Vue from "vue";
import App from "./App.vue";
import HelloWorld from "@/components/HelloWorld";

Vue.component("HelloWorld", HelloWorld);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
