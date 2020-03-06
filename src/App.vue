<template>
  <div id="App">
    <button @click="showToast">test global component</button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  methods: {
    showToast() {
      this.$toast('hhhhh')
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
