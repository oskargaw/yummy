<template>
  <div id="app">
    <div id="nav" class="navbar">
      <router-link class="navbar-brand" to="/">
        <img alt="logo" src="./assets/logo_transparent.png" id="logo" />
      </router-link>
        <label for="toggle" id="hamburger">&#9776;</label>
        <input type="checkbox" id="toggle" />
      <ul class="nav justify-content-end">
        <router-link class="nav-link divider" to="/"><li class="nav-item">Home</li></router-link>
        <router-link class="nav-link divider" to="/fridge"><li class="nav-item">Fridge</li></router-link>
        <router-link class="nav-link divider" to="/login"><li class="nav-item">Login</li></router-link>
        <router-link class="nav-link divider" to="/signup"><li class="nav-item">Sign up</li></router-link>
        <img alt="logo" src="./assets/logo_transparent.png" id="logo-bottom" />
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/assets/scss/App.scss';
</style>