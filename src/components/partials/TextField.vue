<template>
  <div class="w-100">
    <div>
      <ul>
        <div>
        <li class="fix-card" v-for="(note, index) in notes" :key="index">
          {{note.text}}
          <img class="modal-close fix-close" src="@/assets/images/close.png" alt="">
        </li>
        </div>
        <li v-if="text !== ''">{{text}}</li>
      </ul>
    </div>
    <div class="row align">
      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
    <b-form-textarea class="form-control text"
                     id="textarea1"
                     v-model="text"
                     placeholder="Add notes"
                     :no-resize="true"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
    <button class="button_notes fix-note" type="button" @click="addNote()"><p class="save-text">Add</p></button>
      </div>
    </div>
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
  methods: {
    addNote () {
      this.notes.push({
        text: this.text
      })
      this.$emit('onAddNote', this.text)
      this.text = ''
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
  ul{
    list-style-type: none;
    padding: 0;
  }
  .align{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fix-note{
    width: 80px;
    font-size: 1em;
  }
  .fix-card{
    word-wrap: break-word;
    border: 1px solid #cccc;
    font-size: 14px;
    border-radius: 0.2em;
    padding: 0.5em;
    margin: 0.2em;
  }
  .fix-close{
    top: 0;
    right: 0;
    height: 15px;
    cursor: pointer;
  }
</style>
