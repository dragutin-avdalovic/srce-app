<template>
  <div>
    <div class="content container">
      <div class="row row_interactive">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="left-filter">
            <div class="donators-title">
              <div class="donators-label">Socijalna Karta</div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="right-filter">
            <div class="search-container">
              <div class="input-group search">
                <input type="search" v-model="filter" class="form-control input_search" placeholder="Type to Search">
                <span class="input-group-btn">
                <button class="btn btn-search" :disabled="!filter" @click="filter = ''"><i
                  class="fa fa-times"></i></button>
              </span>
              </div>
            </div>
            <div class="new">
              <button v-on:click="openModal('modal_entry')" class="heart-button-new"><span class="new-text">Novi unos</span></button>
            </div>
          </div>
        </div>
      </div>
      <TableSortable :items="items" :fieldsA="fields" :stacked="stacked" :seen="seen" @onEditClicked="fillFormData"  @onConfirmDelete="showDeleteModal($event)" @sortRoutine="sort($event)" :filter="filter"></TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData"
              @onModalClose="closeModal('modal_entry')"
              @onSetCheckBox="setCheckBox($event)"
              @onSetInput="setInput($event)"
              @onSaveFamilyMember="saveFamilyMember($event)"
              @onSliceFamilyMember="sliceFamilyMember($event)"
              @fillMe="fillData($event)"
              :formData="formData"
              :backToStart="backToStart"
              :meritalStatus="meritalStatus"
              :familyRelations="familyRelations"
              :familyResidence="familyResidence"
              :housingConditions="housingConditions"
              :residentialBuilding="residentialBuilding"
              :healthState="healthState"
              :familyMembers="familyMembersEditable"></Form>
      </modal>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onAddNote="onAddNote" @onModalClose="closeModal('modal_entry')" :formData="formData" :editing="editing"></Form>
      </modal>
      <modal name="confirm_delete" height="auto">
        <Confirmation @onConfirmDelete="confirmDeletion($event)"></Confirmation>
      </modal>
    </div>
  </div>
</template>

