<template>
  <div>
  <div class="confirmation-title">
    <h4>Da li ste sigurni da zelite izbrisati?</h4>
  </div>
  <div class="confirmation">
    <button class="confirmation-button heart-button" v-on:click="confirmDelete(false)"><span class="new-text">Nazad</span></button>
    <button class="confirmation-button heart-button" v-on:click="confirmDelete(true)"><span class="new-text">Izbrisati</span></button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  methods: {
    confirmDelete (event) {
      this.$emit('onConfirmDelete', event)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/mixins.scss";
  @import "../../assets/styles/variables.scss";
  @import "../../assets/styles/general.scss";

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
