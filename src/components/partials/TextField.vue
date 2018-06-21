<template>
  <div class="w-100">
    <div>
      <ul>
        <li class="fix-card" v-for="(note, index) in notes" :key="index">
          <div class="row">
            <div class="text-li col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
          {{note.text}}
              <p class="date">{{formatData(note.createdAt)}}</p>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
          <img class="modal-close fix-close" src="@/assets/images/close.png" alt="" id="delete" @click="onDelete(note._id)">
            </div>
          </div>
        </li>
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
import Confirmation from '@/components/partials/Confirmation'
import moment from 'moment'

export default {
  components: {
    Confirmation
  },
  props: ['notes'],
  data () {
    return {
      text: '',
      clickOnEdit: true,
      id: ''
    }
  },
  methods: {
    addNote () {
      this.notes.push({
        text: this.text
      })
      this.$emit('onAddNote', this.text)
      this.text = ''
    },
    onDelete (id) {
      this.$emit('onDelete', id)
    },
    select (id) {
      this.id = id
    },
    formatData (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
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
    height: 15px;
    cursor: pointer;
  }
  .text-li{
    padding-right: 0;
  }
  .date{
    color: #bfbfbf;
    font-size: 10px;
    margin: 0;
  }
</style>
