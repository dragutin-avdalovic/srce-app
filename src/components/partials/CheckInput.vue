<template>
  <div class="composite">
    <div class="check-box">
      <div class="left"><Checkbox @onChecked="setCheckboxInput($event)" :checked="this.checked"></Checkbox></div>
      <div class="right" v-html="this.text"><label></label></div>
    </div>
    <div class="input"><input v-if="this.checked" @blur="sendInput(this.textInput)" type="text" class="check-input" v-model="this.textInput"/></div>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
export default {
  name: 'check-input',
  props: ['checked', 'text', 'textInput'],
  components: {
    Checkbox
  },
  methods: {
    setCheckboxInput ($event) {
      this.checked = $event
      this.$emit('sendInputToParent', this.checked)
    },
    sendInput (event) {
      this.textInput = event
      this.$emit('sendInputToParent', this.textInput)
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
