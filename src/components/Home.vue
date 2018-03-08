<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="container">
    <Header></Header>
    <div class="row">
      <div class="col-lg-6 col-fix">
        <div class="dropdown donators">
          <a class="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Donatori
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-fix">
        <div class="div-fix">
          <p>Poredaj po:</p>
          <div class="dropdown sort">
            <a class="dropdown-toggle" href="#" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Najnovije
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
        <button v-on:click="show()">Novi unos</button>
      </div>
    </div>
    <Table v-bind:items="items" @clicked="fillFormData" @delete="deleteItem" :seen="seen"></Table>
    <modal name="modal_entry" height="auto" :scrollable="true">
      <Form @onDataEmit="saveData" :formData="formData"></Form>
    </modal>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Table from '@/components/Table'
import Header from '@/components/Header'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Srce za djecu',
      items: [],
      seen: 'true',
      formData: {
        type: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
      }
    }
  },
  mounted () {
    console.log('created called.')
    this.getData()
  },
  methods: {
    show () {
      this.$modal.show('modal_entry')
    },
    hide () {
      this.$modal.hide('modal_entry')
    },
    getData () {
      // Make a request for a user with a given ID
      axios.get('http://45.76.90.178:3000/api/v1/users')
        .then((response) => {
          response.data.map(item => {
            Object.assign(item, {
              checked: false
            })
            return item
          })
          this.items = response.data
          this.seen = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        axios.put('http://45.76.90.178:3000/api/v1/users/' + event._id, event)
          .then((response) => {
            console.log(response)
            if (response.data === 'successfully saved') {
              this.hide()
              this.getData()
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
      else {
        axios.post('http://45.76.90.178:3000/api/v1/users', event)
          .then((response) => {
            console.log(response)
            if (response.data === 'successfully saved') {
              this.hide()
              this.getData()
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
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
      axios.delete('http://45.76.90.178:3000/api/v1/users/' + event)
        .then((response) => {
          console.log(response)
          if (response.data === 'successfully removed') {
            this.seen = false
            this.getData()
          }
        })
    }
  },
  components: {
    Table,
    Header,
    Form,
    Footer
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
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
</style>
