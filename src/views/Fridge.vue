<style lang="scss">
@import "@/assets/scss/Fridge.scss";
</style>
<template>
  <div class="fridge">
    <div class="d-md-flex h-md-100 align-items-center">
      <!-- First Half -->

      <div class="col-md-6 p-0 bg-indigo h-md-100">
        <div
          class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center"
        >
          <div class="logoarea pt-5 pb-5">
            <div class="text">
              <h2 class="text-left text-to-change">Tell us what would</h2>
              <h5 class="text-left text-to-change">you like to eat...</h5>
              <br />
              <div id="app" class>
                <form class action>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control myInput"
                      placeholder="Ingredient"
                      v-model="ingredientText"
                      name
                      id
                      aria-describedby="basic-addon1"
                    />
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-success mb-2 add-button"
                        @click.prevent="addIngredient"
                        :disabled="ingredients.length == 3 || !ingredientText"
                      >Add</button>
                      <button
                        class="btn btn-dark mb-2"
                        v-if="ingredients.length > 0"
                        @click.prevent="deleteAll"
                      >Delete All</button>
                    </div>
                  </div>
                </form>
                <div
                  class="input-group mb-3 ingredients-list"
                  v-for="(ingredient, index) in ingredients"
                  :key="ingredient"
                >
                  <div class="form-control ingredient-box">{{ingredient.words}}</div>
                  <div class="input-group-append">
                    <span @click.stop="deleteIngredient(index)" class="form-control delete">Delete</span>
                  </div>
                </div>
                <button
                  class="btn btn-dark btn-lg btn-block"
                  @click="searchRecipe"
                  v-if="ingredients.length > 0"
                >Find my dish!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Second Half -->
      <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div class="d-md-flex align-items-center text-center h-md-100 p-5 justify-content-center">
          <div class="container">
            <div class="justif">
              <div class="row">
                <p class="firstp">...or just select cuisine</p>
              </div>
              <div class="row">
                <p class="seccondp">and we will do the rest!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 myCol">African</div>
              <div class="col-md-5 myCol">German</div>
              <div class="w-100"></div>
              <div class="col-md-5 myCol">Italian</div>
              <div class="col-md-5 myCol">Chinese</div>
            </div>
            <div class="row">
              <button class="fourth">Find a random recipe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { spoonacularApiKey } from "../spoonacular";

export default {
  name: "Fridge",
  data() {
    return {
      ingredients: [],
      ingredientText: ""
    };
  },
  methods: {
    addIngredient: function() {
      this.ingredients.push({
        words: this.ingredientText
      });
      this.ingredientText = "";
    },
    deleteIngredient: function(index) {
      this.ingredients.splice(index, 1);
    },
    deleteAll: function() {
      this.ingredients = [];
    },
    searchRecipe: function() {
      fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${spoonacularApiKey}&query=${this.ingredients}&number=8`
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setResults", {
            newResults: json.results
          });
          this.$router.push("/results");
        });
    }
  }
};
</script>