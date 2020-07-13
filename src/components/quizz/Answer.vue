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
  background: white;
  color: black;
  margin: 10px 0;
  font-weight: bold;
  font-size: 18px;
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