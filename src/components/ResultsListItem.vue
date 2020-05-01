<template>
  <div class="results-list-item">
    <div class="results-list-item__image">
      <img alt="recipe" :src="imageLink" />
    </div>
    <div class="results-list-item__title">{{ title }}</div>
    <div class="results-list-item__description">Ready in: {{ readyInMinutes }} mins</div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/ResultsListItem.scss";
</style>

<script>
export default {
  name: "ResultsListItem",
  props: {
    id: Number,
    image: String,
    title: String,
    readyInMinutes: String
  },
  computed: {
    imageLink: function() {
      return `https://spoonacular.com/recipeImages/${this.id}-312x231.jpg`;
    }
  }
};
</script>
