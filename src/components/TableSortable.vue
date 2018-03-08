<template>
  <b-table :items="items" :fields="fields" :stacked="stacked" hover outlined>
    <template slot="table-caption">
    </template>
  </b-table>
</template>

<script>
export default {
  props: ['items', 'fields', 'stacked'],
  data () {
    return {

    }
  }
}
</script>
<style>

</style>
