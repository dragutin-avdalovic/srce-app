<template>
  <div class="hello">
    <Header></Header>
    <button v-on:click="show()">open</button>
    <modal name="modal_entry" height="auto" :scrollable="true">
      <Form></Form>
    </modal>
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
    Form
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
