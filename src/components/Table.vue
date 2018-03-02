<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <div class="container nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="nav-logo">
          <img src="@/assets/logo-wide.png" alt="logo" class="nav-logo">
        </div>
      </nav>
    </div>

    <div class="container header-image">
      <img src="@/assets/background.jpg" class="header-image" alt="Responsive image">

    </div>


  </div>
</template>

<script>
export default {
  name: 'Table'
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
.header-image {
  width: 100%;
}
</style>
