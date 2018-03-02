<template>
  <div class="hello">
    <Header></Header>

    <Table></Table>

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

</style>
