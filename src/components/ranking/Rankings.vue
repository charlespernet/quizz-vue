<template>
  <div>
    <Header />
    <Ranking
      v-for="(ranking, index) in rankings"
      :key="ranking.score"
      :position="index + 1"
      :text="ranking.name"
      :score="ranking.score"
    />
  </div>
</template>

<script>
import Header from "../Header.vue";
import Ranking from "./Ranking.vue";
import rankings from "../../data/rankings.json";
export default {
  components: { Header, Ranking },
  data() {
    return { rankings: rankings };
  },
};
</script>

<style lang='scss' scoped>
</style>