<template>
  <div class="answer">
    <p>{{answer}}</p>
  </div>
</template>

<script>
export default {
  props: ["answer"]
};
</script>

<style scoped>
.answer {
  padding: 5px;
  background: white;
  color: black;
  margin: 5px 0;
}
.selected {
  background: lightblue;
}

.correct {
  background: greenyellow;
}

.incorrect {
  background: lightcoral;
}
</style>