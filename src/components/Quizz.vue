<template>
  <div>
    <Question v-if="questions.length" :score="score" :currentQuestion="questions[index]" />
    <Timer :timerPercent="timerPercent" />
    <div v-for="(answer, index) in answers" :key="index">
      <div @click="selectAnswer(index)">
        <Answer :answer="answer" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./quizz/Question.vue";
import Timer from "./quizz/Timer.vue";
import Answer from "./quizz/Answer.vue";
export default {
  data() {
    return {
      questions: ["le roi lion ?", "la petite sirène ?"],
      index: 0,
      score: 0,
      answeredCount: 0,
      answered: false,
      answers: ["rep1", "rep2", "rep3", "rep4"],
      selectedIndex: null,
      timerPercent: 50
    };
  },
  components: {
    Question,
    Timer,
    Answer
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
