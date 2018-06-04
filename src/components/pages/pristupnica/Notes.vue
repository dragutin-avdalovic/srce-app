<template>
  <div>
    <modal id="notes" title="Izvjestaj o korisniku">
      <p>Hello from modal!</p>
    </modal>
  </div>
</template>
<script>
export default{
  data () {
    return {
      id: ''
    }
  },
  methods: {
    save: function () {
      console.log(this.formData)
      this.$emit('onDataEmit', this.formData)
    },
    closeModal: function () {
      this.$emit('onModalClose', this.formData)
    }
  }
}
</script>
<style lang="scss">
  @import "../../../assets/styles/mixins";
  @import "../../../assets/styles/form";
  @import "../../../assets/styles/general";
</style>
