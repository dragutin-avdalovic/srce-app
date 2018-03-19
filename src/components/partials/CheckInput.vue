<template>
  <div class="composite">
    <div class="check-box">
      <div class="left"><Checkbox @onChecked="setCheckboxInput($event)"></Checkbox></div>
      <div class="right" v-html="this.text"><label></label></div>
    </div>
    <div class="input"><input v-if="this.disabled" @blur="sendInput($event)" type="text" class="check-input" v-model="checkInput"/></div>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
export default {
  name: 'check-input',
  props: ['checked', 'text'],
  data () {
    return {
      checkInput: null,
      inputText: '',
      disabled: false
    }
  },
  components: {
    Checkbox
  },
  methods: {
    setCheckboxInput ($event) {
      this.disabled = $event
    },
    sendInput () {
      this.$emit('sendInputToParent', this.checkInput)
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
      @include spacing-l(m,4,em);
      width: 13em;
      outline: 0;
      border-width: 0 0 1px 0;
      border-color:$text-gray
    }
    input:focus {
      border-color:$red
    }
  }
</style>
