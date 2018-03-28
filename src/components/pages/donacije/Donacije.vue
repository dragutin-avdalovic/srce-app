<template>
  <div>
    <div class="content container">
      <div class="row row_interactive">
        <div class="col-lg-6 col-md-6 col-6">
          <!--<div class="left-filter">-->
            <!--<div class="donators-title">-->
              <!--<div class="donators-label">Donacije</div>-->
            <!--</div>-->
          <!--</div>-->
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
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onModalClose="closeModal('modal_entry')" :formData="formData" :types="types"></Form>
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
      seen: 'true',
      stacked: 'md',
      formData: {
        type: null,
        company: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
      },
      fields: [
        {
          key: 'namemail',
          label: 'OSNOVNI PODACI',
          formatter: 'nameMail',
          sortable: true
        },
        {
          key: 'cityaddress',
          label: 'GRAD',
          formatter: 'cityAddress',
          sortable: true
        },
        {
          key: 'address',
          label: 'ADRESA',
          sortable: true
        },
        {
          key: 'company',
          label: 'NAZIV KOMPANIJE',
          sortable: true,
          variant: 'danger'
        },
        {
          key: 'date',
          label: 'DATUM DONACIJE',
          sortable: true
        },
        {
          key: 'cause',
          label: 'SVRHA',
          sortable: true
        },
        {
          key: 'amount',
          label: 'IZNOS (KM)',
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
        company: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
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
      this.delitionId = event.id
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
          if (this.formData.dateOfDiagnose !== null) {
            this.formData.dateOfDiagnose = this.formData.dateOfDiagnose.split('T')[0]
          }
        }
      })
      this.show('modal_entry')
    },
    getData () {
      Main.methods.getModule(Main.data().donations, (data) => {
        this.items = data
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().donations + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().donations, event, (data) => {
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
      Main.methods.deleteModule(Main.data().donations + this.delitionId, (data) => {
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
