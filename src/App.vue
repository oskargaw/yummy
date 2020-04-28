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
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  transition: ease-in-out 0.3s;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  background-color: white;
  z-index: 101;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: #E8E8E8 solid 1px;
  padding: 0px 5%;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #29CDB5;
    }
  }
}

@media only screen and (min-width: 680px) {
  #nav {
    height: 90px;
  }
  #logo {
    height: 72px; 
    padding: 0px;
  }
  #hamburger {
    display: none;
  }
  #toggle {
    display: none;
  }
  #logo-bottom {
    display: none;
  }
}


@media only screen and (max-width: 679px){
  #nav {
    height: 60px;
    
    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: white;
      top: 60px;
      right: -100%;
      text-align: center;
      display: block;
      transition: all .5s;
    }
    li {
      padding: 10px;
    }
    .divider {
      border-bottom: #E8E8E8 solid 1px;
    }
  }
  #logo {
    height: 40px; 
    padding: 0px;
  }
  #hamburger {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
  #toggle {
    display: none;
  }
  #logo-bottom {
    height: 120px;
    position: fixed;
    bottom: 60px;
    transform: translate(-50%, 0);
  }
  #toggle:checked + ul{
    right: 0;
  }
}
@media only screen and (max-height: 580px) {
  #logo-bottom {
    height: 90px;
    bottom: 30px;
  }
}
@media only screen and (max-width: 199px) {
  #logo-bottom {
    display: none;
  }
}
@media only screen and (max-height: 500px) {
  #logo-bottom {
    display: none;
  }
}
</style>
