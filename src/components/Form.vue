<template>
    <form class="newEntryForm heartForm">
      <div slot="top-right">
        <button @click="$modal.hide('modal_entry')" class="modal-close">
          ❌
        </button>
      </div>
      <h3 class="form-header">Novi unos</h3>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
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
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="name">Ime i prezime*</label>
          <input type="text" class="form-control" id="name" placeholder="">
          <div class="help-block">
            Ime i prezime je obavezno.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="email">Email*</label>
          <input type="text" class="form-control" id="email" placeholder="">
          <div class="help-block">
            Email je obavezan.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="address">Adresa*</label>
          <input type="text" class="form-control" id="address" placeholder="">
          <div class="help-block">
            Adresa je obavezna.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="city">Grad*</label>
          <input type="text" class="form-control" id="city" placeholder="">
          <div class="help-block">
            Grad je obavezan.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="donation_amount">Iznos donacije*</label>
          <input type="number" class="form-control donation_amount" id="donation_amount" placeholder="00">
          <div class="help-block">
           Iznos donacije je obavezan.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 form-group">
          <label class="control-label" for="date">Datum*</label>
          <input type="date" class="form-control" id="date" placeholder="">
          <div class="help-block">
            Datum je obavezan.
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
          <label class="control-label" for="purposeOfDonation">Svrha donacije*</label>
          <input type="text" class="form-control" id="purposeOfDonation" placeholder="">
          <div class="help-block">
            Svrha donacije je obavezna.
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
          <button class="button_save" type="submit">Spremi</button>
        </div>
      </div>
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
  @import "../assets/general.scss";

  .newEntryForm {
    @include spacing-lr(m, auto, '');
    @include spacing-lr(p, 3, em);
    @include spacing-tb(p, 1, em);
    .form-header {
      @include font(1.5, 600, $red);
      @include spacing-tb(m, 1, em);
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
      @include font(1.2, 500, $red);
    }
    .donation_amount
    {
      text-align: center;
    }
    .button_save
    {
      @extend .heart-button;
      float: right;
    }
    .modal-close
    {
      background: transparent;
      float: right;
      border: none;
      @include font(2, 500, $red);
      margin-right: -1em;
      margin-top: -0.3em;
      &:focus
      {
        border: none;
        outline: none;
      }
    }
  }
</style>
