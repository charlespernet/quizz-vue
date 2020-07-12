<template>
  <div class="timer">
    <div class="timer-gauge" v-bind:style="{ width: timerPercent + '%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingSeconds: this.seconds
    };
  },
  props: { seconds: Number },
  watch: {
    remainingSeconds: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.remainingSeconds--;
          }, 1000);
        }
      },
      immediate: true
    }
  },
  computed: {
    timerPercent: function() {
      return (this.remainingSeconds / this.seconds) * 100;
    }
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
    background: greenyellow;
    height: 13px;
  }
}
</style>