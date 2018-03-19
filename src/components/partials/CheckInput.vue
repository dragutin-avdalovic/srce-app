<template>
  <div>
    <div class="check-box">
      <div class="left"><Checkbox @onChecked="setCheckboxInput($event)"></Checkbox></div>
      <div class="right"><label>{{ text }}</label></div>
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
  input {
    @include spacing-l(m,30,%);
    width: 130%;
    outline: 0;
    border-width: 0 0 1px 0;
    border-color:$text-gray
  }
  input:focus {
    border-color:$red
  }
</style>
