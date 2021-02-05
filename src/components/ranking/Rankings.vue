<template>
  <div>
    <Header />
    <div v-if="loading" class="loading">Chargement...</div>
    <div class="container">
      <Ranking
        v-for="(ranking, index) in rankings"
        :key="ranking.fields.Score"
        :position="index + 1"
        :text="ranking.fields.Name"
        :score="ranking.fields.Score"
      />
    </div>
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
          "https://api.airtable.com/v0/app4WmGYrPS97vs2O/Results?&view=Grid%20view&sort%5B0%5D%5Bfield%5D=Score&sort%5B0%5D%5Bdirection%5D=desc",
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
.loading {
  padding-top: 100px;
  font-weight: bold;
  font-size: 2rem;
}
</style>