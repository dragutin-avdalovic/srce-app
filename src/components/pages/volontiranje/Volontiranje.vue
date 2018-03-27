<template>
  <div>
    <div class="content container">
      <div class="row row_interactive">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="left-filter">
            <div class="donators-title">
              <div class="donators-label">Volontiranje</div>
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
              <button v-on:click="openModal('modal_entry')" class="heart-button-new"><span class="new-text">Novi unos</span></button>
            </div>
          </div>
        </div>
      </div>
      <!-- <el-button type="primary">Primary</el-button> -->
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData($event)" @onModalClose="closeModal('modal_entry')" :formData="formData" :types="types"></Form>
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
    TableSortable,
    Form,
    Confirmation
  },
  data () {
    return {
      delitionId: null,
      msg: 'Srce za djecu',
      filter: '',
      items: [],
      types: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Kreativne radionice sa djecom' },
        { value: 1, text: 'Okupacione radionice sa roditeljima oboljele djece' },
        { value: 2, text: 'Psiholoska podrska roditeljima' },
        { value: 3, text: 'Poslovi na unutrasnjem odrzavanju kuce' },
        { value: 4, text: 'Poslovi na odrzavanju parka' },
        { value: 5, text: 'Psiholoska podrska roditeljima' },
        { value: 6, text: 'Marketinske usluge' },
        { value: 7, text: 'Prevodilacke usluge' },
        { value: 8, text: 'Usluge prevoza djece na lijecenje van BiH' },
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
          label: 'DATUM RODJENJA',
          sortable: true
        },
        {
          key: 'qualification',
          label: 'STRUCNA SPREMA',
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
    openModal (modalId) {
      this.show(modalId)
      this.clearData()
    },
    closeModal (modalId) {
      this.hide(modalId)
      this.clearData()
    },
    showDeleteModal (event, modalId) {
      this.show(modalId)
      this.delitionId = event
    },
    confirmDelete (event) {
      if (event) {
        this.deleteItem(this.delitionId)
      }
      this.hide('confirm_delete')
    },
    fillFormData (event) {
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          console.log(this.formData)
          if (this.formData.dateOfBirth !== null) {
            this.formData.dateOfBirth = this.formData.dateOfBirth.split('T')[0]
          }
        }
      })
      this.show('modal_entry')
    },
    getData () {
      Main.methods.getModule(Main.data().volunteers, (data) => {
        this.items = data
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().volunteers + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().volunteers, event, (data) => {
          console.log(data)
          if (data.message === 'successfully saved') {
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      }
    },
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().volunteers + this.delitionId, (data) => {
        console.log(data)
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

</style>
