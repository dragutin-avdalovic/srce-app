<template>
  <section>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
    <div class="container nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="nav-logo">
          <img src="@/assets/logo-wide.png" alt="logo" class="nav-logo">
        </div>
      </nav>
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
  .nav-logo {
    width: 200px;
    padding-top: 10px;
  }
  .nav-bar {
    padding: 0;
    height: 100px;
  }
</style>
