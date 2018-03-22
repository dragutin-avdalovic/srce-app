<template>
  <div class="center">
    <div class="btn-group btn-group-vertical" data-toggle="buttons">
      <label class="btn center">
        <input type="checkbox" v-on:click="onChecked()" v-bind:checked="checked">
        <i class="fa fa-square-o fa-2x"></i>
        <i class="fa fa-check-square-o fa-2x"></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: ['checked'],
  methods: {
    onChecked () {
      this.$emit('onChecked', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
}

div[data-toggle="buttons"] label {
  display: flex;
  cursor: pointer;
  width: 55px;
}
label input[type="checkbox"] ~ i.fa.fa-square-o{
  color: #c8c8c8;    display: inline;
}
label input[type="checkbox"] ~ i.fa.fa-check-square-o{
  display: none;
}
label input[type="checkbox"]:checked ~ i.fa.fa-square-o{
  display: none;
}
label input[type="checkbox"]:checked ~ i.fa.fa-check-square-o{
  color: #EB2D3C;    display: inline;
}
label:hover input[type="checkbox"] ~ i.fa {
  color: #EB2D3C;
}
div[data-toggle="buttons"] label:hover {
  color: #EB2D3C;
}
div[data-toggle="buttons"] label:active, div[data-toggle="buttons"] label.active {
  -webkit-box-shadow: none;
  box-shadow: none;
}

</style>
