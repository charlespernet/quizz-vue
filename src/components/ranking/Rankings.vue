<template>
  <div>
    <Header />
    <div v-if="loading" class="loading">Loading...</div>
    <Ranking
      v-for="(ranking, index) in rankings"
      :key="ranking.fields.Score"
      :position="index + 1"
      :text="ranking.fields.Name"
      :score="ranking.fields.Score"
    />
    <div id="boby">{{ rankings }}</div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import Ranking from "./Ranking.vue";
import axios from "axios";

export default {
  components: { Header, Ranking },
  data() {
    return {
      loading: false,
      rankings: [],
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios({
        url:
          "https://api.airtable.com/v0/app4WmGYrPS97vs2O/Results?maxRecords=3&view=Grid%20view",
        headers: {
          Authorization: "Bearer keyb9cEx4MPbw7V3x",
        },
      }).then((res) => {
        this.loading = false;
        this.rankings = res.data.records;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>