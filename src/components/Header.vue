<template>
  <div class="header">
    <router-link to="/">
      <img
        class="ml-4 w-2/3 md:ml-12 md:w-48 lg:ml-40"
        src="../images/logo.svg"
      />
    </router-link>
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
  margin-bottom: 15px;
  .score {
    padding: 0px 60px;
    font-size: 18px;
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
