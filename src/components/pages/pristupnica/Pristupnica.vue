<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="content container">
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     @clicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"></TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onModalClose="hide('modal_entry')" :formData="formData" :types="types"></Form>
      </modal>
      <modal class="confirmation" name="confirm_delete" height="auto">
        <p>Da li ste sigurni da zelite izbrisati?</p>
        <button v-on:click="hide('confirm_delete')">Nazad</button>
        <button v-on:click="confirmDelete('confirm_delete')">Izbrisati</button>
      </modal>
    </div>
  </div>
</template>

<script>
import TableSortable from '@/components/partials/TableSortable'
import Form from '@/components/partials/Form'
import Main from '@/services/Main'

export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Form
  },
  data () {
    return {
      delitionId: null,
      msg: 'Srce za djecu',
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
        jmbg: '',
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
          label: 'VRSTA CLANA',
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
    nameMail (value) {
      return `${value.name} ${value.email}`
    },
    cityAddress (value) {
      return `${value.city} ${value.address}`
    },
    clearData () {
      this.formData = Object.assign({}, this.formData, {
        type: null,
        name: '',
        email: '',
        address: '',
        jmbg: '',
        member: '',
        phone: '',
        childName: '',
        dateOfBirth: '',
        diagnose: '',
        dateOfDiagnose: ''
      })
    },
    show (modalId) {
      this.$modal.show(modalId)
    },
    hide (modalId) {
      this.$modal.hide(modalId)
      this.clearData()
    },
    showDeleteModal (event, modalId) {
      this.show(modalId)
      this.delitionId = event
    },
    confirmDelete (modalId) {
      this.deleteItem(this.delitionId)
      this.hide(modalId)
    },
    fillFormData (event) {
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
        }
      })
      this.show()
    },
    getData () {
      Main.methods.getModule(Main.data().accessCard, (data) => {
        console.log(data)
        this.items = data
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().accessCard + event._id, event, (data) => {
          console.log(data)
          if (data.data === 'successfully saved') {
            this.hide()
            this.getData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().accessCard, event, (data) => {
          console.log(data)
          if (data.data === 'successfully edited') {
            this.hide()
            this.getData()
          }
        })
      }
      this.clearData()
    },
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().accessCard + event._id, event, (data) => {
        console.log(data)
        if (data.data === 'successfully removed') {
          this.seen = false
          this.getData()
        }
      })
    }
  }
}
</script>
<style lang="scss">

</style>
