<template>
  <div>
    <Header :score="score" />
    <div class="container">
      <div v-if="currentQuestion" class="quizz">
        <Question
          :content="currentQuestion.content"
          :class="{ 'card-rotated': frozen }"
        />
        <Timer :milliseconds="milliseconds" @timeout="timeout" />
        <transition-group
          name="answers"
          tag="div"
          class="answers"
          enter-active-class="animate__animated animate__backInRight"
          appear
        >
          <Answer
            v-for="(answer, index) in shuffledAnswers"
            :answer="answer"
            :key="`${currentIndex}#${index}`"
            :index="index"
            @select="selectAnswer"
            :class="answerClassObject(index)"
            mode="out-in"
          />
        </transition-group>
      </div>
      <div v-else>
        <Question :score="score" :content="'plus de question'" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import Header from "./Header.vue";
import Question from "./quizz/Question.vue";
import Timer from "./quizz/Timer.vue";
import Answer from "./quizz/Answer.vue";

import questions from "../data/questions.json";

export default {
  data() {
    return {
      currentIndex: 0,
      score: 0,
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      frozen: false,
      questions: _.shuffle(questions),
      milliseconds: 180000,
    };
  },
  mounted() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      document.documentElement.requestFullscreen();
    }
  },
  computed: {
    currentQuestion: function () {
      return this.questions[this.currentIndex];
    },
  },
  components: {
    Header,
    Question,
    Timer,
    Answer,
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.shuffleAnswers();
        this.frozen = false;
      },
    },
  },
  methods: {
    selectAnswer(event) {
      if (this.frozen) return;
      this.frozen = true;

      this.selectedIndex = event.index;
      _.delay(() => {
        this.submitAnswer();
      }, 400);
      _.delay(() => {
        this.next();
      }, 1300);
    },
    submitAnswer() {
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
      if (this.selectedIndex === this.correctIndex) {
        this.score++;
      }
    },
    next() {
      this.currentIndex++;
    },
    shuffleAnswers() {
      if (!this.currentQuestion) return;
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
    },
    timeout() {
      this.frozen = true;
      this.$router.push({ name: "entry", params: { score: this.score } });
    },
    answerClassObject(index) {
      return {
        selected: this.selectedIndex === index,
        correct: this.frozen && this.correctIndex === index,
        incorrect:
          this.frozen &&
          this.selectedIndex === index &&
          this.correctIndex !== null &&
          this.correctIndex !== index,
      };
    },
  },
};
</script>

<style scoped>
.quizz {
  display: flex;
  flex-direction: column;
  height: 85vh;
}
</style>