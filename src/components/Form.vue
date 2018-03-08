<template>
    <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
      <div slot="top-right">
        <button @click="$modal.hide('modal_entry')" class="modal-close">
          X
        </button>
      </div>
      <h3 class="form-header">Novi unos</h3>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
          <label class="control-label" >Vrsta donatora</label>
          <b-form-select v-model="formData.type" :options="type" id="type" name="type"></b-form-select>
          <i class="fa fa-chevron-down"></i>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('company')}">
          <label class="control-label" for="company">Naziv kompanije*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('company') }" id="company" name="cause" type="text" v-model="formData.company" class="form-control" placeholder="">
            <span v-show="errors.has('company')" class="help-block">{{ errors.first('company') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
          <label class="control-label" for="name">Ime i prezime*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
            <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('email')}">
          <label class="control-label" for="email">Email*</label>
          <p :class="{ 'control': true }">
          <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
          <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
          <label class="control-label" for="address">Adresa*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address" placeholder="">
            <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
          <label class="control-label" for="address">Grad*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
            <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('amount')}">
          <label class="control-label" for="amount">Iznos donacije*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('amount') }" name="amount" type="number" v-model="formData.amount" class="form-control donation_amount" id="amount" placeholder="00">
            <span v-show="errors.has('amount')" class="help-block">{{ errors.first('amount') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('date')}">
          <label class="control-label" for="date">Datum*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('date') }" name="date" type="date" v-model="formData.date" class="form-control" id="date" placeholder="">
            <span v-show="errors.has('date')" class="help-block">{{ errors.first('date') }}</span>
          </p>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('cause')}">
          <label class="control-label" for="cause">Svrha donacije*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('cause') }" id="cause" name="cause" type="text" v-model="formData.cause" class="form-control" placeholder="">
            <span v-show="errors.has('cause')" class="help-block">{{ errors.first('cause') }}</span>
          </p>
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
  props: ['formData'],
  data () {
    return {
      type: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 'Institucija', text: 'Institucija' },
        { value: 'Fizičko lice', text: 'Fizičko lice' },
        { value: 'Pravno lice', text: 'Pravno lice' }
      ],
      selected: null
    }
  },
  methods: {
    save: function () {
      this.$emit('onDataEmit', this.formData)
      console.log(this.formData)
    },
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.save()
        }
        else {
        }
      })
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
      @include spacing-tb(m, 1.5, em);
    }
    .form-control
    {
      height:2.875em !important;
    }
    /* remove the original arrow */
    select
    {
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
      }
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
