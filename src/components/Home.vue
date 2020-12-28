<template lang="html">
  <div class="container">
    <div class="row">
    <div class="col-lg-6 col-md-6 col-6">
        <router-link :to="{ name: 'Pristupnica', params: {} }">
          <div class="heart">
            <img class="back-heart" src="@/assets/images/heart-1.svg" alt="">
            <img class="mini-img" src="@/assets/images/paper-note.svg" alt="">
          </div>
        </router-link>
        <p class="text ">Pristupnica za članove</p>
      </div>
      <div class="col-lg-6 col-md-6 col-6">
       <router-link :to="{ name: 'SocijalnaKarta', params: {} }">
        <div class="heart">
          <img class="back-heart two" src="@/assets/images/heart-1.svg" alt="">
         <img class="mini-img one" src="@/assets/images/blank-rounded-speech-balloon.svg" alt="">
        </div>
        </router-link>
        <p class="text ">Socijalna karta</p>
      </div>
      <div class="col-lg-6 col-md-6 col-6">
      <router-link :to="{ name: 'Volontiranje', params: {} }">
        <div class="heart">
          <img class="back-heart two" src="@/assets/images/heart-1.svg" alt="">
          <img class="mini-img one" src="@/assets/images/hands-holding-heart-1.svg" alt="">
        </div>
        </router-link>
        <p class="text ">Aplikacija za volontiranje</p>
      </div>
      <div class="col-lg-6 col-md-6 col-6">
       <router-link :to="{ name: 'Donacije', params: {} }">
        <div class="heart">
          <img class="back-heart two" src="@/assets/images/heart-1.svg" alt="">
         <img class="mini-img one" src="@/assets/images/hands-holding-heart.svg" alt="">
        </div>
        </router-link>
        <p class="text ">Pristupnica za donatore</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/mixins";
@import "../assets/styles/variables";

/*header*/
.nav-bar {
  padding-bottom: 3vh;
}

.nav-logo {
  padding-top: 3vh;
  display: block;
  justify-content: space-between;
  vertical-align: middle;
  //@include spacing-lr('p', 10, %);
}

.logo {
  width: 200px;
  padding-top: 10px;
}

.btn-search {
  margin-left: 10px;
  color: #ffffff;
  background-color: $red;
  outline: none;
}

/*content*/
.btn-search {
  margin-left: 10px;
  color: #ffffff;
  background-color: $red;
  outline: none;
}

.heart {
  min-width: 50%;
  min-height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-family: "Open Sans";
  font-weight: bold;
}

.back-heart {
  filter: drop-shadow(0 0 5px rgba(238, 0, 4, 0.25));
  position: absolute;
  width: 200px;
  height: 150px;
  z-index: -1;
  cursor: pointer;
}

.mini-img {
  height: 50px;
  width: auto;
  cursor: pointer;
}

.heart:hover .back-heart {
  filter: drop-shadow(0 0 5px rgba(238, 0, 4, 0.78)) !important;
}

.divide {
  padding-top: 3vh;
  padding-bottom: 3vh;
}

/*footer*/
footer {
  display: flex;
  width: 100%;
  font-family: Open Sans;
  margin-top: 1vh;
  background: $red;
  bottom: 0px;
  @include spacing-tb('p', 2, em);
  //@include spacing-lr('p', 10, %);
}

.logo-container {
  .logo-white {
    padding-bottom: 0.5em;
    height: 3.5em;
    min-height: 2.5em;
  }
  p {
    @include font(1, em, #ffffff);
  }
}
</style>
