<style scoped lang="scss">
@import "@/assets/scss/Login.scss";
</style>
<template>
  <div class="login">
    <img class="wave" src="@/assets/wave.png" />
    <div class="LoginContainer">
      <div class="img">
        <img src="@/assets/undraw_cooking_lyxy.svg" />
      </div>
      <div class="login-content">
        <form>
          <img src="@/assets/undraw_profile_pic_ic5t.svg" />
          <h2 class="title">Welcome</h2>
          <div class="error"></div>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <h5>Email</h5>
              <input v-model="email" @keyup.enter="login" type="email" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input v-model="password" @keyup.enter="login" type="password" class="input" />
            </div>
          </div>
          <a id="forgot" href="#">Forgot Password?</a>
          <button @click="login" class="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from "../firebase";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(e) {
      auth.signInWithEmailAndPassword(this.email, this.password).
        then(user => {
          console.log(`Logged in as ${user.user.email}`)
          this.$router.go({path: this.$router.path})
        },
        err => {
          console.log(err.message)
          document.querySelector(".error").innerHTML = err.message
        })
        e.preventDefault()
    }
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