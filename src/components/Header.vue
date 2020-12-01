<template>
  <div class="header">
    <img src="../images/logo.svg" />
    <div class="score">
      <span class="score-number">{{score}}</span>
      <span v-if="score" class="score-text">points</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .score {
    padding: 25px 60px 0px;
    font-size: 18px;
    &-number {
      font-size: 42px;
      margin-right: 5px;
    }
  }
  img {
    width: 30%;
  }
}
</style>
