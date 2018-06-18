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
              <div class="list_row" v-for="(item, index) in types" :key="index" v-on:click="filterItems(index)">
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
                     :backToStart="backToStart"
                     @onEditClicked="fillFormData"
                     @onConfirmDelete="showDeleteModal($event, 'confirm_delete')"
                     :seen="seen"
                     :filter="filter">
      </TableSortable>
      <modal name="modal_entry" height="auto" :scrollable="true">
        <Form @onDataEmit="saveData" @onAddNote="onAddNote" @onModalClose="closeModal('modal_entry')" :formData="formData" :types="types" :editing="editing"></Form>
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
      editing: false,
      backToStart: false,
      delitionId: null,
      msg: 'Srce za djecu',
      filter: null,
      filterByType: null,
      items: [],
      tempItems: [],
      seen: 'true',
      stacked: 'md',
      types: ['Institucija', 'Fizičko lice', 'Pravno lice', 'Svi donatori'],
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
          key: 'company',
          label: 'NAZIV KOMPANIJE',
          sortable: true,
          variant: 'danger'
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
    onAddNote (obj) {
      console.log(obj)
      Main.methods.putModule(Main.data().donations + obj.id + '/notes', { text: obj.note }, (data) => {
        console.log(data)
        if (data.message === 'successfully added note') {
          this.backToStart = true
          this.getData()
        }
      })
    },
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
    filterItems (index) {
      if (index < 2) {
        this.items = this.tempItems.filter((el) => {
          return el.type === index ? el : null
        })
      } else {
        this.items = this.tempItems
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
      this.editing = true
      this.items.forEach((obj) => {
        if (obj._id === event) {
          this.formData = Object.assign({}, this.formData, obj)
          console.log(this.formData)
          if (this.formData.date !== null) {
            this.formData.date = this.formData.date.split('T')[0]
          }
        }
      })
      this.show('modal_entry', 'notes')
    },
    getData () {
      Main.methods.getModule(Main.data().donations, (data) => {
        data.forEach((item) => {
          item.date = item.date.split('T')[0]
        })
        this.items = data
        this.tempItems = data
      })
    },
    saveData (event) {
      this.editing = false
      console.log(event)
      if (event._id != null) {
        Main.methods.putModule(Main.data().donations + event._id, event, (data) => {
          console.log(data)
          if (data.message === 'successfully edited') {
            this.backToStart = true
            this.hide('modal_entry')
            this.getData()
            this.clearData()
          }
        })
      } else {
        Main.methods.postModule(Main.data().donations, event, (data) => {
          console.log(data)
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
    deleteItem (event) {
      Main.methods.deleteModule(Main.data().donations + event, (data) => {
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
