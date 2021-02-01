<template>
  <div>
    <Header />
    <main class="mx-auto max-w-7xl px-4">
      <div class="mt-16 text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl"
        >
          Mais qui est ce champion ?
        </h1>
        <p>Ton score : {{ score }} points</p>
        <p
          class="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Entrez votre nom et faites enfin savoir au monde entier qui est le
          vrai supporter des Girondins de Bordeaux.
        </p>
        <form class="mt-8 sm:flex justify-center text-gray-700">
          <label for="name" class="sr-only">Nom</label>
          <input
            id="name"
            type="name"
            required
            class="w-full px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300"
            placeholder="Nom"
          />
          <label for="emailAddress" class="sr-only">Adresse Email</label>
          <input
            id="emailAddress"
            type="email"
            required
            class="mt-3 sm:mt-0 sm:ml-3 w-full px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300"
            placeholder="Adresse email"
          />
          <div class="mt-3 sm:mt-0 sm:ml-3 shadow sm:flex-shrink-0">
            <Button v-if="loading" :text="'Envoi...'" :type="'full'" />
            <Button
              v-else
              :text="'Envoyer'"
              :type="'full'"
              @click.native="postScore"
            />
          </div>
        </form>
        <p class="mt-3 text-sm text-blue-200">
          En soumettant ces données vous confirmez avoir pris connaissance de
          notre
          <a href="#" class="text-white font-medium underline">
            Politique de confidentialité.
          </a>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";

export default {
  components: { Header, Button },
  props: ["score"],
  data() {
    return {
      error: null,
      loading: false,
    };
  },
  methods: {
    postScore() {
      this.loading = true;
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
