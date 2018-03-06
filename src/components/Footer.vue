<template>
  <footer>
    <div class="logo-container">
      <img src="../assets/logo-wide-white.png" class="logo-white">
      <p>{{title}}</p>
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
    background: $red;
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
