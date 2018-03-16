<template>
  <b-button-group size="lg">
    <b-button v-on:click="onChecked()" variant="outline-success lg" class="toggle-btn">
      Da
    </b-button>
    <b-button v-on:click="onChecked()" variant="outline-success lg" class="toggle-btn">
      Ne
    </b-button>
  </b-button-group>
</template>

<script>
export default {
  name: 'composite-button',
  props: {
    checked: {
      default: false
    }
  },
  methods: {
    onChecked () {
      this.$emit('onChecked', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
.toggle-btn
{
  font-size: 1em !important;
  color: $text-gray;
  background: $white;
  border: 1px solid $text-gray;
  min-height: 2.8em;
  max-height: 2.8em;
  max-width: 8.6em;
  min-width: 8.6em;
  &:focus
  {
    border: 1px solid $red;
    color: $red;
  }
  &:hover
  {
    border: 1px solid $red;
    color: $red;
  }
}
</style>
