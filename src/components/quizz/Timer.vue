<template>
  <div class="timer">
    <div class="timer-gauge" :style="{ width: timerPercent + '%' }" :class="timerClassObject"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingMilliSeconds: this.milliseconds
    };
  },
  props: { milliseconds: Number },
  watch: {
    remainingMilliSeconds: {
      handler(value) {
        console.log(value);
        if (value <= 0) {
          clearInterval(this.timerInterval);
          this.remainingMilliSeconds = 0;
          this.$emit("timeout", "someValue");
        }
      },
      immediate: true
    }
  },
  computed: {
    timerPercent: function() {
      return (this.remainingMilliSeconds / this.milliseconds) * 100;
    },
    timerClassObject: function() {
      return { high: this.timerPercent > 35, low: this.timerPercent <= 35 };
    }
  },
  mounted() {
    this.timerInterval = setInterval(() => {
      this.remainingMilliSeconds -= 100;
    }, 100);
  }
};
</script>

<style lang='scss' scoped>
.timer {
  background: white;
  padding: 3px;
  margin: 10px 0;
  border-radius: 6px;
  &-gauge {
    height: 13px;
    transition: width 0.1s ease;
    transition: background-color 5s ease;
  }
  .high {
    background-color: greenyellow;
  }
  .low {
    background-color: red;
  }
}
</style>