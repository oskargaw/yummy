<template>
  <div class="results-list-item" @click="showRecipeDetails">
    <div class="results-list-item__image">
      <img alt="recipe" :src="imageLink" />
    </div>
    <div class="results-list-item__title">{{ title }}</div>
    <div
      class="results-list-item__description"
      v-show="readyInMinutes != null"
    >Ready in: {{ readyInMinutes }} mins</div>
  </div>
</template>

<style scoped lang="scss">
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
  },
  methods: {
    showRecipeDetails: function() {
      this.$store.commit("setRecipeDetailsId", {
        selectedRecipeId: this.id
      });
      this.$router.push("/recipe");
    }
  }
};
</script>
