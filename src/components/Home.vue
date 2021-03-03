<template>
  <div>
    <Header />
    <main class="mx-auto max-w-7xl px-4">
      <div class="mt-16 text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl"
        >
          Allez Bordeaux !!!
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Imaginé et développé par deux supporters des Girondins de Bordeaux ce
          quizz vous permettra de plonger dans l’histoire des marines et blancs.
          Chaque quizz dure 3 min et un score final vous permettra d’intégrer le
          classement général.
        </p>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <router-link to="/quizz">
              <Button :text="'Commencer'" :type="'full'" />
            </router-link>
          </div>
          <div class="rounded-md shadow ml-0 mt-3 sm:ml-3 sm:mt-0">
            <router-link to="/rankings">
              <Button :text="'Classement'" :type="'outline'" />
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";

export default {
  components: { Header, Button },
};
</script>

<style lang='scss' scoped>
</style>