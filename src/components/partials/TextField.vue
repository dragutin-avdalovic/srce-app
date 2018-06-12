<template>
  <div class="w-100">
    <div>
      <span>{{ text }}</span>
    </div>
    <!--<pre class="mt-3 field">{{ text }}</pre>-->
    <b-form-textarea class="form-control text"
                     id="textarea1"
                     v-model="text"
                     placeholder="Add notes"
                     :no-resize="true"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/form";
  @import "../../assets/styles/general";
  .w-100{
    width: 100%;
  }
  .field{
    background-color: #ffffff;
  }
</style>
