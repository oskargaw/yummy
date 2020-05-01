<template>
  <div class="results-list">
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
    <ResultsListItem />
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/ResultsList.scss";
</style>

<script>
// @ is an alias to /src
import ResultsListItem from "@/components/ResultsListItem.vue";

export default {
  name: "ResultsList",
  components: {
    ResultsListItem
  }
};
</script>
