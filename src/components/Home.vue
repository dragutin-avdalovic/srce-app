<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="container">
    <Header></Header>
    <div class="row">
      <div class="col-6 col-fix">
        <div class="dropdown donators">
          <a class="btn btn-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Donatori
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="col-6 col-fix">
        <div class="div-fix">
          <p>Poredaj po:</p>
          <div class="dropdown sort">
            <a class="btn btn-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    <Table v-bind:items="items"></Table>
    <modal name="modal_entry" height="auto" :scrollable="true">
      <Form @onDataEmit="saveData"></Form>
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
      items: []
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
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    saveData (event) {
      console.log(event)
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
     color: #EB2D3C !important;
     font-size: 1.8em;
     font-weight: bold;
     font-family: Open Sans;
     padding: 0;
   }
}
  button{
    display: flex;
    justify-content: center;
    background-color: #EB2D3C;
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

  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  .v--modal-overlay {
    background: rgba(255, 255, 255, 0.6);
  }
</style>
