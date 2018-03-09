<template>
  <div>
    <div class="container">
      <Header></Header>
      <div class="row">
        <div class="heart col-lg-6">
            <a href=""><img class="note" src="../assets/paper-note.svg" alt=""></a>
        </div>
        <div class="heart col-lg-6">
          <a href=""><img class="note" src="../assets/blank-rounded-speech-balloon.svg" alt=""></a>
        </div>
      </div>
      <div class="row">
        <div class="text col-lg-6">
          <p>Pristupnica za članove</p>
        </div>
        <div class="text col-lg-6">
          <p>Socijalna karta</p>
        </div>
      </div>
      <div class="row">
        <div class="heart col-lg-6">
          <a href=""><img class="note" src="../assets/hands-holding-heart-1.svg" alt=""></a>
        </div>
        <div class="heart col-lg-6">
          <a href=""><img class="note" src="../assets/hands-holding-heart.svg" alt=""></a>
        </div>
      </div>
      <div class="row">
        <div class="text col-lg-6">
          <p>Aplikacija za volontiranje</p>
        </div>
        <div class="text col-lg-6">
          <p>Pristupnica za donatore</p>
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 250px;
    background-image: url('../assets/heart-02.svg');
    background-repeat: no-repeat;
    background-position: center;
    .note{
      /*position: absolute;*/
      width: auto;
      height: 50px;
    }
    h5{
      bottom: 0;
    }
  }
  .text{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-family: "Open Sans";
    font-weight: bold;
  }
</style>
