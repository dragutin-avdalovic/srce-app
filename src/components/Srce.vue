<template>
  <div>
    <div class="container">
      <Header></Header>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/paper-note.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text ">Pristupnica za članove</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/blank-rounded-speech-balloon.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Socijalna karta</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/hands-holding-heart-1.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Aplikacija za volontiranje</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="heart">
            <div class="top">
              <a href=""><img class="note" src="../assets/hands-holding-heart.svg" alt=""></a>
            </div>
            <div class="bottom">
              <p class="text">Pristupnica za donatore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Srce',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
  @import "../assets/mixins.scss";
  @import "../assets/variables.scss";

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
    background-image: url('../assets/heart-02.svg');
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
