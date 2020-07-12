<template>
  <div class="timer">
    <div class="timer-gauge" v-bind:style="{ width: timerPercent + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: { timerPercent: Number }
};
</script>

<style lang='scss' scoped>
.timer {
  background: white;
  padding: 5px;
  margin: 10px 0;
  border-radius: 6px;
  &-gauge {
    background: greenyellow;
    height: 20px;
  }
}
</style>