<template>
  <div class="w-100">
    <div>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          {{note.text}}
        </li>
        <li v-if="text !== ''">{{text}}</li>
      </ul>
    </div>
    <b-form-textarea class="form-control text"
                     id="textarea1"
                     v-model="text"
                     placeholder="Add notes"
                     :no-resize="true"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
  </div>
</template>

<script>
export default {
  props: ['notes'],
  data () {
    return {
      text: '',
      clickOnEdit: true
    }
  },
  watch: {
    text: function (newVal, oldVal) {
      this.$emit('onNoteChanged', newVal)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/form";
  @import "../../assets/styles/general";
  .w-100{
    width: 100%;
  }
  .field{
    background-color: #ffffff;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
</style>
