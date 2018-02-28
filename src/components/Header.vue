<template>
  <div class="navigation">
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </div>
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
  .navigation {
    width: 100%;
    height: 50px;

    ul {
      list-style: none;

      li {
        float: left;
      }
    }
  }
</style>
