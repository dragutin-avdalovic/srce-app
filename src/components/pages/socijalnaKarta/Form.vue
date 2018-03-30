<template>
  <div>
      <div v-show="step === 1">
        <!--<button v-on:click="fillMe()">FILL ME</button>-->
        <form class="newEntryForm heartForm">
          <div class="header-modal">
            <h3 class="form-header">Novi unos</h3>
            <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
          </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
                <p class="large_head">DIJETE</p>
                <label class="large_head_label">Liječeno na Hematoonkološkom odjelu Pedijatrijske klinike KCUS</label>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childName')}">
                <label class="control-label" for="childName">Ime i prezime*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childName') }" name="childName" type="text" id="childName" v-model="formData.child.name" class="form-control"  placeholder="">
                  <span v-show="errors.has('childName')" class="help-block">{{ errors.first('childName') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childJmbg')}">
                <label class="control-label" for="childJmbg">JMBG*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('childJmbg') }" name="childJmbg" type="text" v-model="formData.child.jmbg" class="form-control" id="childJmbg" placeholder="">
                  <span v-show="errors.has('childJmbg')" class="help-block">{{ errors.first('childJmbg') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDateOfBirth')}">
                <label class="control-label" for="childDateOfBirth">Datum rođenja*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childDateOfBirth') }" name="childDateOfBirth" type="date" max="3000-01-01" v-model="formData.child.dateOfBirth" class="form-control" id="childDateOfBirth" placeholder="">
                  <span v-show="errors.has('childDateOfBirth')" class="help-block">{{ errors.first('childDateOfBirth') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childPlaceOfBirth')}">
                <label class="control-label" for="childPlaceOfBirth">Mjesto rođenja*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childPlaceOfBirth') }" name="childPlaceOfBirth" type="text" v-model="formData.child.placeOfBirth" class="form-control" id="childPlaceOfBirth" placeholder="">
                  <span v-show="errors.has('childPlaceOfBirth')" class="help-block">{{ errors.first('childPlaceOfBirth') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childAddress')}">
                <label class="control-label" for="childAddress">Adresa*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childAddress') }" name="childAddress" type="text" v-model="formData.child.address" class="form-control" id="childAddress">
                  <span v-show="errors.has('childAddress')" class="help-block">{{ errors.first('childAddress') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childCity')}">
                <label class="control-label" for="childCity">Općina*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childCity') }" name="childCity" type="text" v-model="formData.child.city" class="form-control" id="childCity" placeholder="">
                  <span v-show="errors.has('childCity')" class="help-block">{{ errors.first('childCity') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childMunicipality')}">
                <label class="control-label" for="childMunicipality">Mjesto*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childMunicipality') }" name="childMunicipality" type="text" v-model="formData.child.municipality" class="form-control" id="childMunicipality" placeholder="">
                  <span v-show="errors.has('childMunicipality')" class="help-block">{{ errors.first('childMunicipality') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childPostNumber')}">
                <label class="control-label" for="childPostNumber">Poštanski broj*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('childPostNumber') }" name="childPostNumber" type="text" v-model="formData.child.postNumber" class="form-control" id="childPostNumber">
                  <span v-show="errors.has('childPostNumber')" class="help-block">{{ errors.first('childPostNumber') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
                <label class="control-label">Dijete ide u školu*</label>
                <CompositeButton @onCheckedComposite="setCheckBox($event, 'goingToSchool')" :active="formData.child.goingToSchool"></CompositeButton>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
                <label class="control-label">Dijete ide u vrtić*</label>
                <CompositeButton @onCheckedComposite="setCheckBox($event, 'goingToKindergarden')" :active="formData.child.goingToKindergarden"></CompositeButton>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
                <div class="horizontal_line"></div>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDiagnose')}">
                <label class="control-label" for="childDiagnose">Dijagnoza*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childDiagnose') }" name="childDiagnose" type="text" v-model="formData.child.diagnose" class="form-control" id="childDiagnose" placeholder="">
                  <span v-show="errors.has('childDiagnose')" class="help-block">{{ errors.first('childDiagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDateOfDiagnose')}">
                <label class="control-label" for="childDateOfDiagnose">Datum dijagnoze*</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childDateOfDiagnose') }" name="childDateOfDiagnose" type="date" v-model="formData.child.dateOfDiagnose" class="form-control" id="childDateOfDiagnose" placeholder="">
                  <span v-show="errors.has('childDateOfDiagnose')" class="help-block">{{ errors.first('childDateOfDiagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('childNote')}">
                <label class="control-label" for="childNote">Napomena <span class="grey">(ukoliko dijete ima posebne potrebe ili ograničenja, upisati iste)</span></label>
                <p :class="{ 'control': true }">
                  <input v-validate="''" :class="{'input': true, 'has-error': errors.has('childNote') }" name="childNote" type="text" v-model="formData.child.note" class="form-control" id="childNote" placeholder="">
                  <span v-show="errors.has('childNote')" class="help-block">{{ errors.first('childNote') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding" v-bind:class="{'has-error':errors.has('healthState')}">
                <label class="control-label">Zdravstveno stanje djeteta*<span class="grey"> (trenutno)</span> </label>
                <p :class="{ 'control': true }">
                  <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('healthState') }" v-model="formData.child.healthState" :options="healthState" id="healthState" name="healthState"></b-form-select>
                  <span v-show="errors.has('healthState')" class="help-block">{{ errors.first('healthState') }}</span>
                </p>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group-btns form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
        </form>
      </div>

      <div v-show="step === 2">
        <form class="newEntryForm heartForm">
          <div class="header-modal">
            <h3 class="form-header">Novi unos</h3>
            <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">OTAC DJETETA</p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('nameFather')}">
              <label class="control-label" for="nameFather">Ime i prezime*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('nameFather') }" name="nameFather" type="text" v-model="formData.father.name" class="form-control" id="nameFather" placeholder="">
                <span v-show="errors.has('nameFather')" class="help-block">{{ errors.first('nameFather') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('jmbgFather')}">
              <label class="control-label" for="jmbgFather">JMBG*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('jmbgFather') }" name="jmbgFather" type="text" v-model="formData.father.jmbg" class="form-control" id="jmbgFather" placeholder="">
                <span v-show="errors.has('jmbgFather')" class="help-block">{{ errors.first('jmbgFather') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherCitizenId')}">
              <label class="control-label" for="fatherCitizenId">LK*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherCitizenId') }" name="fatherCitizenId" type="text" v-model="formData.father.citizenId" class="form-control" id="fatherCitizenId" placeholder="">
                <span v-show="errors.has('fatherCitizenId')" class="help-block">{{ errors.first('fatherCitizenId') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherIssuedBy')}">
              <label class="control-label" for="fatherIssuedBy">Izdata od*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherIssuedBy') }" name="fatherIssuedBy" type="text" v-model="formData.father.issuedBy" class="form-control" id="fatherIssuedBy" placeholder="">
                <span v-show="errors.has('fatherIssuedBy')" class="help-block">{{ errors.first('fatherIssuedBy') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherAddress')}">
              <label class="control-label" for="fatherAddress">Adresa*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherAddress') }" name="fatherAddress" type="text" v-model="formData.father.address" class="form-control" id="fatherAddress">
                <span v-show="errors.has('fatherAddress')" class="help-block">{{ errors.first('fatherAddress') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherCity')}">
              <label class="control-label" for="fatherCity">Općina*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherCity') }" name="fatherCity" type="text" v-model="formData.father.city" class="form-control" id="fatherCity" placeholder="">
                <span v-show="errors.has('fatherCity')" class="help-block">{{ errors.first('fatherCity') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherMunicipality')}">
              <label class="control-label" for="fatherMunicipality">Mjesto*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherMunicipality') }" name="fatherMunicipality" type="text" v-model="formData.father.municipality" class="form-control" id="fatherMunicipality" placeholder="">
                <span v-show="errors.has('fatherMunicipality')" class="help-block">{{ errors.first('fatherMunicipality') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherPostNumber')}">
              <label class="control-label" for="fatherPostNumber">Poštanski broj*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('fatherPostNumber') }" name="fatherPostNumber" type="text" v-model="formData.father.postNumber" class="form-control" id="fatherPostNumber">
                <span v-show="errors.has('fatherPostNumber')" class="help-block">{{ errors.first('fatherPostNumber') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherTel')}">
              <label class="control-label" for="fatherTel">Telefon*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('fatherTel') }" name="fatherTel" type="text" v-model="formData.father.tel" class="form-control" id="fatherTel" placeholder="">
                <span v-show="errors.has('fatherTel')" class="help-block">{{ errors.first('fatherTel') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherMob')}">
              <label class="control-label" for="fatherMob">Mobitel*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('fatherMob') }" name="fatherMob" type="text" v-model="formData.father.mob" class="form-control" id="fatherMob">
                <span v-show="errors.has('fatherMob')" class="help-block">{{ errors.first('fatherMob') }}</span>
              </p>
            </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
              <div class="horizontal_line"></div>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherPosition')}">
              <label class="control-label" for="fatherPosition">Zanimanje*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherPosition') }" name="fatherPosition" type="text" v-model="formData.father.position" class="form-control" id="fatherPosition" placeholder="">
                <span v-show="errors.has('fatherPosition')" class="help-block">{{ errors.first('fatherPosition') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherQualifications')}">
              <label class="control-label" for="fatherQualifications">Stručna sprema*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('fatherQualifications') }" name="fatherQualifications" type="text" v-model="formData.father.qualifications" class="form-control" id="fatherQualifications" placeholder="">
                <span v-show="errors.has('fatherQualifications')" class="help-block">{{ errors.first('fatherQualifications') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
              <label class="control-label">U radnom odnosu*</label>
              <CompositeButton @onCheckedComposite="setCheckBox($event, 'fatherWorking')" :active="formData.father.working"></CompositeButton>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('fatherNameOfEmployer')}">
              <label class="control-label" for="fatherNameOfEmployer">Naziv poslodavca</label>
              <p :class="{ 'control': true }">
                <input v-validate="''" :class="{'input': true, 'has-error': errors.has('fatherNameOfEmployer') }" name="fatherNameOfEmployer" type="text" v-model="formData.father.nameOfEmployer" class="form-control" id="fatherNameOfEmployer" placeholder="">
                <span v-show="errors.has('fatherNameOfEmployer')" class="help-block">{{ errors.first('fatherNameOfEmployer') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group form-group-btns">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div v-show="step === 3">
        <form class="newEntryForm heartForm">
          <div class="header-modal">
            <h3 class="form-header">Novi unos</h3>
            <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">MAJKA DJETETA</p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('nameMother')}">
              <label class="control-label" for="nameMother">Ime i prezime*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('nameMother') }" name="nameMother" type="text" v-model="formData.mother.name" class="form-control" id="nameMother" placeholder="">
                <span v-show="errors.has('nameMother')" class="help-block">{{ errors.first('nameMother') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('jmbgMother')}">
              <label class="control-label" for="jmbgMother">JMBG*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('jmbgMother') }" name="jmbgMother" type="text" v-model="formData.mother.jmbg" class="form-control" id="jmbgMother" placeholder="">
                <span v-show="errors.has('jmbgMother')" class="help-block">{{ errors.first('jmbgMother') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherCitizenId')}">
              <label class="control-label" for="MotherCitizenId">LK*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherCitizenId') }" name="MotherCitizenId" type="text" v-model="formData.mother.citizenId" class="form-control" id="MotherCitizenId" placeholder="">
                <span v-show="errors.has('MotherCitizenId')" class="help-block">{{ errors.first('MotherCitizenId') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherIssuedBy')}">
              <label class="control-label" for="MotherIssuedBy">Izdata od*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherIssuedBy') }" name="MotherIssuedBy" type="text" v-model="formData.mother.issuedBy" class="form-control" id="MotherIssuedBy" placeholder="">
                <span v-show="errors.has('MotherIssuedBy')" class="help-block">{{ errors.first('MotherIssuedBy') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherAddress')}">
              <label class="control-label" for="MotherAddress">Adresa*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherAddress') }" name="MotherAddress" type="text" v-model="formData.mother.address" class="form-control" id="MotherAddress">
                <span v-show="errors.has('MotherAddress')" class="help-block">{{ errors.first('MotherAddress') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherCity')}">
              <label class="control-label" for="MotherCity">Općina*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherCity') }" name="MotherCity" type="text" v-model="formData.mother.city" class="form-control" id="MotherCity" placeholder="">
                <span v-show="errors.has('MotherCity')" class="help-block">{{ errors.first('MotherCity') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherMunicipality')}">
              <label class="control-label" for="MotherMunicipality">Mjesto*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherMunicipality') }" name="MotherMunicipality" type="text" v-model="formData.mother.municipality" class="form-control" id="MotherMunicipality" placeholder="">
                <span v-show="errors.has('MotherMunicipality')" class="help-block">{{ errors.first('MotherMunicipality') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherPostNumber')}">
              <label class="control-label" for="MotherPostNumber">Poštanski broj*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('MotherPostNumber') }" name="MotherPostNumber" type="text" v-model="formData.mother.postNumber" class="form-control" id="MotherPostNumber">
                <span v-show="errors.has('MotherPostNumber')" class="help-block">{{ errors.first('MotherPostNumber') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherTel')}">
              <label class="control-label" for="MotherTel">Telefon*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('MotherTel') }" name="MotherTel" type="text" v-model="formData.mother.tel" class="form-control" id="MotherTel" placeholder="">
                <span v-show="errors.has('MotherTel')" class="help-block">{{ errors.first('MotherTel') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherMob')}">
              <label class="control-label" for="MotherMob">Mobitel*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('MotherMob') }" name="MotherMob" type="text" v-model="formData.mother.mob" class="form-control" id="MotherMob">
                <span v-show="errors.has('MotherMob')" class="help-block">{{ errors.first('MotherMob') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
              <div class="horizontal_line"></div>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherPosition')}">
              <label class="control-label" for="MotherPosition">Zanimanje*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherPosition') }" name="MotherPosition" type="text" v-model="formData.mother.position" class="form-control" id="MotherPosition" placeholder="">
                <span v-show="errors.has('MotherPosition')" class="help-block">{{ errors.first('MotherPosition') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherQualifications')}">
              <label class="control-label" for="MotherQualifications">Stručna sprema*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('MotherQualifications') }" name="MotherQualifications" type="text" v-model="formData.mother.qualifications" class="form-control" id="MotherQualifications" placeholder="">
                <span v-show="errors.has('MotherQualifications')" class="help-block">{{ errors.first('MotherQualifications') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
              <label class="control-label">U radnom odnosu*</label>
              <CompositeButton @onCheckedComposite="setCheckBox($event, 'motherWorking')" :active="formData.mother.working"></CompositeButton>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('MotherNameOfEmployer')}">
              <label class="control-label" for="MotherNameOfEmployer">Naziv poslodavca</label>
              <p :class="{ 'control': true }">
                <input v-validate="''" :class="{'input': true, 'has-error': errors.has('MotherNameOfEmployer') }" name="MotherNameOfEmployer" type="text" v-model="formData.mother.nameOfEmployer" class="form-control" id="MotherNameOfEmployer" placeholder="">
                <span v-show="errors.has('MotherNameOfEmployer')" class="help-block">{{ errors.first('MotherNameOfEmployer') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group form-group-btns">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div v-show="step === 4">
        <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div class="header-modal">
            <h3 class="form-header">Novi unos</h3>
            <img class="modal-close" v-on:click="closeModal" src="@/assets/images/close.png" alt="">
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">PODACI O PORODICI</p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group" v-bind:class="{'has-error':errors.has('meritalStatus')}">
                <label class="control-label label-check">Bračni status roditelja*</label>
                <p :class="{ 'control': true }">
                  <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('meritalStatus') }"  v-model="formData.family.meritalStatus" :options="this.meritalStatus" id="meritalStatus" name="meritalStatus"></b-form-select>
                  <span v-show="errors.has('meritalStatus')" class="help-block">{{ errors.first('meritalStatus') }}</span>
                </p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check">Molimo pobrojati članove domaćinstva koji su u zajedničkom kućanstvu</label>
              <table class="table table-bordered editable-table">
                <thead>
                <tr>
                  <th scope="col">R.b.</th>
                  <th scope="col">Ime i prezime</th>
                  <th scope="col">JMBG</th>
                  <th scope="col">Srodstvo sa oboljelim</th>
                  <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(member, i) in formData.family.familyMembers">
                  <tr :key="i">
                    <td>{{i+1}}</td>
                    <td> {{member.name}} </td>
                    <td> {{member.jmbg}}</td>
                    <td> {{member.relationToChild}}</td>
                    <td><button class="deleteMember"  v-on:click.prevent="getClickedResult(i)"><i class="fa fa-trash-o"></i></button></td>
                  </tr>
                </template>
                <tr>
                  <td scope="row"></td>
                  <td><input type="text" v-model="familyMember.name" class="inline-input"></td>
                  <td><input type="number" v-model="familyMember.jmbg" class="inline-input"></td>
                  <td><input type="text" v-model="familyMember.relationToChild" class="inline-input"></td>
                </tr>
                </tbody>
              </table>
              <div class="new-btn">
                <i class="fa fa-plus"></i>
                <label v-on:click="saveFamilyMember">Novi unos</label>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check">Da li neko od članova porodice boluje od</label>
              <div class="row no-padding">
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='textSecond'
                                :textInput="formData.family.chronicalDeceaseText"
                                v-bind:checked="formData.family.chronicalDecease"
                                @onSetCheckBox="setCheckBox($event, 'chronicalDecease')"
                                @onSetInput="setInput($event, 'chronicalDeceaseText')"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textThird"
                                :textInput="formData.family.disabilityText"
                                :checked="formData.family.disability"
                                @onSetCheckBox="setCheckBox($event, 'disability')"
                                @onSetInput="setInput($event, 'disabilityText')"></CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox :checked="formData.family.specialNeeds"
                                                @onChecked="setCheckBox($event, 'specialNeeds')"></Checkbox></div>
                    <div class="right"><label>ima status osobe sa posebnim potrebama</label></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group" v-bind:class="{'has-error':errors.has('familyRelations')}">
              <label class="control-label label-check">Odnosi u porodici*</label>
              <p :class="{ 'control': true }">
                <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('meritalStatus') }" v-model="formData.family.familyRelations" :options="familyRelations" id="familyRelations" name="familyRelations"></b-form-select>
                <span v-show="errors.has('familyRelations')" class="help-block">{{ errors.first('familyRelations') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check">Mjesečni prihodi porodice <span class="grey">(odabrati vrstu i navesti iznos)</span></label>
              <div class="row no-padding">
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textForth'
                                :textInput="formData.family.incomeBySalaryText"
                                :checked="formData.family.incomeBySalary"
                                @onSetCheckBox="setCheckBox($event, 'incomeBySalary')"
                                @onSetInput="setInput($event, 'incomeBySalaryText')">
                    </CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textFive"
                                :textInput="formData.family.familyPensionText"
                                :checked="formData.family.familyPension"
                                @onSetCheckBox="setCheckBox($event, 'familyPension')"
                                @onSetInput="setInput($event, 'familyPensionText')">
                    </CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text="this.textSix"
                                :textInput="formData.family.unemploymentBenefitText"
                                :checked="formData.family.unemploymentBenefit"
                                @onSetCheckBox="setCheckBox($event, 'unemploymentBenefit')"
                                @onSetInput="setInput($event, 'unemploymentBenefitText')"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textSeven"
                                :textInput="formData.family.disabilityCompensationText"
                                :checked="formData.family.disabilityCompensation"
                                @onSetCheckBox="setCheckBox($event, 'disabilityCompensation')"
                                @onSetInput="setInput($event, 'disabilityCompensationText')"></CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textEight'
                                :textInput="formData.family.compensationForTheSocialProtectionSystemText"
                                :checked="formData.family.compensationForTheSocialProtectionSystem"
                                @onSetCheckBox="setCheckBox($event, 'compensationForTheSocialProtectionSystem')"
                                @onSetInput="setInput($event, 'compensationForTheSocialProtectionSystemText')"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textNine"
                                :textInput="formData.family.otherIncomeText"
                                :checked="formData.family.otherIncome"
                                @onSetCheckBox="setCheckBox($event, 'otherIncome')"
                                @onSetInput="setInput($event, 'otherIncomeText')"></CheckInput>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <div class="row no-padding">
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group" v-bind:class="{'has-error':errors.has('familyResidence')}">
                  <label class="control-label label-check">Porodica stanuje u*</label>
                  <p :class="{ 'control': true }">
                    <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('familyResidence') }" v-model="formData.family.familyResidence" :options="this.familyResidence" id="familyResidence" name="familyResidence"></b-form-select>
                    <span v-show="errors.has('familyResidence')" class="help-block">{{ errors.first('familyResidence') }}</span>
                  </p>
                </div>
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group" v-bind:class="{'has-error':errors.has('housingConditions')}">
                  <label class="control-label label-check">Uslovi stanovanja*</label>
                  <p :class="{ 'control': true }">
                    <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('housingConditions') }" v-model="formData.family.housingConditions" :options="this.housingConditions" id="housingConditions" name="housingConditions"></b-form-select>
                    <span v-show="errors.has('housingConditions')" class="help-block">{{ errors.first('housingConditions') }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group" v-bind:class="{'has-error':errors.has('residentialBuilding')}">
              <label class="control-label label-check">Stambeni objekat je*</label>
              <p :class="{ 'control': true }">
                <b-form-select v-validate="'required'" :class="{'select': true, 'has-error': errors.has('residentialBuilding') }" v-model="formData.family.residentialBuilding" :options="this.residentialBuilding" id="residentialBuilding" name="residentialBuilding"></b-form-select>
                <span v-show="errors.has('residentialBuilding')" class="help-block">{{ errors.first('residentialBuilding') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group form-group-btns">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button class="button_save" type="submit"><p class="save-text">Save</p></button>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
import CompositeButton from '@/components/partials/CompositeButton'
import CheckInput from '@/components/partials/CheckInput'
import * as _ from 'lodash'
export default{
  name: 'Form',
  components: {
    Checkbox,
    CompositeButton,
    CheckInput
  },
  props: ['familyMembers', 'formData', 'familyRelations', 'meritalStatus', 'familyResidence', 'housingConditions', 'residentialBuilding', 'healthState'],
  data () {
    return {
      selected: null,
      step: 1,
      i: 1,
      text: 'Ostalo',
      textSecond: 'hroničnih bolesti <span class=grey>(navesti bolest)</span>',
      textThird: 'ima potvrđen stepen invalidnosti <span class=grey>(%)</span>',
      textForth: 'Zarada po osnovu plate',
      textFive: 'Porodična penzija',
      textSix: 'Naknada za slučaj nezaposlenosti',
      textSeven: 'Naknada po osnovu invalidnosti',
      textEight: 'Naknada iz sistema socijalne zaštite',
      textNine: 'Ostali prihodi',
      familyMember:
        {
          name: '',
          jmbg: null,
          relationToChild: ''
        },
      dict: {
        custom: {
          childName: {
            required: 'The child name field is required.' // messages can be strings as well.
          },
          childJmbg: {
            required: 'The child jmbg field is   required.',
            numeric: 'The child jmbg field may only contain numeric characters.'
          },
          childDateOfBirth: {
            required: 'The child date of birth field is required.' // messages can be strings as well.
          },
          childPlaceOfBirth: {
            required: 'The child place of birth field is required.' // messages can be strings as well.
          },
          childAddress: {
            required: 'The child address of birth field is required.' // messages can be strings as well.
          },
          childCity: {
            required: 'The child city of birth field is required.' // messages can be strings as well.
          },
          childMunicipality: {
            required: 'The child municipality of birth field is required.' // messages can be strings as well.
          },
          childPostNumber: {
            required: 'The child post number field is required.',
            numeric: 'The child post number field may only contain numeric characters.'
          },
          childDiagnose: {
            required: 'The child diagnose field is required.' // messages can be strings as well.
          },
          childDateOfDiagnose: {
            required: 'The child date of diagnose field is required.' // messages can be strings as well.
          },
          childNote: {
            required: 'The child note of diagnose field is required.' // messages can be strings as well.
          },
          healthState: {
            required: 'The child health state field is required.' // messages can be strings as well.
          },
          nameFather: {
            required: 'The father name field is required.' // messages can be strings as well.
          },
          jmbgFather: {
            required: 'The father jmbg field is required.',
            numeric: 'The father jmbg field may only contain numeric characters.'
          },
          fatherCitizenId: {
            required: 'The father citizen ID field is required.'
          },
          fatherIssuedBy: {
            required: 'The father ID issued by field is required.'
          },
          fatherAddress: {
            required: 'The father address field is required.'
          },
          fatherCity: {
            required: 'The father city field is required.'
          },
          fatherMunicipality: {
            required: 'The father municipality field is required.'
          },
          fatherPostNumber: {
            required: 'The father post number field is required.',
            numeric: 'The father post number field may only contain numeric characters.'
          },
          fatherTel: {
            required: 'The father telephone number field is required.',
            numeric: 'The father telephone number field may only contain numeric characters.'
          },
          fatherMob: {
            required: 'The father mobile telephone number field is required.',
            numeric: 'The father mobile telephone number field may only contain numeric characters.'
          },
          fatherPosition: {
            required: 'The father position field is required.'
          },
          fatherQualifications: {
            required: 'The father qualifications field is required.'
          },
          fatherNameOfEmployer: {
            required: 'The name of father\'s employer field is required.'
          },

          nameMother: {
            required: 'The mother name field is required.' // messages can be strings as well.
          },
          jmbgMother: {
            required: 'The mother jmbg field is required.',
            numeric: 'The mother jmbg field may only contain numeric characters.'
          },
          MotherCitizenId: {
            required: 'The mother citizen ID field is required.'
          },
          MotherIssuedBy: {
            required: 'The mother ID issued by field is required.'
          },
          MotherAddress: {
            required: 'The mother address field is required.'
          },
          MotherCity: {
            required: 'The mother city field is required.'
          },
          MotherMunicipality: {
            required: 'The mother municipality field is required.'
          },
          MotherPostNumber: {
            required: 'The mother post number field is required.',
            numeric: 'The mother post number field may only contain numeric characters.'
          },
          MotherTel: {
            required: 'The mother telephone number field is required.',
            numeric: 'The mother telephone number field may only contain numeric characters.'
          },
          MotherMob: {
            required: 'The mother mobile telephone number field is required.',
            numeric: 'The mother mobile telephone number field may only contain numeric characters.'
          },
          MotherPosition: {
            required: 'The mother position field is required.'
          },
          MotherQualifications: {
            required: 'The mother qualifications field is required.'
          },
          MotherNameOfEmployer: {
            required: 'The name of mother\'s employer field is required.'
          },
          meritalStatus: {
            required: 'The merital status of parent\'s field is required.'
          },
          familyRelations: {
            required: 'The family relations field is required.'
          },
          familyResidence: {
            required: 'The family residence field is required.'
          },
          housingConditions: {
            required: 'The family conditions field is required.'
          },
          residentialBuilding: {
            required: 'The residental building field is required.'
          }
        }
      }
    }
  },
  mounted: function () {
    this.$validator.localize('en', this.dict)
  },
  methods: {
    save () {
      this.$emit('onDataEmit', this.formData)
    },
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.save()
        } else {
        }
      })
    },
    setCheckBox (event, field) {
      this.$emit('onSetCheckBox', { event: event, field: field })
    },
    setInput (event, field) {
      this.$emit('onSetInput', { event: event, field: field })
    },
    prev () {
      this.step--
    },
    next () {
      this.step++
    },
    fillMe () {
      this.$emit('fillMe', true)
    },
    saveFamilyMember () {
      this.$emit('onSaveFamilyMember', _.cloneDeep(this.familyMember))
      this.familyMember = Object.assign({}, this.familyMember, {
        name: '',
        jmbg: null,
        relationToChild: ''
      })
    },
    closeModal: function () {
      this.$emit('onModalClose', this.formData)
    },
    getClickedResult (event) {
      this.$emit('onSliceFamilyMember', event)
    },
    isNumberKey (event) {
      var charCode = (event.which) ? event.which : event.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false
      }
      return true
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/styles/mixins";
@import "../../../assets/styles/form";
@import "../../../assets/styles/general";

.newEntryForm {
  @include spacing-lr(m, auto, '');
  @include spacing-lr(p, 3, em);
  @include spacing-tb(p, 1, em);
  .form-header {
    @include font(1.5, 600, $red);
    @include spacing-tb(m, 1.5, em);
  }
  .form-control
  {
    height:2.875em !important;
  }
  /* remove the original arrow */
  select
  {
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }

  select + i.fa {
    float: right;
    margin-top: -30px;
    margin-right: 5px;
    pointer-events: none;
    background-color: #fff;
    padding-right: 5px;
    @include font(1.2, 500, $red);
  }
  .donation_amount
  {
    text-align: center;
  }
  .button_save
  {
    @extend .heart-button;
    float: right;
    display: flex;
    justify-content: center;
    .save-text
    {
      font-size: 1em;
      @include spacing-tb(m, 0, em);
    }
  }
  .button_save_left
  {
    @extend .button_save;
    float: left;
  }
  .form-group-btns
  {
    @include spacing-t(p,2,em);
  }
  .inline-input
  {
   width: 100%;
  }
  .editable-table
  {
    @include spacing-tb(m,0.5,em);
    th{
      @include font(0.8,700,$text-dark);
    }
    td {
      @include font(0.8,500,$text-dark);
    }
    input
    {
      border: none;
      outline: none;
      &:focus
      {
        border: none;
        outline: none;
      }
    }
  }
  .new-btn
  {
    @include spacing-tb(m,0.5,em);
    float: right;
    @include font(1.2,600,$red);
  }
  .deleteMember
  {
    @include font(1.2,600,$red);
    outline:none;
    border:none;
    width: 50%;
  }
}

</style>
