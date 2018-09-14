<template>
  <b-button-group size="lg">
    <b-button  v-on:click="onChecked(true)" v-bind:class="{ active: active }"  variant="lg" class="toggle-btn">
      Da
    </b-button>
    <b-button v-on:click="onChecked(false)" v-bind:class="{ active: !active }"  variant="lg" class="toggle-btn">
      Ne
    </b-button>
  </b-button-group>
</template>
<script>
export default {
  name: 'composite-button',
  props: ['active'],
  methods: {
    onChecked (event) {
      this.$emit('onCheckedComposite', event)
    }
  }
}
</script>

<style lang="scss" >
  @import "../../assets/styles/variables";
.toggle-btn
{
  font-size: 1em !important;
  color: $text-gray;
  background: $white;
  border: 1px solid $text-gray !important;
  min-height: 2.8em;
  max-height: 2.8em;
  max-width: 8.6em;
  min-width: 8.6em;
  &:hover {
    border: 1px solid $red !important;
    color: $white !important;
    background-color: $red !important;
  }
}
.active
{
  border: 1px solid $red !important;
  color: $red !important;
}
</style>
