<template>
  <div>
    <div class="content container">
      <div class="row row_interactive">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="left-filter">
            <div class="donators-title">
              <div class="donators-label">Pristupnica</div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6">
          <div class="right-filter">
            <div class="search-container">
              <div class="input-group search">
                <input type="search" v-model="filter" class="form-control input_search" placeholder="Type to Search">
                <span class="input-group-btn">
                <button class="btn btn-search" :disabled="!filter" @click="filter = ''"><i
                  class="fa fa-times"></i></button>
              </span>
              </div>
            </div>
            <div class="new">
              <button v-on:click="openModal('modal_entry')" class="heart-button-new"><span class="new-text">Novi unos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     :backToStart="backToStart"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onAddNote="onAddNote" @onModalClose="closeModal('modal_entry')" :formData="formData" :types="types" :editing="editing"></Form>
      </modal>
      <modal name="confirm_delete" height="auto">
        <Confirmation @onConfirmDelete="confirmDelete($event)"></Confirmation>
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
    Confirmation,
    TableSortable,
    Form
  },
  data () {
    return {
      editing: false,
      backToStart: false,
      delitionId: null,
      msg: 'Srce za djecu',
      filter: '',
      items: [{
        name: '',
        id: '',
        phone: '',
        address: '',
        email: '',
        member: ''
      }],
      types: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Roditelj' },
        { value: 1, text: 'Prijatelj' },
        { value: 2, text: 'Medicinsko osoblje' },
        { value: 3, text: 'Volonter' },
        { value: 4, text: 'Osoblje' }
      ],
      seen: 'true',
      stacked: 'md',
      formData: {
        type: null,
        name: '',
        email: '',
        address: '',
        jmbg: null,
        phone: '',
        childName: '',
        dateOfBirth: '',
        diagnose: '',
        dateOfDiagnose: ''
      },
      fields: [
        {
          key: 'name',
          label: 'IME I PREZIME',
          sortable: true
        },
        {
          key: 'jmbg',
          label: 'JMBG',
          sortable: true
        },
        {
          key: 'address',
          label: 'ADRESA',
          sortable: true
        },
        {
          key: 'phone',
          label: 'TELEFON',
          sortable: true
        },
        {
          key: 'email',
          label: 'EMAIL',
          sortable: true
        },
        {
          key: 'type',
          label: 'VRSTA ČLANA',
          sortable: true,
          formatter: (value) => { return this.types[value + 1] ? this.types[value + 1].text : '' }
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
        email: '',
        address: '',
        jmbg: null,
        member: '',
        phone: '',
        childName: '',
        dateOfBirth: '',
        diagnose: '',
        dateOfDiagnose: ''
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
      this.delitionId = event.id
    },
    confirmDelete (event) {
      if (event) {
        this.deleteItem(this.delitionId)
      }
      this.hide('confirm_delete')
    },
    fillFormData (event) {
      this.editing = true
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          if (this.formData.dateOfBirth !== null) {
            this.formData.dateOfBirth = this.formData.dateOfBirth.split('T')[0]
          }
          if (this.formData.dateOfDiagnose !== null) {
            this.formData.dateOfDiagnose = this.formData.dateOfDiagnose.split('T')[0]
          }
        }
      })
      this.show('modal_entry', 'notes')
    },
    getData () {
      Main.methods.getModule(Main.data().accessCard, (data) => {
        this.items = data
      })
    },
    saveData (event) {
      this.editing = false
      if (event._id != null) {
        Main.methods.putModule(Main.data().accessCard + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().accessCard, event, (data) => {
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
      Main.methods.deleteModule(Main.data().accessCard + event, (data) => {
        if (data.message === 'successfully removed') {
          this.seen = false
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
</style>
