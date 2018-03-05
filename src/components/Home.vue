<template>
  <div class="container">
  <div class="hello">
    <Header></Header>
    <div class="row">
      <div class="col-6">
        <h3>Donatori</h3>
      </div>
      <div class="col-6 col-fix">
        <p>Poredaj po:</p>
        <button>Novi unos</button>
      </div>
    </div>
    <Table></Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Header from '@/components/Header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Srce za djecu'
    }
  },
  components: {
    Table,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.col-fix{
  display: flex;
}
  button{
    display: flex;
    justify-content: center;
    background-color: #EB2D3C;
    color: #ffffff;
    width: 100px;
    border-radius: 3%;
    border: none;
    font-size: 16px;
    font-weight: bold;
    font-family: Open Sans;
  }
</style>
