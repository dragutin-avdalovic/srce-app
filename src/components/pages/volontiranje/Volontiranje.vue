<template>
  <div>
    <div class="content container">
      <div class="row row_interactive">
        <div class="left col-lg-2 col-md-6 col-6">
          <div class="left-filter">
            <div class="donators-title">
              <div class="donators-label">Volontiranje</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6 search-center">
          <div class="search-container">
            <div class="input-group search">
              <input type="search" v-model="filter" class="form-control input_search" placeholder="Type to Search">
              <span class="input-group-btn">
                <button class="btn btn-search" :disabled="!filter" @click="filter = ''"><i
                  class="fa fa-times"></i></button>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-12">
          <div class="right-filter">
            <div class="new">
              <button v-on:click="openModal('modal_entry')" class="heart-button-new"><span class="new-text">Novi unos</span></button>
            </div>
            <!--<div class="new">-->
              <!--<label for="file-upload" class="custom-file-upload">-->
              <!--<i class="fa fa-cloud-upload"></i> {{fileName}}-->
              <!--</label>-->
              <!--<input id="file-upload" ref="file" type="file" name="data" v-on:change="submitForm()" />-->
            <!--</div>-->
            <a href="http://45.76.90.178:3000/api/v1/download/volunteers/pdf" target="_blank" class="heart-button-new export"><span class="new-text text-fix"><i class="fa fa-file-o"></i><span class="exp">Export</span></span></a>
          </div>
        </div>
      </div>
      <!-- <el-button type="primary">Primary</el-button> -->
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     :backToStart="backToStart"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData"
              @onAddNote="onAddNote"
              @onModalClose="closeModal('modal_entry')"
              @onDelete="showDeleteNoteModal($event, 'confirm_note_delete')"
              :formData="formData" :types="types" :editing="editing"></Form>
      </modal>
      <modal name="confirm_delete" height="auto">
        <Confirmation @onConfirmDelete="confirmDelete($event)"></Confirmation>
      </modal>
      <modal name="confirm_note_delete" height="auto">
        <Confirmation @onConfirmDelete="confirmNoteDelete($event)"></Confirmation>
      </modal>
    </div>
  </div>
</template>

<script>
import TableSortable from '@/components/partials/TableSortable'
import Form from './Form'
import Main from '@/services/Main'
import Confirmation from '@/components/partials/Confirmation'

