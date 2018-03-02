<template>
  <div class="hello">
      <Table/>

  </div>
</template>

<script>
import About from '@/components/About'
import Table from '@/components/Table'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Srce za djecu'
    }
  },
  components: {
    About,
    Table
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
