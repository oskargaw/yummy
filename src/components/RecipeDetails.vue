<template>
  <div>Recipe details</div>
</template>

<script>
import { spoonacularApiKey } from "../spoonacular";

export default {
  name: "RecipeDetails",
  props: ["receivedRecipeDetailsId"],
  mounted() {
    this.receivedRecipeDetailsId = this.$store.state.recipeDetailsId;

    fetch(
      `https://api.spoonacular.com/recipes/${this.receivedRecipeDetailsId}/information?apiKey=${spoonacularApiKey}&includeNutrition=true`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }
};
</script>
