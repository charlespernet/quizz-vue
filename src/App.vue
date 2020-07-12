<template>
  <div id="app">
    <Header />
    <Quizz />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Quizz from "./components/Quizz.vue";

export default {
  name: "App",
  components: {
    Header,
    Quizz
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 0;
}

body {
  background: #0c1131;
}
</style>
