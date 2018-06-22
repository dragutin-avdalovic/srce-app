<template>
  <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
    <div class="header-modal">
      <h3 class="form-header">Novi unos</h3>
      <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
    </div>
    <div class="row">
        <!--<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">-->
        <!--<label class="control-label" >Vrsta donatora</label>-->
        <!--<b-form-select v-model="formData.type" :options="type" id="type" name="type"></b-form-select>-->
        <!--<i class="fa fa-chevron-down"></i>-->
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
        <label class="control-label" for="name">Ime i prezime*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" id="name" name="name" type="text" v-model="formData.name" class="form-control" placeholder="">
          <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('dateOfBirth')}">
        <label class="control-label" >Datum rođenja*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('dateOfBirth') }" max="3000-01-01" min="2000-01-01" id="dateOfBirth" name="dateOfBirth" type="date" v-model="formData.dateOfBirth" class="form-control" placeholder="">
          <span v-show="errors.has('dateOfBirth')" class="help-block">{{ errors.first('dateOfBirth') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
        <label class="control-label" for="address">Adresa*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address" placeholder="">
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
      <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12">
        <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height padding" v-bind:class="{'has-error':errors.has('email')}">
          <label class="control-label" for="email">Email*</label>
          <p :class="{ 'control': true }">
            <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
            <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
          </p>
        </div>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('qualification')}">
        <label class="control-label" for="qualification">Stručna sprema*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('qualification') }" name="qualification" type="text" v-model="formData.qualification" class="form-control" id="qualification" placeholder="">
          <span v-show="errors.has('qualification')" class="help-block">{{ errors.first('qualification') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('profession')}">
        <label class="control-label" for="profession">Zanimanje*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('profession') }" name="profession" type="text" v-model="formData.profession" class="form-control" id="profession" placeholder="">
          <span v-show="errors.has('profession')" class="help-block">{{ errors.first('profession') }}</span>
        </p>
      </div>
      <div class="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6 form-group min-row-height">
        <label class="control-label">Prethodno volontersko iskustvo?*</label>
        <CompositeButton @onCheckedComposite="onCheckClicked($event)" :active="formData.volunteeredBefore"></CompositeButton>
      </div>
      <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('numberOfHours')}">
        <label class="control-label" for="numberOfHours">Navedite broj sati koji ste u mogućnosti mjesečno posvetiti radu u Udruženju:*</label>
        <p :class="{ 'control': true }">
          <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('numberOfHours') }" min="1" name="numberOfHours" type="number" v-model="formData.numberOfHours" class="form-control" id="numberOfHours" placeholder="">
          <span v-show="errors.has('numberOfHours')" class="help-block">{{ errors.first('numberOfHours') }}</span>
        </p>
      </div>
      <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('jobsToVolunteer')}">
        <label class="control-label">Na kojem od dole navedenih poslova biste voljeli dati svoj doprinos?*</label>
        <b-form-select v-validate="'required'"
                       :class="{'input': true, 'has-error': errors.has('jobsToVolunteer') }"
                       v-model="formData.jobsToVolunteer"
                       :options="types"
                       id="jobsToVolunteer" name="jobsToVolunteer"></b-form-select>
        <span v-show="errors.has('jobsToVolunteer')" class="help-block">{{ errors.first('jobsToVolunteer') }}</span>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group" v-if="editing">
        <TextField :notes="formData.notes" @onNoteChanged="onNoteChanged($event)" @onDelete="onDeleteNote($event, formData._id)" @onAddNote="onAddNote($event, formData._id)"></TextField>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group align-buttons">
        <button class="button_save" type="submit"><p class="save-text">Spremi</p></button>
      </div>
    </div>
  </form>
</template>

<script>
import CompositeButton from '@/components/partials/CompositeButton.vue'
import TextField from '@/components/partials/TextField'
export default{
  components: {CompositeButton, TextField},
  name: 'Form',
  props: ['formData', 'types', 'editing'],
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
          },
          numberOfHours: {
            required: 'The number of hours field is required.' // messages can be strings as well.
          },
          jobsToVolunteer: {
            required: 'The type of jobs field is required.' // messages can be strings as well.
          }
        }
      }
    }
  },
  mounted: function () {
    this.$validator.localize('en', this.dict)
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
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.save()
        } else {
          this.$emit('clearForm', this.formData)
        }
      })
    },
    onCheckClicked: function (event) {
      this.formData.volunteeredBefore = event
    },
    closeModal: function () {
      this.$emit('onModalClose', this.formData)
    },
    onNoteChanged (event) {
      this.note = event
    },
    onDeleteNote (event, id) {
      this.$emit('onDelete', {
        noteId: event,
        id: id
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
}
.padding{
  padding: 0px!important;
}
.horizontal_line{
  background: $red;
  height: 1px;
  @include spacing-tb(m,1,em);
  width: 100%;
}
.align-buttons{
  /*margin-top: 0.8em!important;*/
  display: flex;
  justify-content: space-around;
}
</style>
