<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div>
    <div class="row">
      <b-table  show-empty :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :items="items"
                :fields="fieldsA"
                :stacked="stacked"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                @filtered="onFiltered"
                @sort-changed="sortRoutine">
        <!-- A virtual composite column -->
        <template slot="actions" slot-scope="data">
          <div v-popover:list-dropdown.bottom v-on:click="select(data.item._id)">
            <i class="fa fa-ellipsis-h" style="font-size:25px; color: #A2A1A1; cursor: pointer"></i>
          </div>
        </template>
      </b-table>
    </div>
    <div class="row pagination_parent">
      <div class="pagination">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </div>
    </div>
    <popover ref="popoverRef" name="list-dropdown" class="list-dropdown">
      <div class="list_row" id="edit"  v-on:click="edit();">
        <i class="fa fa-pencil"></i>
        <p>Uredi</p>
      </div>
      <div class="list_row" id="delete" v-on:click="onDelete()">
        <i class="fa fa-trash-o"></i>
        <p>Izbriši</p>
      </div>
    </popover>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
export default {
  components: {
    Checkbox
  },
  props: ['items', 'fieldsA', 'stacked', 'seen', 'filter', 'backToStart'],
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      totalRows: this.items.length,
      sortDesc: true,
      sortBy: 'child.name',
      id: ''
    }
  },
  methods: {
    hide (modalId) {
      this.$modal.hide(modalId)
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      if (this.backToStart) {
        this.currentPage = 1
      }
    },
    select (id) {
      this.id = id
    },
    edit () {
      this.$emit('onEditClicked', this.id)
    },
    sortRoutine (ctx) {
      this.$emit('sortRoutine', ctx)
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";
  @import "../../assets/styles/general";

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
      tr{
          td{
            text-align: left;
            .bottom-cell-part
            {
              font-size: 1em;
              color: $text-gray;
              font-weight:500;
            }
            }
        }
    }
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
      li>a, li>span
      {
        color: #d9534f;
      }
      >.active>a, >.active>span, >.active>a:hover, >.active>span:hover, >.active>a:focus, >.active>span:focus
      {
        color: #fff;
        background-color: #d9534f;
        border-color: #d9534f;
        outline: none;
      }
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
    justify-content: flex-start;
    flex-wrap: wrap;
    @include font(1.7,600,$red);
    @include spacing-lr(p,0,em);
    width: 12em;
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
  .row_interactive
  {
    display: flex;
    /*flex-direction: row;*/
    /*align-items: center;*/
    @include spacing-tb(m,1,em);
    @include spacing-lr(m,0,em);
    .left-filter
    {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      margin-right: auto;
      .donators-title
      {
        color: $red;
        @include font(1.7,600,$red);
      }
    }
    .right-filter
    {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      min-width: 25em;
      margin-left: auto;
      .search-container
      {
        padding-right: 2em;
        .search
        {
          max-width: 20em;
          min-width: 15em;
          .btn-search
          {
            max-width: 3.5em;
            min-width: 3em;
            background-color: $red;
            i{
              text-align: center;
              font-size: 1em;
              color:$white;

            }
          }
        }
      }
      .new
      {
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
  }
  .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td
  {  vertical-align: middle !important;
  }
</style>
