<template>
  <div>
    <Header />
    <main class="mx-auto max-w-7xl px-4">
      <div v-if="errors.length" class='errors-container'>
        <p>
          <b>Vous devez corriger les erreurs suivantes</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index+1">{{ error }}</li>
          </ul>
        </p>
      </div>
      <div class="mt-4 text-center">
        <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">Bravo !</h1>
        <p class="text-4xl font-extrabold sm:text-5xl md:text-6xl">{{ score }} points</p>
        <p
          class="mt-3 max-w-md mx-auto sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          Entrez votre nom et intégrez le classement des meilleurs supporters des Girondins de Bordeaux.
        </p>
        <form class="mt-8 sm:flex justify-center text-gray-700">
          <label for="name" class="sr-only">Nom</label>
          <input
            id="name"
            type="name"
            required
            class="w-full px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300"
            placeholder="Nom"
            v-model="name"
          />
          <label for="emailAddress" class="sr-only">Adresse Email</label>
          <input
            id="emailAddress"
            type="email"
            required
            class="mt-3 sm:mt-0 sm:ml-3 w-full px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300"
            placeholder="Adresse email"
            v-model="email"
          />
          <div class="mt-3 sm:mt-0 sm:ml-3 shadow sm:flex-shrink-0">
            <Button v-if="loading" :text="'Envoi...'" :type="'full'" />
            <Button
              v-else
              :text="'Envoyer'"
              :type="'full'"
              @click.native="submit"
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
import Airtable from "airtable";

export default {
  components: { Header, Button },
  props: ["score"],
  data() {
    return {
      errors: [],
      loading: false,
      name: null,
      email: null,
    };
  },
  created() {
    if (!Number.isInteger(this.score)) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    postScore() {
      this.loading = true;

      const base = new Airtable({
        apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
      }).base("app4WmGYrPS97vs2O");

      base("Results").create(
        [
          {
            fields: {
              Score: this.score,
              Name: this.name,
              Email: this.email,
            },
          },
        ],
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          this.loading = false;
          this.$router.push({ name: "rankings" });
        }
      );
    },
    checkForm() {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Votre nom est requis.");
      }
      if (!this.email) {
        this.errors.push("Votre e-mail est requis.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Cet email n'est pas valide.");
      }
    },
    validEmail(email) {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    submit() {
      this.checkForm();
      if (!this.errors.length) {
        this.postScore();
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.errors-container {
  background: red;
  color: white;
}
</style>
