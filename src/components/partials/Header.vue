<template>
  <section>
    <div class="container">
      <div class="nav-bar">
        <div class="nav-logo">
          <router-link :to="{ name: 'Home', params: {} }">
            <img src="@/assets/images/logo-wide.png" alt="logo" class="logo">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: 'LOGO'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.nav-bar{
  padding-bottom: 5vh;
}
.nav-logo{
  padding-top: 3vh;
  display: block;
  justify-content: space-between;
  vertical-align: middle;
}
.logo {
  width: 200px;
  padding-top: 10px;
}
.search{
  display: flex;
  float: right;
  padding-top: 15px;

}
.btn-search{
  margin-left: 10px;
  font-family: "Open Sans";
  color: #ffffff;
  background-color: $red;
  outline: none;
}
</style>
