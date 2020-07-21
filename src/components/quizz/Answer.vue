<template>
  <div class="answer" @click="onClick">
    <p>{{answer}}</p>
  </div>
</template>

<script>
export default {
  props: { answer: String, index: Number },
  methods: {
    onClick() {
      this.$emit("select", { index: this.index });
    }
  }
};
</script>

<style scoped>
.answer {
  padding: 1px;
  background: #0c1131;
  border: 2px solid white;
  color: white;
  margin: 10px 0;
  font-weight: bold;
  font-size: 18px;
}
.selected {
  background: lightblue;
}

.correct {
  background: green;
}

.incorrect {
  background: orangered;
}
</style>