export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Form,
    Confirmation
  },
  data () {
    return {
      fileName: 'Upload excel file',
      editing: false,
      backToStart: false,
      delitionId: null,
      msg: 'Srce za djecu',
      filter: '',
      items: [],
      types: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Kreativne radionice sa djecom' },
        { value: 1, text: 'Okupacione radionice sa roditeljima oboljele djece' },
        { value: 2, text: 'Psihološka podrška roditeljima' },
        { value: 3, text: 'Poslovi na unutrašnjem održavanju kuće' },
        { value: 4, text: 'Poslovi na održavanju parka' },
        { value: 5, text: 'Psihološka podrška roditeljima' },
        { value: 6, text: 'Marketinške usluge' },
        { value: 7, text: 'Prevodilačke usluge' },
        { value: 8, text: 'Usluge prevoza djece na liječenje van BiH' },
        { value: 9, text: 'Rad na projektu "Moja kosa tvoja kosa"' },
        { value: 10, text: 'Rad na projektu "Rehabilitacioni kamp"' }
      ],
      seen: 'true',
      stacked: 'md',
      formData: {
        type: null,
        name: '',
        address: '',
        email: '',
        dateOfBirth: '',
        qualification: '',
        profession: '',
        phone: '',
        volunteeredBefore: false,
        numberOfHours: null,
        jobsToVolunteer: null
      },
      fields: [
        {
          key: 'name',
          label: 'IME I PREZIME',
          sortable: true
        },
        {
          key: 'address',
          label: 'ADRESA',
          sortable: true
        },
        {
          key: 'dateOfBirth',
          label: 'DATUM ROĐENJA',
          sortable: true
        },
        {
          key: 'qualification',
          label: 'STRUČNA SPREMA',
          sortable: true
        },
        {
          key: 'profession',
          label: 'ZANIMANJE',
          sortable: true
        },
        {
          key: 'phone',
          label: 'KONTAKT TELEFON',
          sortable: true
        },
        { key: 'actions', label: '' }
      ]
    }
  },
  mounted () {
    console.log('created called.')
    this.getData()
  },
  methods: {
    onAddNote (obj) {
      console.log(obj)
      Main.methods.putModule(Main.data().accessCard + obj.id + '/notes', { text: obj.note }, (data) => {
        console.log(data)
        if (data.message === 'successfully added note') {
          this.backToStart = true
          this.getData()
        }
      })
    },
    nameMail (value) {
      return `${value.name} ${value.email}`
    },
    cityAddress (value) {
      return `${value.city} ${value.address}`
    },
    clearData () {
      this.formData = {
        type: null,
        name: '',
        address: '',
        email: '',
        dateOfBirth: '',
        qualification: '',
        profession: '',
        phone: '',
        volunteeredBefore: false,
        numberOfHours: null,
        jobsToVolunteer: null
      }
    },
    show (modalId) {
      this.$modal.show(modalId)
    },
    hide (modalId) {
      this.$modal.hide(modalId)
    },
    openModal (modalId, clear = false) {
      this.show(modalId)
      if (clear) {
        this.clearData()
      }
    },
    closeModal (modalId) {
      this.hide(modalId)
      this.clearData()
    },
    showDeleteModal (event, modalId) {
      this.show(modalId)
      this.delitionId = event
    },
    showDeleteNoteModal (event, modalId) {
      this.show(modalId)
      this.delitionId = event.id
      this.delitionNoteId = event.noteId
    },
    confirmDelete (event) {
      if (event) {
        this.deleteItem(this.delitionId)
      }
      this.hide('confirm_delete')
    },
    confirmNoteDelete (event) {
      if (event) {
        this.deleteItemNote(this.delitionId, this.delitionNoteId)
      }
      this.hide('confirm_note_delete')
    },
    fillFormData (event) {
      this.editing = true
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          console.log(this.formData)
          if (this.formData.dateOfBirth !== null) {
            this.formData.dateOfBirth = this.formData.dateOfBirth.split('T')[0]
          }
        }
      })
      this.show('modal_entry', 'notes')
    },
    getData () {
      Main.methods.getModule(Main.data().volunteers, (data) => {
        data.forEach((item) => {
          item.dateOfBirth = item.dateOfBirth.split('T')[0]
        })
        this.items = data
      })
    },
    submitForm () {
      let file = this.$refs['file'].files[0]
      this.fileName = file.name
      const data = new FormData()
      data.append('data', file)
      Main.methods.postModule('http://45.76.90.178:3000/api/v1/uploads/volunteer', data, (res) => {
        if (res === 'Valid file format is .xlsx format') {
          console.log(res)
          this.getData()
          data.delete('data')
        } else if (res === 'Wrong .xlsx file selected.') {
          console.log(res)
          this.getData()
          data.delete('data')
        } else {
          console.log(res)
          this.getData()
          data.delete('data')
        }
      })
    },
    saveData (event) {
      this.editing = false
      if (event._id != null) {
        Main.methods.putModule(Main.data().volunteers + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().volunteers, event, (data) => {
          if (data.message === 'successfully saved') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      }
      setTimeout(() => {
        this.backToStart = false
      }, 1000)
    },
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().volunteers + event, (data) => {
        if (data.message === 'successfully removed') {
          this.seen = false
          this.getData()
          this.clearData()
        }
      })
    },
    deleteItemNote (id, noteId) {
      Main.methods.deleteModule(Main.data().volunteers + id + '/notes/' + noteId, (data) => {
        if (data.message === 'successfully removed item') {
          this.seen = false
          this.hide('modal_entry')
          this.getData()
          this.clearData()
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import "../../../assets/styles/mixins";
  @import "../../../assets/styles/form";
  @import "../../../assets/styles/general";
  @import "../../../assets/styles/variables";
  .confirmation{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirmation-title{
    padding-top: 30px;
    display: flex;
    justify-content: center;
  }
  .confirmation-button{
    @extend .heart-button;
    display: flex;
    justify-content: center;
    margin: 30px;
  }
  .heart-button-new
  {
    &:hover
    {
      text-decoration: none;
      text-underline: none;
      color: #ffffff;
    }
    &:active
    {
      text-decoration: none;
      text-underline: none;
      color: #ffffff;
    }
    @extend .heart-button;
    width: 10em;
    @include spacing-tb('p',1, em);
    @include spacing-lr('p',0, em);
    .new-text
    {
      width: 100%;
      .exp {
        margin: auto 0;
        font-size: 15.4px;
        font-weight: 600;
      }
      .fa-file-o {
        font-size: 1.5em;
        color: white;
        padding: 0 0.5em;
      }
    }
  }
  .left{
    display: flex;
    color: #FFFFFF;
    text-decoration: none;
  }
  .text-fix{
    display: flex;
    justify-content: center;
  }
  .export{
    &:focus
    {
      text-decoration: none;
      text-underline: none;
      color: #ffffff;
    }
  }
  .new{
    margin-right: 1em;
  }
  #file-upload {
    display: none;
    visibility: hidden;
  }
  .custom-file-upload {
    @include font(1.1,600,$white);
    border-radius: 0.5em;
    background-color: $red;
    border: none;
    display: inline-block;
    padding: 1em 1em;
    cursor: pointer;
  }
  .search-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .new {
    label {
      margin-bottom: 0;
    }
  }
</style>
