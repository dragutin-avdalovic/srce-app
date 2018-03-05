<template>
    <form class="newEntryForm heartForm">
      <h3 class="form-header">Novi unos</h3>
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="control-label" for="typeOfDonation">Vrsta donatora</label>
          <select class="form-control" id="typeOfDonation" required="">
            <option value="Institucija">Institucija</option>
            <option value="Fizičko lice">Fizičko lice</option>
            <option value="Pravno lice">Pravno lice</option>
          </select>
          <i class="fa fa-chevron-down"></i>
          <div class="help-block">
            Molimo unesite validan tip donacije.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="ime">Ime i prezime*</label>
          <input type="text" class="form-control" id="ime" placeholder="">
          <div class="help-block">
            Ime i prezime je obavezno.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="email">Email*</label>
          <input type="text" class="form-control" id="email" placeholder="">
          <div class="help-block">
            Email je obavezan.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="adresa">Adresa*</label>
          <input type="text" class="form-control" id="adresa" placeholder="">
          <div class="help-block">
            Adresa je obavezna.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="grad">Grad*</label>
          <input type="text" class="form-control" id="grad" placeholder="">
          <div class="help-block">
            Grad je obavezan.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="iznos_donacije">Iznos donacije*</label>
          <input type="number" class="form-control iznos_donacije" id="iznos_donacije" placeholder="00">
          <div class="help-block">
           Iznos donacije je obavezan.
          </div>
        </div>
        <div class="col-md-6 form-group">
          <label class="control-label" for="datum">Datum*</label>
          <input type="date" class="form-control" id="datum" placeholder="">
          <div class="help-block">
            Datum je obavezan.
          </div>
        </div>
        <div class="col-md-12 form-group">
          <label class="control-label" for="svrha_donacije">Svrha donacije*</label>
          <input type="text" class="form-control" id="svrha_donacije" placeholder="">
          <div class="help-block">
            Svrha donacije je obavezna.
          </div>
        </div>
      </div>
      <button class="btn" type="submit">Spremi</button>
    </form>
</template>

<script>
export default{
  name: 'Form',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/mixins.scss";
  @import "../assets/form.scss";

  .newEntryForm {
    min-width: 200px;
    max-width: 640px;
    @include spacing-lr(m, auto, '');
    @include spacing-lr(p, 3, em);
    @include spacing-tb(p, 1, em);
    .form-header {
      @include font(1.5, 600, red);
      @include spacing-tb(m, 0.5, em);
    }
    /* remove the original arrow */
    select.input {
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    select + i.fa {
      float: right;
      margin-top: -30px;
      margin-right: 5px;
      pointer-events: none;
      background-color: #fff;
      padding-right: 5px;
      @include font(1.2, 500, red);
    }
    .iznos_donacije
    {
      text-align: center;
    }
  }
</style>
