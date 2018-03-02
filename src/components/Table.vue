<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th></th>
          <th>Osnovni podaci</th>
          <th>Adresa</th>
          <th>Naziv kompanije</th>
          <th>Datum</th>
          <th>Svrha</th>
          <th>Iznos</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item of items" v-bind:key="item">
          <th scope="row">1</th>
          <td>{{item.info}}</td>
          <td>{{item.address}}</td>
          <td>{{item.company}}</td>
          <td>{{item.date}}</td>
          <td>{{item.type}}</td>
          <td>{{item.amount}}</td>
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
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 100 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 300 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 300 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 3500 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 300 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 6600 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 300 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 4400 },
        { info: 'John Doe', address: 'Paromlinska', company: 'Walter', date: '20.01.2018', type: 'svrha', amount: 3010 }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
