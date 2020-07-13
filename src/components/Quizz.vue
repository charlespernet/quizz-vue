<template>
  <div v-if="currentQuestion">
    <Question :score="score" :content="currentQuestion.content" />
    <Timer :milliseconds="milliseconds" @timeout="timeout" />
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__backInLeft"
      appear
    >
      <div v-for="(answer, index) in shuffledAnswers" :key="index">
        <div @click="selectAnswer(index)">
          <Answer :answer="answer" :key="index" :class="answerClassObject(index)" />
        </div>
      </div>
    </transition-group>
  </div>
  <div v-else>
    <Question :score="score" :content="'plus de questions'" />
  </div>
</template>

<script>
import _ from "lodash";

import Question from "./quizz/Question.vue";
import Timer from "./quizz/Timer.vue";
import Answer from "./quizz/Answer.vue";

export default {
  props: {
    questions: Array,
    milliseconds: Number
  },
  data() {
    return {
      index: 0,
      score: 0,
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      frozen: false
    };
  },
  computed: {
    currentQuestion: function() {
      return this.questions[this.index];
    }
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
        this.shuffleAnswers();
        this.frozen = false;
      }
    }
  },
  methods: {
    selectAnswer(index) {
      if (this.frozen) return;

      this.selectedIndex = index;
      _.delay(() => {
        this.frozen = true;
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
      this.index++;
    },
    shuffleAnswers() {
      if (!this.currentQuestion) return;
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
    },
    timeout() {
      this.frozen = true;
    },
    answerClassObject(index) {
      return {
        selected: !this.frozen && this.selectedIndex === index,
        correct: this.frozen && this.correctIndex === index,
        incorrect:
          this.frozen &&
          this.selectedIndex === index &&
          this.correctIndex !== index
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
