<template>
  <div class="timer">
    <div class="timer-gauge" :style="{ width: timerPercent + '%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingMilliSeconds: this.milliseconds,
    };
  },
  props: { milliseconds: Number },
  watch: {
    remainingMilliSeconds: {
      handler(value) {
        if (value <= 0) {
          clearInterval(this.timerInterval);
          this.remainingMilliSeconds = 0;
          this.$emit("timeout", "Game Over");
        }
      },
      immediate: true,
    },
  },
  computed: {
    timerPercent: function () {
      return (this.remainingMilliSeconds / this.milliseconds) * 100;
    },
    timerClassObject: function () {
      return { high: this.timerPercent > 35, low: this.timerPercent <= 35 };
    },
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      this.remainingMilliSeconds -= 100;
    }, 100);
  },
};
</script>

<style lang='scss' scoped>
.timer {
  background: white;
  padding: 2px;
  margin-top: 12px;
  margin-bottom: 5px;
  border-radius: 7px;
  &-gauge {
    height: 16px;
    transition: width 0.1s ease;
    transition: background-color 5s ease;
    background-color: #0c1131;
    border-radius: 6px;
  }
}
</style>