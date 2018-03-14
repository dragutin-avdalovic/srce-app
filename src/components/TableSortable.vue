<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col col cols="6" md="6" lg="6" xl="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col col cols="6" md="6" lg="6" xl="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col col cols="6" md="6" lg="6" xl="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
      <b-col col cols="6" md="6" lg="6" xl="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>
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
      <template slot="namemail" slot-scope="data">
        <div class="top-cell-part">{{data.item.name}}</div>
        <div class="bottom-cell-part">{{data.item.email}}</div>
      </template>
      <template slot="cityaddress" slot-scope="data">
        <div class="top-cell-part">{{data.item.city}}</div>
        <div class="bottom-cell-part">{{data.item.address}}</div>
      </template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  props: ['items', 'fieldsA', 'stacked'],
  data () {
    return {
      currentPage: 1,
      perPage: 3,
      totalRows: this.items.length,
      pageOptions: [ 5, 10, 15 ],
      sortDesc: false,
      filter: null,
      modalInfo: { title: '', content: '' }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fieldsA
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
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
<style>

</style>
