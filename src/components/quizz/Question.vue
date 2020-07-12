<template>
  <div>
    <div class="card">
      <div class="score">{{score}} pts</div>
      <div class="question">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    score: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.card {
  background: #ffffff;
  border-radius: 6px;
}

.score {
  background: #0c1131;
  color: #ffffff;
  font-weight: bold;
  font-size: 22px;
  position: relative;
  top: 0px;
  margin: 0 20%;
  border-radius: 0 0 10px 10px;
  padding: 10px 25px;
}

.question {
  color: black;
  font-weight: bold;
  font-size: 22px;
  padding: 50px 15px;
  height: 170px;
}
</style>
