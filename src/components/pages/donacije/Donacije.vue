<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div>
    <div class="content container">
      <div class="row row_interactive">
          <div class="left-filter">
            <button v-popover:list-dropdown-2.bottom class="donators-btn">
              <div class="donators-label">Donatori</div>
              <i class="fa fa-chevron-down donators-chevron"></i>
            </button>
            <popover name="list-dropdown-2" class="list-dropdown-2">
              <div  v-bind:key="index" v-bind:item="item" v-for="(item, index) in types"  class="list_row" v-on:click.prevent="filterItems(index)">
                <p>{{item}}</p>
              </div>
            </popover>
          </div>
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
      <TableSortable :items="items"
                     :fieldsA="fields"
                     :stacked="stacked"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onModalClose="closeModal('modal_entry')" :formData="formData"></Form>
      </modal>
      <modal name="confirm_delete" height="auto">
        <Confirmation @onConfirmDelete="confirmDelete($event)"></Confirmation>
      </modal>
    </div>
  </div>
</template>

<script>
import TableSortable from '@/components/partials/TableSortable'
import Form from './Form'
import Main from '@/services/Main'
import Confirmation from '@/components/partials/Confirmation'

export default {
  name: 'HelloWorld',
  components: {
    TableSortable,
    Form,
    Confirmation
  },
  data () {
    return {
      delitionId: null,
      msg: 'Srce za djecu',
      filter: null,
      filterByType: null,
      items: [],
      seen: 'true',
      stacked: 'md',
      types: ['Institucija', 'Fizičko lice', 'Pravno lice'],
      formData: {
        type: null,
        company: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
      },
      fields: [
        {
          key: 'name',
          label: 'OSNOVNI PODACI',
          sortable: true
        },
        {
          key: 'email',
          label: 'E-MAIL',
          sortable: true
        },
        {
          key: 'address',
          label: 'ADRESA',
          sortable: true
        },
        {
          key: 'company',
          label: 'NAZIV KOMPANIJE',
          sortable: true,
          variant: 'danger'
        },
        {
          key: 'date',
          label: 'DATUM DONACIJE',
          sortable: true
        },
        {
          key: 'cause',
          label: 'SVRHA',
          sortable: true
        },
        {
          key: 'amount',
          label: 'IZNOS (KM)',
          sortable: true
        },
        { key: 'actions', label: '' }
      ]
    }
  },
  mounted () {
    console.log('created called.')
    this.getData()
  },
  methods: {
    clearData () {
      this.formData = {
        type: null,
        company: '',
        name: '',
        email: '',
        address: '',
        city: '',
        amount: '',
        date: '',
        cause: ''
      }
    },
    show (modalId) {
      this.$modal.show(modalId)
    },
    hide (modalId) {
      this.$modal.hide(modalId)
    },
    openModal (modalId) {
      this.show(modalId)
      this.clearData()
    },
    closeModal (modalId) {
      this.hide(modalId)
      this.clearData()
    },
    showDeleteModal (event, modalId) {
      this.show(modalId)
      this.delitionId = event.id
    },
    confirmDelete (event) {
      if (event) {
        this.deleteItem(this.delitionId)
      }
      this.hide('confirm_delete')
    },
    fillFormData (event) {
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          console.log(this.formData)
          if (this.formData.date !== null) {
            this.formData.date = this.formData.date.split('T')[0]
          }
        }
      })
      this.show('modal_entry')
    },
    getData () {
      Main.methods.getModule(Main.data().donations, (data) => {
        data.forEach((item) => {
          item.date = item.date.split('T')[0]
        })
        this.items = data
      })
    },
    saveData (event) {
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().donations + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().donations, event, (data) => {
          console.log(data)
          if (data.message === 'successfully saved') {
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      }
    },
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().donations + this.delitionId, (data) => {
        console.log(data)
        if (data.message === 'successfully removed') {
          this.seen = false
          this.getData()
          this.clearData()
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
  .list-dropdown-2 {
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
      &:hover {
        background-color: $text-gray;
      }
    }
  }
</style>