<script>
import TableSortable from '@/components/partials/TableSortable'
import Confirmation from '@/components/partials/Confirmation'
import Form from './Form'
import Main from '@/services/Main'
import * as _ from 'lodash'
// Load the full build.
export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Form,
    Confirmation
  },
  data () {
    return {
      editing: false,
      backToStart: false,
      deletionId: null,
      msg: 'Srce za djecu',
      filter: '',
      items: [],
      stacked: 'md',
      seen: 'true',
      familyMembersEditable: null,
      meritalStatus: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Neoženjen/Neudata' },
        { value: 1, text: 'Oženjen/Udata' },
        { value: 2, text: 'Udovac/ica' },
        { value: 3, text: 'Razveden/a' },
        { value: 4, text: 'Ostalo' }
      ],
      familyRelations: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Dobri' },
        { value: 1, text: 'Odlični' },
        { value: 2, text: 'Problematični' }
      ],
      familyResidence: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Kući' },
        { value: 1, text: 'Stanu' },
        { value: 2, text: 'Ostalo' }
      ],
      housingConditions: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Dobri' },
        { value: 1, text: 'Odlični' },
        { value: 2, text: 'Zadovoljavajući' }
      ],
      residentialBuilding: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'U sopstvenom vlasništvu' },
        { value: 1, text: 'Iznajmljen' },
        { value: 2, text: 'Vlasništvu roditelja/srodnika' },
        { value: 3, text: 'Ostalo' }
      ],
      healthState: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 0, text: 'Izliječeno' },
        { value: 1, text: 'Završilo sa liječenjem i održavanjem' },
        { value: 2, text: 'Na održavanju' },
        { value: 3, text: 'Ostalo' }
      ],
      formData: {
        child: {
          name: '',
          jmbg: null,
          dateOfBirth: '',
          placeOfBirth: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          goingToSchool: false,
          goingToKindergarden: false,
          diagnosed: false,
          diagnose: '',
          dateOfDiagnose: '',
          note: '',
          healthState: null
        },
        mother: {
          name: '',
          jmbg: null,
          citizenId: '',
          issuedBy: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          tel: '',
          mob: '',
          working: false,
          position: '',
          qualifications: '',
          nameOfEmployer: ''
        },
        father: {
          name: '',
          jmbg: null,
          citizenId: '',
          issuedBy: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          tel: '',
          mob: '',
          working: false,
          position: '',
          qualifications: '',
          nameOfEmployer: ''
        },
        family: {
          meritalStatus: null,
          familyMembers: [],
          chronicalDecease: false,
          chronicalDeceaseText: '',
          disability: false,
          disabilityText: '',
          specialNeeds: false,
          familyRelations: null,
          incomeBySalary: false,
          incomeBySalaryText: '',
          familyPension: false,
          familyPensionText: '',
          unemploymentBenefit: false,
          unemploymentBenefitText: '',
          disabilityCompensation: false,
          disabilityCompensationText: '',
          compensationForTheSocialProtectionSystem: false,
          compensationForTheSocialProtectionSystemText: '',
          otherIncome: false,
          otherIncomeText: '',
          familyResidence: null,
          housingConditions: null,
          residentialBuilding: null
        }
      },
      fields: [
        {
          key: 'child[name]',
          label: 'IME I PREZIME',
          sortable: true
        },
        {
          key: 'child[jmbg]',
          label: 'JMBG',
          sortable: true
        },
        {
          key: 'child[dateOfBirth]',
          label: 'DATUM ROĐENJA',
          sortable: true
        },
        {
          key: 'father[name]',
          label: 'OTAC DJETETA',
          sortable: true
        },
        {
          key: 'mother[name]',
          label: 'MAJKA DJETETA',
          sortable: true
        },
        {
          key: 'father[tel]',
          label: 'KONTAKT TELEFON',
          sortable: true
        },
        { key: 'actions', label: '' }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    onAddNote (obj) {
      console.log(obj)
      Main.methods.putModule(Main.data().socialCard + obj.id + '/notes', { text: obj.note }, (data) => {
        console.log(data)
        if (data.message === 'successfully added note') {
          this.backToStart = true
          this.getData()
        }
      })
    },
    setCheckBox (event) {
      switch (event.field) {
        case 'goingToSchool':
          this.formData.child.goingToSchool = !this.formData.child.goingToSchool
          break
        case 'goingToKindergarden':
          this.formData.child.goingToKindergarden = !this.formData.child.goingToKindergarden
          break
        case 'fatherWorking':
          this.formData.father.working = !this.formData.father.working
          break
        case 'motherWorking':
          this.formData.mother.working = !this.formData.mother.working
          break
        case 'chronicalDecease':
          this.formData.family.chronicalDecease = !this.formData.family.chronicalDecease
          if (this.formData.family.chronicalDecease === false) {
            this.formData.family.chronicalDeceaseText = ''
          }
          break
        case 'disability':
          this.formData.family.disability = !this.formData.family.disability
          if (this.formData.family.disability === false) {
            this.formData.family.disabilityText = ''
          }
          break
        case 'specialNeeds':
          this.formData.family.specialNeeds = !this.formData.family.specialNeeds
          break
        case 'incomeBySalary':
          this.formData.family.incomeBySalary = !this.formData.family.incomeBySalary
          if (this.formData.family.incomeBySalary === false) {
            this.formData.family.incomeBySalaryText = ''
          }
          break
        case 'familyPension':
          this.formData.family.familyPension = !this.formData.family.familyPension
          if (this.formData.family.familyPension === false) {
            this.formData.family.familyPensionText = ''
          }
          break
        case 'unemploymentBenefit':
          this.formData.family.unemploymentBenefit = !this.formData.family.unemploymentBenefit
          if (this.formData.family.unemploymentBenefit === false) {
            this.formData.family.unemploymentBenefitText = ''
          }
          break
        case 'disabilityCompensation':
          this.formData.family.disabilityCompensation = !this.formData.family.disabilityCompensation
          if (this.formData.family.disabilityCompensation === false) {
            this.formData.family.disabilityCompensationText = ''
          }
          break
        case 'compensationForTheSocialProtectionSystem':
          this.formData.family.compensationForTheSocialProtectionSystem = !this.formData.family.compensationForTheSocialProtectionSystem
          if (this.formData.family.compensationForTheSocialProtectionSystem === false) {
            this.formData.family.compensationForTheSocialProtectionSystemText = ''
          }
          break
        case 'otherIncome':
          this.formData.family.otherIncome = !this.formData.family.otherIncome
          if (this.formData.family.otherIncome === false) {
            this.formData.family.otherIncomeText = ''
          }
          break
        default:
          console.log('no such field')
      }
    },
    setInput (event) {
      switch (event.field) {
        case 'chronicalDeceaseText':
          this.formData.family.chronicalDeceaseText = event.event
          break
        case 'disabilityText':
          this.formData.family.disabilityText = event.event
          break
        case 'incomeBySalaryText':
          this.formData.family.incomeBySalaryText = event.event
          break
        case 'familyPensionText':
          this.formData.family.familyPensionText = event.event
          break
        case 'unemploymentBenefitText':
          this.formData.family.unemploymentBenefitText = event.event
          break
        case 'disabilityCompensationText':
          this.formData.family.disabilityCompensationText = event.event
          break
        case 'compensationForTheSocialProtectionSystemText':
          this.formData.family.compensationForTheSocialProtectionSystemText = event.event
          break
        case 'otherIncomeText':
          this.formData.family.otherIncomeText = event.event
          break
        default:
          console.log('no such field')
      }
    },
    clearData () {
      this.formData = {
        child: {
          name: '',
          jmbg: null,
          dateOfBirth: '',
          placeOfBirth: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          goingToSchool: false,
          goingToKindergarden: false,
          diagnosed: false,
          diagnose: '',
          dateOfDiagnose: '',
          note: '',
          healthState: null
        },
        mother: {
          name: '',
          jmbg: null,
          citizenId: '',
          issuedBy: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          tel: '',
          mob: '',
          working: false,
          position: '',
          qualifications: '',
          nameOfEmployer: ''
        },
        father: {
          name: '',
          jmbg: null,
          citizenId: '',
          issuedBy: '',
          municipality: '',
          city: '',
          address: '',
          postNumber: '',
          tel: '',
          mob: '',
          working: false,
          position: '',
          qualifications: '',
          nameOfEmployer: ''
        },
        family: {
          meritalStatus: null,
          familyMembers: [],
          chronicalDecease: false,
          chronicalDeceaseText: '',
          disability: false,
          disabilityText: '',
          specialNeeds: false,
          familyRelations: null,
          incomeBySalary: false,
          incomeBySalaryText: '',
          familyPension: false,
          familyPensionText: '',
          unemploymentBenefit: false,
          unemploymentBenefitText: '',
          disabilityCompensation: false,
          disabilityCompensationText: '',
          compensationForTheSocialProtectionSystem: false,
          compensationForTheSocialProtectionSystemText: '',
          otherIncome: false,
          otherIncomeText: '',
          familyResidence: null,
          housingConditions: null,
          residentialBuilding: null
        }
      }
    },
    show (modalId) {
      this.$modal.show(modalId)
    },
    hide (modalId) {
      this.$modal.hide(modalId)
    },
    openModal (modalId, clear = false) {
      this.show(modalId)
      if (clear) {
        this.clearData()
      }
    },
    closeModal (modalId) {
      this.hide(modalId)
      this.clearData()
    },
    fillData () {
      Object.assign({}, this.formData, {
        child: {
          name: 'Test',
          jmbg: 123456,
          dateOfBirth: '2018-01-01',
          placeOfBirth: 'Test',
          municipality: 'Test',
          city: 'Test',
          address: 'Test',
          postNumber: '12345',
          goingToSchool: true,
          goingToKindergarden: true,
          diagnosed: true,
          diagnose: 'Test',
          dateOfDiagnose: '2018-01-01',
          note: 'Test',
          healthState: 2
        },
        mother: {
          name: 'Test',
          jmbg: 123456,
          citizenId: 'Test',
          issuedBy: 'Test',
          municipality: 'Test',
          city: 'Test',
          address: 'Test',
          postNumber: '12345',
          tel: '123456',
          mob: '123456',
          working: true,
          position: 'Test',
          qualifications: 'Test',
          nameOfEmployer: 'Test'
        },
        father: {
          name: 'Test',
          jmbg: 123456,
          citizenId: 'Test',
          issuedBy: 'Test',
          municipality: 'Test',
          city: 'Test',
          address: 'Test',
          postNumber: '12345',
          tel: '1234456',
          mob: '123445',
          working: true,
          position: 'Test',
          qualifications: 'Test',
          nameOfEmployer: 'Test'
        },
        family: {
          meritalStatus: 1,
          familyMembers: [],
          chronicalDecease: true,
          chronicalDeceaseText: 'Test',
          disability: true,
          disabilityText: 'Test',
          specialNeeds: true,
          familyRelations: 1,
          incomeBySalary: true,
          incomeBySalaryText: 'Test',
          familyPension: true,
          familyPensionText: 'Test',
          unemploymentBenefit: true,
          unemploymentBenefitText: 'Test',
          disabilityCompensation: true,
          disabilityCompensationText: 'Test',
          compensationForTheSocialProtectionSystem: true,
          compensationForTheSocialProtectionSystemText: 'Test',
          otherIncome: true,
          otherIncomeText: 'Test',
          familyResidence: 1,
          housingConditions: 1,
          residentialBuilding: 1
        }
      })
    },
    fillFormData (event) {
      this.editing = true
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          this.formData.child.dateOfDiagnose = this.formData.child.dateOfDiagnose.split('T')[0]
          this.formData.child.dateOfBirth = this.formData.child.dateOfBirth.split('T')[0]
          this.familyMembersEditable = this.formData.family.familyMembers
        }
      })
      this.show('modal_entry', 'notes')
    },
    saveFamilyMember (event) {
      this.formData.family.familyMembers.push(event)
    },
    sliceFamilyMember (event) {
      this.formData.family.familyMembers.splice(event, 1)
    },
    getData () {
      Main.methods.getModule(Main.data().socialCard, (data) => {
        data.forEach((item) => {
          item.child.dateOfDiagnose = item.child.dateOfDiagnose.split('T')[0]
          item.child.dateOfBirth = item.child.dateOfBirth.split('T')[0]
        })
        this.items = data
      })
    },
    saveData (event) {
      this.editing = false
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().socialCard + event._id, event, (data) => {
          if (data.message === 'successfully edited') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().socialCard, event, (data) => {
          if (data.message === 'successfully saved') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      }
      setTimeout(() => {
        this.backToStart = false
      }, 1000)
    },
    showDeleteModal (event) {
      this.show(event.type)
      this.deletionId = event.id
    },
    confirmDeletion (event) {
      if (event) {
        this.deleteItem(this.deletionId)
      }
      this.hide('confirm_delete')
    },
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().socialCard + event, (data) => {
        if (data.message === 'successfully removed') {
          this.seen = false
          this.clearData()
          this.getData()
        }
      })
    },
    confirmDelete (modalId) {
      this.deleteItem(this.deletionId)
      this.hide(modalId)
    },
    sort (event) {
      if (event.sortDesc) {
        this.items = _.sortBy(this.items, [event.sortBy]).reverse()
      } else {
        this.items = _.sortBy(this.items, [event.sortBy])
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../../../assets/styles/mixins";
  @import "../../../assets/styles/form";
  @import "../../../assets/styles/general";
  .confirmation{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirmation-title{
    padding-top: 30px;
    display: flex;
    justify-content: center;
  }
  .confirmation-button{
    @extend .heart-button;
    display: flex;
    justify-content: center;
    margin: 30px;
  }
</style>
