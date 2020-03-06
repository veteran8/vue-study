import Vue from "vue";
import App from "./App.vue";
import Toast from './components/Toast';

Vue.config.productionTip = false;
console.log(Toast,111);
Vue.prototype.$toast = Toast

new Vue({
  render: h => h(App)
}).$mount("#app");
