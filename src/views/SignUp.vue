<style scoped lang="scss">
@import "@/assets/scss/Login.scss";
</style>
<template>
  <div class="signup">
    <img class="wave" src="@/assets/wave.png" />
    <div class="LoginContainer">
      <div class="img">
        <img src="@/assets/undraw_barbecue_3x93.svg" />
      </div>
      <div class="login-content">
        <form>
          <img src="@/assets/undraw_profile_pic_ic5t.svg" />
          <h2 class="title">Welcome</h2>
         <!-- <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input v-model="username" type="text" class="input" />
            </div>
          </div>-->
          <div class="error"></div>
          <div class="input-div email">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <h5>E-mail</h5>
              <input v-model="email" @keyup.enter="signUp" type="email" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input v-model="password" @keyup.enter="signUp" type="password" class="input" />
            </div>
          </div>
          <!--<div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Repeat password</h5>
              <input v-model="repeatPassword" type="password" class="input" />
            </div>
          </div>-->
          <div class="div social">
            <a>
              <i class="fab fa-facebook-f"></i>
            </a>
            <a>
              <i class="fab fa-twitter"></i>
            </a>
            <a @click="googleSignIn">
              <i class="fab fa-google"></i>
            </a>
            <a>
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <button @click="signUp" class="btn">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@firebase/app";
import { auth } from "../firebase";

export default {
  name: "Signup",
  data() {
    return {
      username: '',
      password: '',
      repeatPassword: '',
      email: ''
    }
  },
  methods: {
    signUp: function(e) {
      auth.createUserWithEmailAndPassword(this.email, this.password).
        then(user => {
          console.log(`Signed up as ${user.user.email}`)
          this.$router.go({path: this.$router.path})
        },
        err => {
          console.log(err.message)
          document.querySelector(".error").innerHTML = err.message
        })
        e.preventDefault()
    },
    facebookSignIn: function() {

    },
    twitterSignIn: function() {

    },
    googleSignIn: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(user)
      }).catch(function(error) {
        console.log(error)
      });
    },
  },
  mounted: function() {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }
};
</script>
