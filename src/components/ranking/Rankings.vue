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
      console.log(process.env);
      this.loading = true;
      axios({
        url:
          "https://api.airtable.com/v0/app4WmGYrPS97vs2O/Results?maxRecords=3&view=Grid%20view",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_API_KEY}`,
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