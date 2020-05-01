<style lang="scss">
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
        <form action="index.html">
          <img src="@/assets/undraw_profile_pic_ic5t.svg" />
          <h2 class="title">Welcome</h2>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input type="text" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input type="password" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Repeat password</h5>
              <input type="password" class="input" />
            </div>
          </div>
          <div class="input-div email">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <h5>E-mail</h5>
              <input type="email" class="input" />
            </div>
          </div>
          <div class="div social-media">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-google"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <input type="submit" class="btn" value="Login" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
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
