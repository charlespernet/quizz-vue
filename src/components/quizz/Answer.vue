<template>
  <div class="answer" @click="onClick">
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  props: { answer: String, index: Number },
  methods: {
    onClick() {
      this.$emit("select", { index: this.index });
    },
  },
};
</script>

<style scoped>
.answer {
  padding: 10px;
  background: #0c1131;
  border: 2px solid white;
  border-radius: 7px;
  color: white;
  margin: 10px 0;
  font-weight: bold;
  font-size: 25px;
}
.selected {
  background: lightblue;
}

.correct {
  background: #12b981;
}

.incorrect {
  background: #f82a09;
}
</style>