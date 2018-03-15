<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="content container">
      <!--<Table v-bind:items="items" @clicked="fillFormData" @delete="deleteItem" :seen="seen"></Table>-->
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
import Table from '@/components/partials/Table'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Table,
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
    getData () {
      // Make a request for a user with a given ID
      axios.get('http://45.76.90.178:3000/api/v1/users').then((response) => {
        response.data.map(item => {
          Object.assign(item, {
            checked: false
          })
          return item
        })
        this.items = response.data
        this.seen = true
      }).catch((error) => {
        console.log(error)
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        axios.put('http://45.76.90.178:3000/api/v1/users/' + event._id, event).then((response) => {
          console.log(response)
          if (response.data === 'successfully edited') {
            this.hide()
            this.getData()
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        axios.post('http://45.76.90.178:3000/api/v1/users', event).then((response) => {
          console.log(response)
          if (response.data === 'successfully saved') {
            this.hide()
            this.getData()
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      this.clearData()
    },
    fillFormData (event) {
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
        }
      })
      this.show()
    },
    deleteItem (event) {
      axios.delete('http://45.76.90.178:3000/api/v1/users/' + event).then((response) => {
        console.log(response)
        if (response.data === 'successfully removed') {
          this.seen = false
          this.getData()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/variables";

.col-fix{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div-fix{
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10vh;
}
.donators{
  margin: 0;
  a{
    color: $red !important;
    font-size: 1.8em;
    font-weight: bold;
    font-family: Open Sans;
    padding: 0;
    &:hover, &:focus {
      text-decoration: none;
    }
  }
}
button{
  display: flex;
  justify-content: center;
  background-color: $red;
  color: #ffffff;
  width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  font-family: Open Sans;
  width: 170px;
  height: 50px;
  :focus {
    outline: none;
    box-shadow:none;
  }
  :active{
    outline: none;
    box-shadow:none;
  }
}
.sort{
  border: none;
  background-color: transparent;
  a{
    font-size: 1.2em;
    font-weight: bold;
    font-family: Open Sans;
    padding: 0;
    &:hover, &:focus {
      text-decoration: none;
    }
  }
}
p{
  font-size: 1.2em;
  color: #A2A1A1;
  font-family: Open Sans;
  font-weight: bold;
  padding-right: 5px;
  margin: 0;
}
.v--modal-overlay {
  background: rgba(255, 255, 255, 0.6);
}
.export{
  width: auto;
  height: 100%;
  display: flex;
  float: left;
  .export-btn{
    color: #ffffff;
  }
}
.arrows{
  display: flex;
  float: right;
  .arrow-btn{
  }
}
.fix{
  display: flex;
  color: #333333;
}
.color-fix {
  color: #A2A1A1;
}
.weight-fix{
  font-weight: normal;
  font-size: 14px;
}
.red{
  color: #EB2D3C;
}
button{
  background-color: transparent;
  width: 100px;
  :hover{
    border-color: white;
  }
}
.list-dropdown
{
  display: flex;
  flex-direction: column;
  align-items: center;
  .list_row {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    cursor: pointer;
    @include spacing-tb('p', 0.5, em);
    @include spacing-l('p', 1.5, em);
    p {
      @include spacing-b('m', 0, em);
      @include spacing-l('p', 1, em);
      @include font(1.1, em, $text-dark);
    }
    i {
      @include font(1.2, em, $text-dark);
    }
    &:hover
    {
      background-color: $text-gray;
    }
  }
}
.all{
  padding: 0 0 0 8px;
}
.content
{
  min-height: 66vh;
}
</style>
