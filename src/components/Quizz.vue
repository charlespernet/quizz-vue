<template>
  <div v-if="currentQuestion">
    <Question :score="score" :content="currentQuestion.content" />
    <Timer :milliseconds="milliseconds" @timeout="timeout" />
    <transition-group
      name="questions"
      tag="div"
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__backOutLeft"
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
      currentIndex: 0,
      score: 0,
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      frozen: false
    };
  },
  computed: {
    currentQuestion: function() {
      return this.questions[this.currentIndex];
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
        this.correctIndex = null;
        this.shuffleAnswers();
        this.frozen = false;
      }
    }
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
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
    },
    timeout() {
      this.frozen = true;
    },
    answerClassObject(index) {
      return {
        selected: this.selectedIndex === index,
        correct: this.frozen && this.correctIndex === index,
        incorrect:
          this.frozen &&
          this.selectedIndex === index &&
          this.correctIndex !== null &&
          this.correctIndex !== index
      };
    }
  }
};
</script>

<style scoped>
/* .questions-enter-active,
  .questions-leave-active {
    transition: all 0.5s;
  }
  .questions-enter,
  .questions-leave-to {
    opacity: 0;
  } */
</style>
