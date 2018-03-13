<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="row row_interactive">
      <div class="left-filter">
      <button v-dropdown:list-dropdown-2.bottom class="donators-btn">
        <div class="donators-label">Donatori</div>
        <i class="fa fa-chevron-down donators-chevron"></i>
      </button>
      <dropdown  v-if="seen" name="list-dropdown-2" class="list-dropdown-2">
        <div class="list_row">
          <p>Institucija</p>
        </div>
        <div class="list_row">
          <p>Fizičko lice</p>
        </div>
        <div class="list_row">
          <p>Pravno lice</p>
        </div>
      </dropdown>
      </div>
      <div class="right-button">
        <button v-on:click="show()" class="heart-button-new"><span class="new-text">Novi unos</span></button>
      </div>
    </div>
    <div class="row">
      <form class="search form-inline my-2 my-lg-0">
        <input v-model="filter" class="form-control mr-sm-2" type="search" placeholder="Type to Search" aria-label="Search">
        <button class="btn-search btn my-2 my-sm-0" :disabled="!filter" @click="filter = ''" ><i class="fa fa-trash-o"></i></button>
      </form>
    </div>
    <div class="row">
      <b-table  show-empty :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :items="items"
                :fields="fieldsA"
                :stacked="stacked"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                @filtered="onFiltered">
        <!--<template slot="table-caption">-->
          <!--<p>-->
            <!--{{totalRows}}-->
            <!--Sorting By: <b>{{ sortBy }}</b>,-->
            <!--Sort Direction: <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>-->
          <!--</p>-->
        <!--</template>-->
        <!-- A virtual composite column -->
        <template slot="namemail" slot-scope="data">
          <div class="top-cell-part">{{data.item.name}}</div>
          <div class="bottom-cell-part">{{data.item.email}}</div>
        </template>
        <template slot="cityaddress" slot-scope="data">
          <div class="top-cell-part">{{data.item.city}}</div>
          <div class="bottom-cell-part">{{data.item.address}}</div>
        </template>
        <template slot="actions" slot-scope="data">
          <div v-dropdown:list-dropdown.bottom v-on:click="select(data.item._id)">
            <i class="fa fa-ellipsis-h" style="font-size:25px; color: #A2A1A1"></i>
          </div>
        </template>
      </b-table>
    </div>
    <div class="row pagination_parent">
      <div class="pagination">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </div>
    </div>
    <dropdown  v-if="seen" name="list-dropdown" class="list-dropdown">
      <div class="list_row" id="edit"  v-on:click="edit()">
        <i class="fa fa-pencil"></i>
        <p>Uredi</p>
      </div>
      <div class="list_row" id="delete" v-on:click="onDelete()">
        <i class="fa fa-trash-o"></i>
        <p>Izbriši</p>
      </div>
    </dropdown>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'

export default {
  components: {Checkbox},
  props: ['items', 'fieldsA', 'stacked', 'seen'],
  data () {
    return {
      currentPage: 1,
      perPage: 5,
      totalRows: this.items.length,
      sortDesc: false,
      filter: null,
      sortBy: 'amount',
      id: ''
    }
  },
  methods: {
    show () {
      this.$modal.show('modal_entry')
    },
    hide () {
      this.$modal.hide('modal_entry')
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    select (id) {
      this.id = id
    },
    edit () {
      this.$emit('clicked', this.id)
    },
    onDelete () {
      this.$emit('delete', this.id)
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
  @import "../assets/general.scss";
  td[data-label="IZNOS (KM)"] {
    color: $red;
  }
  table {
    margin-top: 5vh;
    width: 100%;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1.2em;
    color: $text-dark;
    thead{
      th{
        border: none;
        color: $text-gray;
      }
    }
    tbody{
      box-shadow: 0 2px 5px $text-gray;
      border-collapse: collapse;
      td{
        text-align: left;
        vertical-align: center !important;
        .bottom-cell-part
        {
          font-size: 1em;
          color: $text-gray;
          font-weight:500;
        }
      }
      }
  }
  .search
  {
    float:right;
  }
  .fix{
    display: flex;
    color: #333333;
  }
  .color-fix {
    color: #A2A1A1;
  }
  .weight-fix{
    font-weight: normal;
    font-size: 14px;
  }
  .red{
    color: #EB2D3C;
  }
  button{
    background-color: transparent;
    width: 100px;
    :hover{
      border-color: white;
    }
  }
  .list-dropdown
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    .list_row {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      cursor: pointer;
      @include spacing-tb('p', 0.5, em);
      @include spacing-l('p', 1.5, em);
      p {
        @include spacing-b('m', 0, em);
        @include spacing-l('p', 1, em);
        @include font(1.1, em, $text-dark);
      }
      i {
        @include font(1.2, em, $text-dark);
      }
      &:hover
      {
        background-color: $text-gray;
      }
    }
  }
  .all{
    padding: 0 0 0 8px;
  }
  .pagination_parent
  {
    display: flex;
    align-items: center;
    justify-content: center;
    .pagination
    {
      margin: 5px 0;
    }
  }
  .list-dropdown-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .list_row {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      cursor: pointer;
      @include spacing-tb('p', 0.5, em);
      @include spacing-l('p', 1.5, em);
      p {
        @include spacing-b('m', 0, em);
        @include spacing-l('p', 1, em);
        @include font(1.1, em, $text-dark);
      }
      i {
        @include font(1.2, em, $text-dark);
      }
      &:hover {
        background-color: $text-gray;
      }
    }
  }
  .donators-btn
  {
    color: $red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @include font(1.7,600,$red);
    width: 6em;
    outline: none;
    border: none;
    .donators-label
    {
      @include spacing-r(p,0.5,em);
    }
    .donators-chevron
    {
      display: flex;
    }
    &:focus
    {
      outline: none;
      border: none;
    }
  }
  .btn-search
  {
    background-color: $red;
    i{
      font-size: 1.2em;
      color: $white;
    }
  }
  .row_interactive
  {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 1em 15px !important;
    .left-filter
    {
      display: flex;
      flex: 1;
      justify-content: flex-start;
    }
    .right-button
    {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      .heart-button-new
      {
        @extend .heart-button;
        width: 10em;
        @include spacing-tb('p',1, em);
        @include spacing-lr('p',0, em);
        .new-text
        {
          width: 100%;
        }
      }
    }
  }
</style>
