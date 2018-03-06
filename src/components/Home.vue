<template>
  <div>
    <div class="container">
    <Header></Header>
    <div class="row">
      <div class="col-6">
        <h3>Donatori</h3>
      </div>
      <div class="col-6 col-fix">
        <div>
          <p>Poredaj po:</p>
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Najnovije
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
        <p>Poredaj po:</p>
        <button v-on:click="show()">Novi unos</button>
      </div>
    </div>
    <Table></Table>
    <modal name="modal_entry" height="auto" :scrollable="true">
      <Form></Form>
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

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Srce za djecu'
    }
  },
  methods: {
    show () {
      this.$modal.show('modal_entry')
    },
    hide () {
      this.$modal.hide('modal_entry')
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
justify-content: space-around}
h3{
  font-weight: bold;
  color: #EB2D3C;
  font-family: Open Sans;
}
  button{
    display: flex;
    justify-content: center;
    background-color: #EB2D3C;
    color: #ffffff;
    width: 100px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    font-family: Open Sans;
    width: 200px;
  }
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  .v--modal-overlay {
    background: rgba(255, 255, 255, 0.6);
  }
</style>
