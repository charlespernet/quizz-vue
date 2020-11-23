<template>
  <main class="mx-auto max-w-7xl px-4">
    <Header />
    <div class="mt-16 text-center">
      <h1 class="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl">
        Allez Bordeaux !!!
      </h1>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>

      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <Button
            :text="'Commencer'"
            :type="'full'"
          />
        </div>
        <div class="rounded-md shadow ml-0 mt-3 sm:ml-3 sm:mt-0">
          <Button
            :text="'Classement'"
            :type="'outline'"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";

export default {
  components: { Header, Button },
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
    top: -3px;
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