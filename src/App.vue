<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import "assets/mixins";

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
