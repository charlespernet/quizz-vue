<template>
  <div class="card-container">
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <div class="question">{{ content }}</div>
        </div>
        <div class="card-back">
          <img src="../../images/logo.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.card-container {
  height: 40%;
  min-height: 230px;
}
.card {
  background-color: transparent;
  perspective: 1000px;
  height: 100%;
  &-inner {
    position: relative;
    width: 100%;
    height: inherit;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: inherit;
    backface-visibility: hidden;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
  }
  &-front {
    border: 2px solid white;
    background-color: #0c1131;
    color: white;
    justify-content: space-around;
  }
  &-back {
    background-color: #0c1131;
    border: 2px solid white;
    color: white;
    transform: rotateY(180deg);
  }
}

.card-rotated .card-inner {
  transform: rotateY(-180deg);
}

.question {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 5px 25px;
  display: flex;
  line-height: 1.5rem;
  flex-direction: column;
  justify-content: space-around;
}
</style>
