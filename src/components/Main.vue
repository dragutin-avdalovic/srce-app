<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <div>
    <div class="content container">
      <TableSortable :items="items" :fieldsA="fields" :stacked="stacked" @clicked="fillFormData" @delete="deleteItem" :seen="seen"></TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData"
              @onSetCheckBox="setCheckBox($event)"
              @onSetInput="setInput($event)"
              @onSaveFamilyMember="saveFamilyMember($event)"
              @onSliceFamilyMember="sliceFamilyMember($event)"
              :formData="formData"
              :meritalStatus="meritalStatus"
              :familyRelations="familyRelations"
              :familyResidence="familyResidence"
              :housingConditions="housingConditions"
              :residentialBuilding="residentialBuilding"
              :healthState="healthState"
              :familyMembers="familyMembersEditable"></Form>
      </modal>
    </div>
  </div>
</template>

<script>
import TableSortable from '@/components/partials/TableSortable'
import Form from '@/components/partials/Form'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Form
  },
  data () {
    return {
      msg: 'Srce za djecu',
      items: [],
      seen: 'true',
      stacked: 'md',
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
        { value: 1, text: 'Odlicni' },
        { value: 2, text: 'Problematicni' }
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
          healthState: null,
          _id: ''
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
          nameOfEmployer: '',
          _id: ''
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
          nameOfEmployer: '',
          _id: ''
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
    console.log('mounted called.')
    this.getData()
  },
  methods: {
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
      this.formData = Object.assign({}, this.formData, {
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
          healthState: null,
          _id: ''
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
          nameOfEmployer: '',
          _id: ''
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
          nameOfEmployer: '',
          _id: ''
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
      })
    },
    show () {
      this.$modal.show('modal_entry')
    },
    hide () {
      this.$modal.hide('modal_entry')
    },
    getData () {
      // Make a request for a user with a given ID
      axios.get('http://45.76.90.178:3000/api/v1/social-card').then((response) => {
        response.data.map(item => {
          Object.assign(item)
          return item
        })
        this.items = response.data
        console.log(this.items)
      }).catch((error) => {
        console.log(error)
      })
    },
    saveData (event) {
      console.log(event)
      event.child.dateOfDiagnose = event.child.dateOfDiagnose.split('T')[0]
      event.child.dateOfBirth = event.child.dateOfBirth.split('T')[0]
      console.log(event)
      if (event._id != null) {
        axios.put('http://45.76.90.178:3000/api/v1/social-card/' + event._id, event).then((response) => {
          console.log(response)
          if (response.data === 'successfully edited') {
            this.hide()
            this.getData()
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        axios.post('http://45.76.90.178:3000/api/v1/social-card', event).then((response) => {
          console.log(response)
          if (response.data === 'successfully saved') {
            this.hide()
            this.getData()
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      this.clearData()
    },
    fillFormData (event) {
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          this.formData.child.dateOfDiagnose = this.formData.child.dateOfDiagnose.split('T')[0]
          this.formData.child.dateOfBirth = this.formData.child.dateOfBirth.split('T')[0]
          this.familyMembersEditable = this.formData.family.familyMembers
        }
      })
      this.show()
    },
    deleteItem (event) {
      axios.delete('http://45.76.90.178:3000/api/v1/social-card/' + event).then((response) => {
        console.log(response)
        if (response.data === 'successfully removed') {
          this.seen = false
          this.getData()
        }
      })
    },
    saveFamilyMember (event) {
      this.formData.family.familyMembers.push(event)
    },
    sliceFamilyMember (event) {
      this.formData.family.familyMembers.splice(event, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/variables";

.col-fix{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div-fix{
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10vh;
}
.donators{
  margin: 0;
  a{
    color: $red !important;
    font-size: 1.8em;
    font-weight: bold;
    font-family: Open Sans;
    padding: 0;
    &:hover, &:focus {
      text-decoration: none;
    }
  }
}
button{
  display: flex;
  justify-content: center;
  background-color: $red;
  color: #ffffff;
  width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  font-family: Open Sans;
  width: 170px;
  height: 50px;
  :focus {
    outline: none;
    box-shadow:none;
  }
  :active{
    outline: none;
    box-shadow:none;
  }
}
.sort{
  border: none;
  background-color: transparent;
  a{
    font-size: 1.2em;
    font-weight: bold;
    font-family: Open Sans;
    padding: 0;
    &:hover, &:focus {
      text-decoration: none;
    }
  }
}
p{
  font-size: 1.2em;
  color: #A2A1A1;
  font-family: Open Sans;
  font-weight: bold;
  padding-right: 5px;
  margin: 0;
}
.v--modal-overlay {
  background: rgba(255, 255, 255, 0.6);
}
.export{
  width: auto;
  height: 100%;
  display: flex;
  float: left;
  .export-btn{
    color: #ffffff;
  }
}
.arrows{
  display: flex;
  float: right;
  .arrow-btn{
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
.list-dropdown
{
  display: flex;
  flex-direction: column;
  align-items: center;
  .list_row {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    cursor: pointer;
    @include spacing-tb('p', 0.5, em);
    @include spacing-l('p', 1.5, em);
    p {
      @include spacing-b('m', 0, em);
      @include spacing-l('p', 1, em);
      @include font(1.1, em, $text-dark);
    }
    i {
      @include font(1.2, em, $text-dark);
    }
    &:hover
    {
      background-color: $text-gray;
    }
  }
}
.all{
  padding: 0 0 0 8px;
}
.content
{
  min-height: 66vh;
}
</style>
