<template>
  <div class="ranking">
    <div class="ranking-position">{{position}}</div>
    <div class="ranking-text">{{text}}</div>
    <div class="ranking-score">{{score}} Pts</div>
  </div>
</template>

<script>
export default {
  props: { position: Number, text: String, score: Number },
};
</script>

<style lang='scss' scoped>
.ranking {
  background: #ffffff;
  border-radius: 100px;
  margin: 10px;
  position: relative;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 22px;
  &-position {
    color: white;
    background: #0c1131;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: -7px;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &-text {
    color: black;
    margin-left: 55px;
  }
  &-score {
    color: white;
    background: #0c1131;
    width: 80px;
    border-radius: 100px;
  }
}
</style>