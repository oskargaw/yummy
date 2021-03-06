<template>
  <div class="recipe-details">
    <div class="first-row">
      <div class="recipe-details__info">
        <div class="row-title">{{ recipeTitle }}</div>
        <button @click="addToFavourites" class="recipe-details__info-button">Add to favourites</button>
        <div class="recipe-details__info-general">
          <div class="recipe-details__info-general-item">
            <div class="recipe-details__info-general-item--first-row">{{ ingredientsNumber }}</div>
            <div class="recipe-details__info-general-item--second-row">Ingredients</div>
          </div>
          <div class="recipe-details__info-general-item">
            <div class="recipe-details__info-general-item--first-row">{{ readyInMinutes }}</div>
            <div class="recipe-details__info-general-item--second-row">Minutes</div>
          </div>
          <div class="recipe-details__info-general-item">
            <div class="recipe-details__info-general-item--first-row">{{ calories }}</div>
            <div class="recipe-details__info-general-item--second-row">Calories</div>
          </div>
        </div>
      </div>
      <div class="recipe-details__image">
        <img :alt="recipeTitle" :src="image" />
      </div>
    </div>

    <hr class="horizontal-line" />

    <div class="second-row">
      <div class="row-title">Ingredients</div>
      <ul class="second-row__list">
        <li class="second-row__list-item" v-for="ingredient in ingredients" :key="ingredient">
          <b>{{ ingredient.name }}</b>
          - {{ ingredient.amount }} {{ ingredient.unit }}
        </li>
      </ul>
    </div>

    <hr class="horizontal-line" v-show="instructions != null" />

    <div class="third-row" v-show="instructions != null">
      <div class="row-title">Instructions</div>
      <div class="third-row__instructions">
        <p>{{ instructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/RecipeDetails.scss";
</style>

<script>
import { spoonacularApiKey } from "../spoonacular";
import { auth } from "../firebase"
import { db } from "../firebase"

export default {
  name: "RecipeDetails",
  props: ["receivedRecipeDetailsId"],
  data() {
    return {
      recipeTitle: "",
      ingredientsNumber: null,
      readyInMinutes: null,
      calories: null,
      image: "",
      ingredients: [],
      instructions: "",
    };
  },
  methods: {
    addToFavourites: function() {
      db.collection('usersData').doc(auth.currentUser.uid).collection('favourites').doc(this.recipeTitle).set({
        recipeId: this.receivedRecipeDetailsId,
        recipeTitle: this.recipeTitle,
        readyInMinutes: this.readyInMinutes
      })
    }
  },
  mounted() {
    this.receivedRecipeDetailsId = this.$store.state.recipeDetailsId;

    fetch(
      `https://api.spoonacular.com/recipes/${this.receivedRecipeDetailsId}/information?apiKey=${spoonacularApiKey}&includeNutrition=true`
    )
      .then(response => response.json())
      .then(json => {
        this.recipeTitle = json.title;
        this.ingredientsNumber = json.nutrition.ingredients.length;
        this.readyInMinutes = json.readyInMinutes;
        this.calories = Math.trunc(json.nutrition.nutrients[0].amount);
        this.image = json.image;
        this.ingredients = json.nutrition.ingredients;
        this.summary = json.summary;
        this.instructions = json.instructions;
      });
  },
};
</script>
