<template>
    <section>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      <div class="nav-bar">
          <div class="nav-logo">
            <img src="@/assets/logo-wide.png" alt="logo" class="nav-logo">
            <!--<form class="form-inline my-2 my-lg-0">-->
              <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
              <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
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
  .nav-bar{
    padding-bottom: 5vh;
  }
  .nav-logo {
    width: 200px;
    padding-top: 10px;
  }
</style>
