import ToastComponent from "./Toast.vue";
import Vue from "vue";

const Toast = message => {
  const ToastConstructor = Vue.extend(ToastComponent);
  const ToastInstance = new ToastConstructor({
    el: document.createElement("div"),
    data() {
      return {
        isShow: true,
        message
      };
    }
  });
  document.body.appendChild(ToastInstance.$el);
};
export default Toast