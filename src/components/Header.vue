<template>
  <div class="header container">
    <div class="logo">
      <router-link to="/">
        <img src="../images/logo.svg" />
      </router-link>
    </div>
    <div class="score">
      <span class="score-number">{{ score }}</span>
      <span v-if="Number.isInteger(score)" class="score-text">Pts</span>
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
  align-items: center;
  .logo {
    width: 130px;
  }
  .score {
    flex: 2;
    font-size: 18px;
    text-align: right;
    padding: 0 20px;
    &-number {
      font-size: 50px;
      margin-right: 5px;
      font-weight: bold;
    }
    &-text {
      font-weight: bold;
      font-size: 30px;
    }
  }
}
</style>
