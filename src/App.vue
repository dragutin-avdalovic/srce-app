<template>
  <div id="app">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import "assets/mixins.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .content {
    width: 100%;
  }
}
</style>
