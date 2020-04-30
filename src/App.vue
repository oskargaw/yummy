<template>
  <div id="app">
    <div id="nav" class="navbar">
      <router-link class="navbar-brand" to="/">
        <img alt="logo" src="./assets/logo_transparent.png" id="logo" />
      </router-link>
      <label for="toggle" id="hamburger">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <ul class="nav justify-content-end">
        <router-link class="nav-link divider" to="/">
          <li class="nav-item">Home</li>
        </router-link>
        <router-link class="nav-link divider" to="/fridge">
          <li class="nav-item">Fridge</li>
        </router-link>
        <router-link class="nav-link divider" to="/login">
          <li class="nav-item">Login</li>
        </router-link>
        <router-link class="nav-link divider" to="/signup">
          <li class="nav-item">Sign up</li>
        </router-link>
        <img alt="logo" src="./assets/logo_transparent.png" id="logo-bottom" />
      </ul>
    </div>

    <div>
      <input type="text" v-model="newRecipe" @keyup.enter="addRecipe" />
      <button @click="addRecipe">Add Recipe</button>
    </div>

    <ul>
      <li v-for="recipe in recipes" :key="recipe">
        {{ recipe.name }} -
        <button @click="deleteRecipe(recipe)">Remove</button>
      </li>
    </ul>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      recipes: [],
      newRecipe: "",
    };
  },
  firestore() {
    return {
      recipes: db.collection("recipes"),
    };
  },
  methods: {
    addRecipe: function() {
      this.$firestore.recipes.add({
        name: this.newRecipe,
      });
      this.newRecipe = "";
    },
    deleteRecipe: function(recipe) {
      this.$firestore.recipes.doc(recipe[".key"]).delete();
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/App.scss";
</style>
