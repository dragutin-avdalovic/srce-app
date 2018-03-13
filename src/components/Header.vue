<template>
  <section>
      <div class="nav-bar">
          <div class="nav-logo">
            <img src="@/assets/logo-wide.png" alt="logo" class="logo">
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
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
  .nav-bar{
    padding-bottom: 5vh;
  }
  .nav-logo{
    padding-top: 3vh;
    display: block;
    justify-content: space-between;
    vertical-align: middle;
    @include spacing-lr('p', 10 ,%);
  }
  .logo {
    width: 200px;
    padding-top: 10px;
  }
</style>
