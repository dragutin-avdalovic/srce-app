<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <div class="container">
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
        </tr>
        </thead>
        <tbody>
        <tr v-for="item of items" v-bind:key="item">
          <td scope="row">1</td>
          <td>
            <span class="fix">{{item.info}}</span>
            <span class="color-fix">{{item.email}}</span>
          </td>
          <td>
          <span class="fix">{{item.info}}</span>
          <span class="color-fix">{{item.email}}</span>
          </td>
          <td>{{item.company}}</td>
          <td>{{item.date}}</td>
          <td>{{item.type}}</td>
          <td>
            <span class="red">{{item.amount}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Table',
  data () {
    return {
      items: [
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', email: 'email@gmail.com', city: 'Sarajevo', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  table {
    font-family: Open Sans;
    font-weight: bold;
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
      vertical-align: middle;
    }
  }
  .fix{
    display: flex;
    color: #333333;
  }
  .color-fix {
    color: #A2A1A1;
  }
  .red{
    color: #EB2D3C;
  }
</style>
