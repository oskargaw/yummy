<template>
  <div class="home">
    <div id="up" class="text-bold">The only thing...</div>
    <img src="../assets/burger.jpg" id="burger" />
    <div class="has-search">
      <input
        type="text"
        v-model="recipePreferences"
        @keyup.enter="searchRecipe"
        class="search"
        placeholder="Search"
      />
      <button class="lens" @click="searchRecipe">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <div id="like" class="text-bold">I like</div>
    <div id="better">better than talking</div>
    <div id="about">about food</div>
    <div id="eating" class="text-bold">is eating</div>
    <div id="everyone">~ literally everyone</div>
    <div class="quote">
      <div class="quote__text">{{ quote.text }}</div>
      <div class="quote__author" v-show="quote.author != null">{{ quote.author }}</div>
    </div>
  </div>
</template>

<script>
import { spoonacularApiKey } from "../spoonacular";

export default {
  name: "home",
  data() {
    return {
      recipePreferences: "",
      quote: {}
    };
  },
  mounted() {
    const min = 0;
    const max = 1000;

    const randomQuoteIndex = Math.floor(Math.random() * (max - min)) + min;

    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data[randomQuoteIndex]);
        this.quote = data[randomQuoteIndex];
      });
  },
  methods: {
    searchRecipe: function() {
      fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${spoonacularApiKey}&query=${this.recipePreferences}&number=8`
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

<style scoped lang="scss">
@import "@/assets/scss/Home.scss";
</style>