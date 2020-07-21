<template>
  <div id="app">
    <Quizz :questions="questions" :milliseconds="milliseconds" />
  </div>
</template>

<script>
import questions from "./data/questions.json";

import Quizz from "./components/Quizz.vue";

export default {
  name: "App",
  components: {
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
}

body {
  background: #0c1131;
  margin: 0;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
