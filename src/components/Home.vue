<template>
  <div class="hello">
    <Header></Header>
    <Form></Form>
    <Table></Table>

  </div>
</template>

<script>
import Table from '@/components/Table'
import Header from '@/components/Header'
import Form from '@/components/Form'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Srce za djecu'
    }
  },
  components: {
    Table,
    Header,
    Form
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
