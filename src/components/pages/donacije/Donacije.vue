<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="content container">
      <TableSortable :items="items" :fieldsA="fields" :stacked="stacked" @clicked="fillFormData" @delete="deleteItem" :seen="seen"></TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" :formData="formData"></Form>
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
      msg: 'Srce za djecu',
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
          label: 'ADRESA',
          formatter: 'cityAddress',
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
          label: 'DATUM',
          sortable: true
        },
        {
          key: 'address',
          label: 'ADRESA',
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
      this.formData = Object.assign({}, this.formData, {
        type: null,
        company: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
      })
    },
    show () {
      this.$modal.show('modal_entry')
    },
    hide () {
      this.$modal.hide('modal_entry')
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
      Main.methods.getModule(Main.data().donations, (data) => {
        console.log(data)
        this.items = data
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().donations + event._id, event, (data) => {
          console.log(data)
          if (data.data === 'successfully saved') {
            this.hide()
            this.getData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().donations, event, (data) => {
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
      Main.methods.deleteModule(Main.data().donations + event._id, event, (data) => {
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
