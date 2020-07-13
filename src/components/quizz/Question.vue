<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <div class="question">{{content}}</div>
      </div>
      <div class="card-back">
        <p>BACK</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.card {
  background-color: transparent;
  perspective: 1000px;
  height: 230px;
  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &-front {
    background-color: white;
    color: black;
  }
  &-back {
    box-sizing: border-box;
    background-color: #0c1131;
    border: 10px solid white;
    color: white;
    transform: rotateY(180deg);
  }
}

.card-rotated .card-inner {
  transform: rotateY(-180deg);
}

.question {
  color: black;
  font-weight: bold;
  font-size: 22px;
  padding: 50px 15px;
}
</style>
