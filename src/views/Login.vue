<style lang="scss">
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
          <a id="forgot" href="#">Forgot Password?</a>
          <input type="submit" class="btns" value="Login" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
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