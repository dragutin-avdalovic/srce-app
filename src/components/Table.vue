<template>
  <div>
      <table class="table">
        <thead>
        <tr>
          <th></th>
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
            <Checkbox></Checkbox>
          </td>
          <td>
            <span class="fix">{{item.info}}</span>
            <span class="color-fix weight-fix">{{item.email}}</span>
          </td>
          <td>
          <span class="fix">{{item.city}}</span>
          <span class="color-fix weight-fix">{{item.address}}</span>
          </td>
          <td>{{item.company}}</td>
          <td>{{item.date}}</td>
          <td>{{item.type}}</td>
          <td>
            <span class="red">{{item.amount}}</span>
          </td>
          <td>
        <div class="dropdown">
          <i class="fa fa-ellipsis-h" style="font-size:25px; color: #A2A1A1"></i>
        </div>
      </td>
        </tr>
        </tbody>
      </table>
    </div>

</template>
<script>
import Checkbox from '@/components/Checkbox'
export default {
  name: 'Table',
  data () {
    return {
      items: [
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'},
        { info: 'John Doe',
          email: 'email@gmail.com',
          city: 'Sarajevo',
          address: 'Paromlinska',
          company: 'Walter',
          date: '20.01.2018',
          type: 'svrha',
          amount: '100 KM'}
      ]
    }
  },
  components: {
    Checkbox
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

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
</style>
