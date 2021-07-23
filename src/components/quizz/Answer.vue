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
  background: #0c1131;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  margin: 8px 0;
  font-weight: bold;
  font-size: 1.4rem;
  height: 18%;
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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