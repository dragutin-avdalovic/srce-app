<template>
  <footer>
    <div class="container">
      <div class="logo-container">
        <a target="_blank" href="http://srcezadjecu.ba/">
          <img src="@/assets/images/logo-wide-white.png" class="logo-white">
        </a>
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
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

footer{
  width: 100%;
  font-family: Open Sans;
  margin-top: 1vh;
  background: $red;
  bottom: 0px;
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
