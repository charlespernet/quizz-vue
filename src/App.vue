<template>
  <div id="app">
    <Header />
    <Quizz :questions="questions" :milliseconds="milliseconds" />
  </div>
</template>

<script>
import questions from "./data/questions.json";

import Header from "./components/Header.vue";
import Quizz from "./components/Quizz.vue";

export default {
  name: "App",
  components: {
    Header,
    Quizz
  },
  data() {
    return { questions: questions, milliseconds: 10000 };
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css");

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
