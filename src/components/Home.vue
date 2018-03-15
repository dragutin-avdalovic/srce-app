<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/images/paper-note.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text ">Pristupnica za članove</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/images/blank-rounded-speech-balloon.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Socijalna karta</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/images/hands-holding-heart-1.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Aplikacija za volontiranje</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/images/hands-holding-heart.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Pristupnica za donatore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Srce'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/variables";

.search {
  display: flex;
  float: right;
  padding-top: 15px;
}

.btn-search {
  margin-left: 10px;
  font-family: "Open Sans";
  color: #ffffff;
  background-color: $red;
  outline: none;
}

.heart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: auto;
  min-height: 200px;
  min-width: 100px;
  background-image: url('../assets/images/heart-02.svg');
  background-repeat: no-repeat;
  background-position: center;
  .top
  {
    padding-top: 1em;
    flex-grow: 3;
    justify-content: center;
    align-items: center;
    display: flex;
    .note{
      /*position: absolute;*/
      width: auto;
      height: 50px;
    }
  }
  .bottom
  {
    flex-grow: 0  ;
    .text{
      display: flex;
      justify-content: center;
      align-items: baseline;
      font-size: 1.2em;
      font-family: "Open Sans";
      font-weight: bold;
      margin-bottom: 0px;
    }
  }
  h5{
    bottom: 0;
  }
}
.text{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.2em;
  font-family: "Open Sans";
  font-weight: bold;
}
</style>
