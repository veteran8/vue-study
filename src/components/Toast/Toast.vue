<template>
  <div class="toastPage" v-if="isShow">{{message}}</div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    test() {
      console.log(66666);
    }
  },
  mounted() {
    console.log(this,'this');
    setTimeout(() => {
      this.isShow = false;
    }, 3000);
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/var.scss";
.toastPage {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14 * $px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4 * $px;
  padding: 10 * $px;
  white-space: nowrap;
  animation: show 3s forwards ease-in;
  z-index: 9999;

  @keyframes show {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
}
</style>

