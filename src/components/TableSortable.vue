<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="search">
      <input v-model="filter" placeholder="Type to Search" />
      <button :disabled="!filter" @click="filter = ''">Clear</button>
    </div>
    <b-table @update="onChildUpdate" show-empty :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="items"
             :fields="fieldsA"
             :stacked="stacked"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             @filtered="onFiltered"
             hover outlined>
      <template slot="table-caption">
        <p>
          {{totalRows}}
          Sorting By: <b>{{ sortBy }}</b>,
          Sort Direction: <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
        </p>
      </template>
      <!-- A virtual composite column -->
      <template slot="check" slot-scope="data">
        <Checkbox ></Checkbox>
      </template>
      <template slot="namemail" slot-scope="data">
        <div class="top-cell-part">{{data.item.name}}</div>
        <div class="bottom-cell-part">{{data.item.email}}</div>
      </template>
      <template slot="cityaddress" slot-scope="data">
        <div class="top-cell-part">{{data.item.city}}</div>
        <div class="bottom-cell-part">{{data.item.address}}</div>
      </template>
      <template slot="actions" slot-scope="row">
        <div v-dropdown:list-dropdown.bottom @click.stop="select(item._id)">
          <i class="fa fa-ellipsis-h" style="font-size:25px; color: #A2A1A1"></i>
        </div>
      </template>
    </b-table>
    <div class="pagination">
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import Form from './Form'
export default {
  components: {Form},
  props: ['items', 'fieldsA', 'stacked'],
  data () {
    return {
      currentPage: 1,
      perPage: 5,
      totalRows: this.items.length,
      sortDesc: false,
      filter: null
    }
  },
  computed: {
  },
  methods: {
    onChildUpdate (items) {
      this.data = items
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
<style scoped="scss">
  .search
  {
    float:right;
  }
  .pagination
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
