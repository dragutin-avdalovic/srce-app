<template>
  <div class="composite">
    <div class="check-box">
      <div class="left"><Checkbox @onChecked="setCheckboxInput($event)" :checked="checked"></Checkbox></div>
      <div class="right" v-html="text"><label></label></div>
    </div>
    <div class="input"><input v-show="checked" @blur="sendInput(compText)" type="text" class="check-input" v-model="compText"/></div>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
export default {
  name: 'check-input',
  props: ['checked', 'text', 'textInput'],
  data: function () {
    return {
      compText: this.textInput
    }
  },
  components: {
    Checkbox
  },
  methods: {
    setCheckboxInput (event) {
      this.$emit('onSetCheckBox', event)
    },
    sendInput (event) {
      this.$emit('onSetInput', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/general";
  .composite
  {
    @include spacing-b(m,1,em);
    input {
      @include spacing-l(m, 4, em);
      width: 13em;
      outline: 0;
      border-width: 0 0 1px 0;
      border-color: $text-gray;
      &:focus
      {
        border-width: 0 0 1px 0;
        border-color:$red
      }
    }
  }
</style>
