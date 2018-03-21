<template>
  <b-button-group size="lg">
    <b-button  v-on:click="onChecked(1)" v-bind:class="{ active: activeFirst }"  variant="outline-success lg" class="toggle-btn">
      Da
    </b-button>
    <b-button v-on:click="onChecked(0)" v-bind:class="{ active: activeSecond }"  variant="outline-success lg" class="toggle-btn">
      Ne
    </b-button>
  </b-button-group>
</template>
<script>
export default {
  name: 'composite-button',
  props: ['active'],
  data () {
    return {
      activeFirst: this.activeOne,
      activeSecond: this.activeTwo
    }
  },
  mounted () {
    if (this.active === true) {
      this.activeFirst = true
    } else if (this.active === false) {
      this.activeSecond = true
    } else {
      this.activeSecond = this.activeFirst = false
    }
  },
  methods: {
    onChecked (event) {
      if (event === 1) {
        this.activeFirst = true
        this.activeSecond = false
        this.$emit('onCheckedComposite', true)
      } else if (event === 0) {
        this.activeSecond = true
        this.activeFirst = false
        this.$emit('onCheckedComposite', false)
      } else {
        this.activeFirst = this.activeSecond = false
        this.$emit('onCheckedComposite', null)
      }
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
  &:hover
  {
    border: 1px solid $red;
    color: $red;
  }
}
.active
{
  border: 1px solid $red;
  color: $red;
}
</style>
