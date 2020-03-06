import ToastComponent from "./Toast.vue";

const Toast = {};
Toast.install = function(Vue) {
  const ToastConstructor = Vue.extend(ToastComponent);
  const ToastInstance = new ToastConstructor();
  ToastInstance.$mount(document.createElement("div"));
  document.body.appendChild(ToastInstance.$el);
  Vue.prototype.$toast = message => {
    console.log(message);
    ToastInstance.isShow = true
    ToastInstance.message = message;
  };
};

export default Toast;
