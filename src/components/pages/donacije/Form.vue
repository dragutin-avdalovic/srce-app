<template>
  <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
    <div class="header-modal">
      <h3 class="form-header">Novi unos</h3>
      <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
    </div>
    <div class="row">
      <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height donators-group" v-bind:class="{'has-error':errors.has('type')}">
        <label class="control-label">Vrsta donatora</label>
        <p :class="{ 'control': true }">
          <b-form-select v-on:change="onChange" v-validate="'required'" :class="{'select': true, 'has-error': errors.has('type') }"  v-model="formData.type" :options="this.type" id="type" name="type"></b-form-select>
          <i class="fa fa-chevron-down"></i>
          <span v-show="errors.has('type')" class="help-block">{{ errors.first('type') }}</span>
        </p>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-show="showRequiredTypeCompany(formData.type)" v-bind:class="{'has-error':errors.has('company')}">
        <label class="control-label" for="company">Naziv kompanije</label>
        <p :class="{ 'control': true }">
          <input v-validate="''" :class="{'input': true, 'has-error': errors.has('company') }" id="company" name="company" type="text" v-model="formData.company" class="form-control" placeholder="">
          <span v-show="errors.has('company')" class="help-block">{{ errors.first('company') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-show="showRequiredTypePerson(formData.type)" v-bind:class="{'has-error':errors.has('name')}">
        <label class="control-label" for="name">Ime i prezime</label>
        <p :class="{ 'control': true }">
          <input v-validate="''" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
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
          <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('amount') }" name="amount" type="number" min="1" v-model="formData.amount" class="form-control donation_amount" id="amount" placeholder="00">
          <span v-show="errors.has('amount')" class="help-block">{{ errors.first('amount') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('date')}">
        <label class="control-label" for="date">Datum*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('date') }" name="date" type="date" v-model="formData.date" class="form-control" id="date" placeholder="" max="9999-01-01">
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
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group" v-if="editing">
        <TextField :notes="formData.notes" @onNoteChanged="onNoteChanged($event)" @onAddNote="onAddNote($event, formData._id)"></TextField>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group align-buttons">
        <button class="button_save" type="submit"><p class="save-text">Spremi</p></button>
      </div>
    </div>
  </form>
</template>

<script>
import TextField from '@/components/partials/TextField'
export default{
  components: {
    TextField
  },
  name: 'Form',
  props: ['formData', 'editing'],
  data () {
    return {
      note: '',
      type: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 1, text: 'Institucija' },
        { value: 2, text: 'Fizičko lice' },
        { value: 3, text: 'Pravno lice' }
      ],
      selected: null,
      requiredType: null
    }
  },
  methods: {
    onAddNote: function (event, id) {
      this.$emit('onAddNote', {
        id: id,
        note: event
      })
    },
    save: function () {
      console.log(this.formData)
      this.$emit('onDataEmit', this.formData)
    },
    closeModal: function () {
      this.$emit('onModalClose', this.formData)
    },
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.save()
        } else {
          this.$emit('clearForm', this.formData)
        }
      })
    },
    onNoteChanged (event) {
      this.note = event
    },
    showRequiredTypeCompany: function (event) {
      if (event === 1 || event === 3) {
        return true
      } else if (event === 2) {
        return false
      } else if (event === null) {
        return true
      }
    },
    showRequiredTypePerson: function (event) {
      if (event === 1 || event === 3) {
        return false
      } else if (event === 2) {
        return true
      } else if (event === null) {
        return true
      }
    },
    onChange: function () {
      this.formData.name = ''
      this.formData.company = ''
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/styles/mixins";
@import "../../../assets/styles/form";
@import "../../../assets/styles/general";

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
  .button_notes
  {
    /*visibility: hidden;*/
    padding-left:0;
    padding-right:0;
    @extend .heart-button;
    float: right;
    display: flex;
    justify-content: center;
    .save-text
    {
      font-size: 1em;
      @include spacing-tb(m, 0, em);
    }
  }
  .button_save
  {
    margin-top: 0.5em;
    padding-left:0;
    padding-right:0;
    @extend .heart-button;
    float: right;
    display: flex;
    justify-content: center;
    .save-text
    {
      font-size: 1em;
      @include spacing-tb(m, 0, em);
    }
  }
  .align-buttons{
    /*margin-top: 0.8em!important;*/
    display: flex;
    justify-content: space-around;
  }
}
</style>
