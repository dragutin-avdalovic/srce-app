<template>
  <footer>
    <div class="container">
      <div class="logo-container">
        <img src="../assets/logo-wide-white.png" class="logo-white">
        <p>{{title}}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      title: 'Udruženje „Srce za djecu koja boluju od raka u FBiH“'
    }
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
  footer{
    width: 100%;
    font-family: Open Sans;
    margin-top: 5vh;
    background: $red;
    margin-bottom: 0;
    padding-top: 0;
    @include spacing-tb('p', 2 , em);
    @include spacing-lr('p', 10 ,%);
  }
  .logo-container
  {
    min-width: 17em;
    .logo-white
    {
      padding-bottom: 0.5em;
      height: 3.5em;
      min-height: 2.5em;
    }
    p{
      @include font(1,em,$white);
    }
  }
</style>
