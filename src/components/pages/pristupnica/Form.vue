<template>
  <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
    <div class="header-modal">
      <h3 class="form-header">Novi unos</h3>
      <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
    </div>
    <div class="row">
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
        <label class="control-label" >Ime i prezime*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('company') }" id="name" name="name" type="text" v-model="formData.name" class="form-control" placeholder="">
          <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('jmbg')}">
        <label class="control-label" for="jmbg">JMBG*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('jmbg') }" id="jmbg" name="jmbg" type="text" v-model="formData.jmbg" class="form-control" placeholder="">
          <span v-show="errors.has('jmbg')" class="help-block">{{ errors.first('jmbg') }}</span>
        </p>
      </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
          <label class="control-label" for="address">Adresa*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" id="address" name="address" type="text" v-model="formData.address" class="form-control" placeholder="">
            <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
          </p>
        </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('phone')}">
          <label class="control-label" for="phone">Kontakt telefon</label>
          <p :class="{ 'control': true }">
            <input :class="{'input': true, 'has-error': errors.has('phone') }" name="phone" type="text" v-model="formData.phone" class="form-control" id="phone" placeholder="">
            <span v-show="errors.has('phone')" class="help-block">{{ errors.first('phone') }}</span>
          </p>
        </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('email')}">
        <label class="control-label" for="email">Email*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
          <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('types')}">
        <label class="control-label" for="address">Vrsta člana*</label>
        <b-form-select v-validate="'required|'"
                       :class="{'input': true, 'has-error': errors.has('types') }"
                       v-model="formData.type"
                       :options="types" id="types" name="types">
        </b-form-select>
        <span v-show="errors.has('types')" class="help-block">{{ errors.first('types') }}</span>
      </div>
      <span v-if="formData.type == 0">
        <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
        <div class="divider"></div>
          </div>
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childName')}">
        <label class="control-label" >Ime i prezime djeteta*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childName') }" id="childName" name="childName" type="text" v-model="formData.childName" class="form-control" placeholder="">
          <span v-show="errors.has('childName')" class="help-block">{{ errors.first('childName') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('dateOfBirth')}">
        <label class="control-label" >Datum rođenja*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('dateOfBirth') }" max="3000-01-01" min="2000-01-01" id="dateOfBirth" name="dateOfBirth" type="date" v-model="formData.dateOfBirth" class="form-control" placeholder="">
          <span v-show="errors.has('dateOfBirth')" class="help-block">{{ errors.first('dateOfBirth') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('diagnose')}">
        <label class="control-label" >Dijagnoza*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('diagnose') }" id="diagnose" name="diagnose" type="text" v-model="formData.diagnose" class="form-control" placeholder="">
          <span v-show="errors.has('diagnose')" class="help-block">{{ errors.first('diagnose') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('dateOfDiagnose')}">
        <label class="control-label" >Datum dijagnoze*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('dateOfDiagnose') }" max="3000-01-01" min="2000-01-01" id="dateOfDiagnose" name="dateOfDiagnose" type="date" v-model="formData.dateOfDiagnose" class="form-control" placeholder="">
          <span v-show="errors.has('dateOfDiagnose')" class="help-block">{{ errors.first('dateOfDiagnose') }}</span>
        </p>
      </div>
      </span>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  form-group align-buttons">
          <TextField></TextField>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group align-buttons">
        <button v-on:click="addNotes('Add a note about the client',$event)" class="button_notes" type="submit"><p class="save-text">Add Notes</p></button>
        <button class="button_save" type="submit"><p class="save-text">Spremi</p></button>
      </div>
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
  props: ['formData', 'types'],
  data () {
    return {
      selected: null,
      dict: {
        custom: {
          childName: {
            required: 'The child name field is required.' // messages can be strings as well.
          },
          dateOfBirth: {
            required: 'The date of birth field is required.' // messages can be strings as well.
          },
          dateOfDiagnose: {
            required: 'The date of diagnose field is required.' // messages can be strings as well.
          }
        }
      }
    }
  },
  mounted: function () {
    this.$validator.localize('en', this.dict)
  },
  methods: {
    addNotes: function (message, event) {
      alert(message)
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
    float: left;
    display: flex;
    justify-content: center;
    .save-text
    {
      font-size: 1em;
      @include spacing-tb(m, 0, em);
    }
  }
  .button_save
  {  padding-left:0;
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
}
  .divider{
    background: $red;
    height: 1px;
    @include spacing-tb(m,1,em);
    width: 100%;
  }
  .mt{
    margin-top: 20px;
  }
  .align-buttons{
    margin-top: 0.8em!important;
    display: flex;
    justify-content: space-around;
    float: right;
    padding: 0;
  }
</style>
