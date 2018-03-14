<template>
  <section>
      <div class="nav-bar">
          <div class="nav-logo">
            <img src="@/assets/logo-wide.png" alt="logo" class="logo">
            <!--<form class="search form-inline my-2 my-lg-0">-->
              <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
              <!--<button class="btn-search btn my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>-->
            <!--</form>-->
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
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
  .nav-bar{
    padding-bottom: 8vh;
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
