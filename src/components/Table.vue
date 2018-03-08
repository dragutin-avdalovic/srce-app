<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
      <table class="table">
        <thead>
        <tr>
          <th class="all">
            <Checkbox @onChecked="selectAll()"></Checkbox>
          </th>
          <th>OSNOVNI PODACI</th>
          <th>ADRESA</th>
          <th>NAZIV KOMPANIJE</th>
          <th>DATUM</th>
          <th>SVRHA</th>
          <th>IZNOS</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) of items" :key="index">
          <td scope="row">
            <Checkbox :checked="item.checked" @onChecked="onCheckClicked(item._id)"></Checkbox>
          </td>
          <td>
            <span class="fix">{{item.name}}</span>
            <span class="color-fix weight-fix">{{item.email}}</span>
          </td>
          <td>
          <span class="fix">{{item.city}}</span>
          <span class="color-fix weight-fix">{{item.address}}</span>
          </td>
          <td>{{item.company}}</td>
          <td>{{item.date}}</td>
          <td>{{item.cause}}</td>
          <td>
            <span class="red">{{item.amount}}</span>
          </td>
          <td>
        <div v-dropdown:list-dropdown.bottom v-on:click="select(item._id)">
          <i class="fa fa-ellipsis-h" style="font-size:25px; color: #A2A1A1"></i>
        </div>
      </td>
        </tr>
        </tbody>
      </table>
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
  name: 'Table',
  props: ['items', 'seen'],
  data () {
    return {
      id: ''
    }
  },
  methods: {
    selectAll () {
      this.items.map(item => {
        item.checked = !item.checked
        return item
      })
    },
    onCheckClicked (id) {
      this.items.map(item => {
        if (item._id === id) {
          item.checked = true
        }
        return item
      })
    },
    select (id) {
      this.id = id
    },
    edit () {
      console.log(this.id)
      this.$emit('clicked', this.id)
    },
    onDelete () {
      console.log(this.id)
      this.$emit('delete', this.id)
    }
  },
  components: {
    Checkbox
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";
  table {
    margin-top: 5vh;
    width: 100%;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 16px;
    color: #333333;
    thead{
      color: #A2A1A1;
      th{
        border: none;
        vertical-align: middle;
      }
    }
    tbody{
      box-shadow: 0 2px 5px gray;
      border-collapse: collapse;
    }
    td{
      vertical-align: middle !important;
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
</style>
