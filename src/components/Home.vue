<template>
  <div>
    <main class="mx-auto max-w-7xl px-4">
      <div class="mt-8 text-center">
        <div class="logo">
          <img src="../images/logo.svg" />
        </div>
        <p
          class="
            max-w-md
            mx-auto
            text-base text-gray-200
            md:mt-5
            text-xl
            md:max-w-3xl
            font-medium
            leading-6
          "
        >
          Imaginé et développé par deux fans de football, Quizz Foot vous permet
          de passer un bon moment en testant vos connaissances. Chaque quizz
          dure 3 min et un score final vous permettra d'intégrer le classement
          général.
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
import Button from "./Button.vue";

export default {
  components: { Button },
};
</script>

<style lang='scss' scoped>
.logo {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
}
</style>