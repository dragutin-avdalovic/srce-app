<template>
  <div>
      <div v-if="step === 1">
        <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
            <div slot="top-right">
              <button @click="$modal.hide('modal_entry')" class="modal-close">
                X
              </button>
            </div>
            <h3 class="form-header">Novi unos</h3>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
                <p class="large_head">DIJETE</p>
                <label class="large_head_label">Liječeno na Hematoonkološkom odjelu Pedijatrijske klinike KCUS</label>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childName')}">
                <label class="control-label" for="childName">Ime i prezime</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childName') }" name="childName" type="text" v-model="formData.child.name" class="form-control" id="childName" placeholder="">
                  <span v-show="errors.has('childName')" class="help-block">{{ errors.first('childName') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childJmbg')}">
                <label class="control-label" for="childJmbg">JMBG</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('childJmbg') }" name="childJmbg" type="text" v-model="formData.child.jmbg" class="form-control" id="childJmbg" placeholder="">
                  <span v-show="errors.has('childJmbg')" class="help-block">{{ errors.first('childJmbg') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDateOfBirth')}">
                <label class="control-label" for="childDateOfBirth">Datum rođenja</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childDateOfBirth') }" name="childDateOfBirth" type="date" v-model="formData.child.dateOfBirth" class="form-control" id="childDateOfBirth" placeholder="">
                  <span v-show="errors.has('childDateOfBirth')" class="help-block">{{ errors.first('childDateOfBirth') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childPlaceOfBirth')}">
                <label class="control-label" for="childPlaceOfBirth">Mjesto rođenja</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childPlaceOfBirth') }" name="childPlaceOfBirth" type="text" v-model="formData.child.placeOfBirth" class="form-control" id="childPlaceOfBirth" placeholder="">
                  <span v-show="errors.has('childPlaceOfBirth')" class="help-block">{{ errors.first('childPlaceOfBirth') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childAddress')}">
                <label class="control-label" for="childAddress">Adresa</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childAddress') }" name="childAddress" type="text" v-model="formData.child.address" class="form-control" id="childAddress">
                  <span v-show="errors.has('childAddress')" class="help-block">{{ errors.first('childAddress') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childCity')}">
                <label class="control-label" for="childCity">Općina</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childCity') }" name="childCity" type="text" v-model="formData.child.city" class="form-control" id="childCity" placeholder="">
                  <span v-show="errors.has('childCity')" class="help-block">{{ errors.first('childCity') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childMunicipality')}">
                <label class="control-label" for="childMunicipality">Mjesto</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childMunicipality') }" name="childMunicipality" type="text" v-model="formData.child.municipality" class="form-control" id="childMunicipality" placeholder="">
                  <span v-show="errors.has('childMunicipality')" class="help-block">{{ errors.first('childMunicipality') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childPostNumber')}">
                <label class="control-label" for="childPostNumber">Poštanski broj</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('childPostNumber') }" name="childPostNumber" type="text" v-model="formData.child.postNumber" class="form-control" id="childPostNumber">
                  <span v-show="errors.has('childPostNumber')" class="help-block">{{ errors.first('childPostNumber') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
                <label class="control-label">Dijete ide u školu</label>
                <CompositeButton @onCheckedComposite="setFieldGoingToSchool($event)"></CompositeButton>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
                <label class="control-label">Dijete ide u vrtić</label>
                <CompositeButton @onCheckedComposite="setFieldGoingToGarden($event)"></CompositeButton>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
                <div class="horizontal_line"></div>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDiagnose')}">
                <label class="control-label" for="childDiagnose">Dijagnoza</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childDiagnose') }" name="childDiagnose" type="text" v-model="formData.child.diagnose" class="form-control" id="childDiagnose" placeholder="">
                  <span v-show="errors.has('childDiagnose')" class="help-block">{{ errors.first('childDiagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('childDateOfDiagnose')}">
                <label class="control-label" for="childDateOfDiagnose">Datum dijagnoze</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|date'" :class="{'input': true, 'has-error': errors.has('childDateOfDiagnose') }" name="childDateOfDiagnose" type="date" v-model="formData.child.dateOfDiagnose" class="form-control" id="childDateOfDiagnose" placeholder="">
                  <span v-show="errors.has('childDateOfDiagnose')" class="help-block">{{ errors.first('childDateOfDiagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('childNote')}">
                <label class="control-label" for="childNote">Napomena <span class="grey">(ukoliko dijete ima posebne potrebe ili ograničenja, upisati iste)</span></label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('childNote') }" name="childNote" type="text" v-model="formData.child.note" class="form-control" id="childNote" placeholder="">
                  <span v-show="errors.has('childNote')" class="help-block">{{ errors.first('childNote') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
                <label class="control-label">Zdravstveno stanje djeteta<span class="grey"> (trenutno)</span> </label>
                <div class="row no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckboxHealthState(1)"></Checkbox></div>
                    <div class="right"><label>Izliječeno</label></div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckboxHealthState(2)"></Checkbox></div>
                    <div class="right"><label>Na održavanju</label></div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckboxHealthState(3)"></Checkbox></div>
                    <div class="right"><label>Završilo sa liječenjem i održavanjem</label></div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckboxHealthState(4)"></Checkbox></div>
                    <div class="right"><label>Ostalo</label></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group-btns form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
        </form>
      </div>

      <div v-if="step === 2">
        <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">OTAC DJETETA</p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
              <label class="control-label" for="name">Ime i prezime</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
                <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('jmbg')}">
              <label class="control-label" for="jmbg">JMBG</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('jmbg') }" name="jmbg" type="text" v-model="formData.jmbg" class="form-control" id="jmbg" placeholder="">
                <span v-show="errors.has('jmbg')" class="help-block">{{ errors.first('jmbg') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('citizenId')}">
              <label class="control-label" for="citizenId">LK</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('citizenId') }" name="citizenId" type="text" v-model="formData.citizenId" class="form-control" id="citizenId" placeholder="">
                <span v-show="errors.has('citizenId')" class="help-block">{{ errors.first('citizenId') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('issuedBy')}">
              <label class="control-label" for="issuedBy">Izdata od</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('issuedBy') }" name="issuedBy" type="text" v-model="formData.issuedBy" class="form-control" id="issuedBy" placeholder="">
                <span v-show="errors.has('issuedBy')" class="help-block">{{ errors.first('issuedBy') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
              <label class="control-label" for="amount">Adresa</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address">
                <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
              <label class="control-label" for="address">Općina</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
                <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('municipality')}">
              <label class="control-label" for="address">Mjesto</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('municipality') }" name="municipality" type="text" v-model="formData.municipality" class="form-control" id="municipality" placeholder="">
                <span v-show="errors.has('municipality')" class="help-block">{{ errors.first('municipality') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('postNumber')}">
              <label class="control-label" for="amount">Poštanski broj</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('postNumber') }" name="postNumber" type="text" v-model="formData.postNumber" class="form-control" id="postNumber">
                <span v-show="errors.has('postNumber')" class="help-block">{{ errors.first('postNumber') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('tel')}">
              <label class="control-label" for="address">Telefon</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('tel') }" name="tel" type="text" v-model="formData.tel" class="form-control" id="tel" placeholder="">
                <span v-show="errors.has('tel')" class="help-block">{{ errors.first('tel') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('mob')}">
              <label class="control-label" for="amount">Mobitel</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('mob') }" name="mob" type="text" v-model="formData.mob" class="form-control" id="mob">
                <span v-show="errors.has('mob')" class="help-block">{{ errors.first('mob') }}</span>
              </p>
            </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
              <div class="horizontal_line"></div>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('position')}">
              <label class="control-label" for="position">Zanimanje</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('position') }" name="position" type="text" v-model="formData.position" class="form-control" id="position" placeholder="">
                <span v-show="errors.has('position')" class="help-block">{{ errors.first('position') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('qualifications')}">
              <label class="control-label" for="qualifications">Stručna sprema</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('qualifications') }" name="qualifications" type="text" v-model="formData.qualifications" class="form-control" id="qualifications" placeholder="">
                <span v-show="errors.has('qualifications')" class="help-block">{{ errors.first('qualifications') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
              <label class="control-label">U radnom odnosu</label>
              <CompositeButton></CompositeButton>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('nameOfEmployer')}">
              <label class="control-label" for="nameOfEmployer">Naziv poslodavca</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('nameOfEmployer') }" name="nameOfEmployer" type="text" v-model="formData.nameOfEmployer" class="form-control" id="nameOfEmployer" placeholder="">
                <span v-show="errors.has('nameOfEmployer')" class="help-block">{{ errors.first('nameOfEmployer') }}</span>
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

      <div v-if="step === 3">
        <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">MAJKA DJETETA</p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
              <label class="control-label" for="name">Ime i prezime</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
                <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('jmbg')}">
              <label class="control-label" for="jmbg">JMBG</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('jmbg') }" name="jmbg" type="text" v-model="formData.jmbg" class="form-control" id="jmbg" placeholder="">
                <span v-show="errors.has('jmbg')" class="help-block">{{ errors.first('jmbg') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('citizenId')}">
              <label class="control-label" for="citizenId">LK</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('citizenId') }" name="citizenId" type="text" v-model="formData.citizenId" class="form-control" id="citizenId" placeholder="">
                <span v-show="errors.has('citizenId')" class="help-block">{{ errors.first('citizenId') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('issuedBy')}">
              <label class="control-label" for="issuedBy">Izdata od</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('issuedBy') }" name="issuedBy" type="text" v-model="formData.issuedBy" class="form-control" id="issuedBy" placeholder="">
                <span v-show="errors.has('issuedBy')" class="help-block">{{ errors.first('issuedBy') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
              <label class="control-label" for="amount">Adresa</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address">
                <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
              <label class="control-label" for="address">Općina</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
                <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('municipality')}">
              <label class="control-label" for="address">Mjesto</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('municipality') }" name="municipality" type="text" v-model="formData.municipality" class="form-control" id="municipality" placeholder="">
                <span v-show="errors.has('municipality')" class="help-block">{{ errors.first('municipality') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('postNumber')}">
              <label class="control-label" for="amount">Poštanski broj</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('postNumber') }" name="postNumber" type="text" v-model="formData.postNumber" class="form-control" id="postNumber">
                <span v-show="errors.has('postNumber')" class="help-block">{{ errors.first('postNumber') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('tel')}">
              <label class="control-label" for="address">Telefon</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('tel') }" name="tel" type="text" v-model="formData.tel" class="form-control" id="tel" placeholder="">
                <span v-show="errors.has('tel')" class="help-block">{{ errors.first('tel') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('mob')}">
              <label class="control-label" for="amount">Mobitel</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('mob') }" name="mob" type="text" v-model="formData.mob" class="form-control" id="mob">
                <span v-show="errors.has('mob')" class="help-block">{{ errors.first('mob') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
              <div class="horizontal_line"></div>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('position')}">
              <label class="control-label" for="position">Zanimanje</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('position') }" name="position" type="text" v-model="formData.position" class="form-control" id="position" placeholder="">
                <span v-show="errors.has('position')" class="help-block">{{ errors.first('position') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('qualifications')}">
              <label class="control-label" for="qualifications">Stručna sprema</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('qualifications') }" name="qualifications" type="text" v-model="formData.qualifications" class="form-control" id="qualifications" placeholder="">
                <span v-show="errors.has('qualifications')" class="help-block">{{ errors.first('qualifications') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height">
              <label class="control-label">U radnom odnosu</label>
              <CompositeButton></CompositeButton>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('nameOfEmployer')}">
              <label class="control-label" for="nameOfEmployer">Naziv poslodavca</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('nameOfEmployer') }" name="nameOfEmployer" type="text" v-model="formData.nameOfEmployer" class="form-control" id="nameOfEmployer" placeholder="">
                <span v-show="errors.has('nameOfEmployer')" class="help-block">{{ errors.first('nameOfEmployer') }}</span>
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

      <div v-if="step === 4">
        <form class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <p class="large_head">PODACI O PORODICI</p>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
                <label class="control-label label-check" for="note">Bračni status roditelja</label>
                <div class="row no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Neoženjen/Neudata</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                    <div class="right"><label>Oženjen/Udata</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                    <div class="right"><label>Udovac/ica</label></div>
                  </div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                      <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                      <div class="right"><label>Razveden/a</label></div>
                    </div>
                    <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                      <CheckInput :text="this.text" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check" for="note">Molimo pobrojati članove domaćinstva koji su u zajedničkom kućanstvu</label>
              <table class="table table-bordered editable-table">
                <thead>
                <tr>
                  <th scope="col">R.b.</th>
                  <th scope="col">Ime i prezime</th>
                  <th scope="col">JMBG</th>
                  <th scope="col">Srodstvo sa oboljelim</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">{{i}}</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">{{i+1}}</th>
                  <td><input type="text" class="inline-input"></td>
                  <td><input type="text" class="inline-input"></td>
                  <td><input type="text" class="inline-input"></td>
                </tr>
                </tbody>
              </table>
              <div class="new-btn">
                <i class="fa fa-plus"></i>
                <label>Novi unos</label>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check" for="note">Da li neko od članova porodice boluje od</label>
              <div class="row no-padding">
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textSecond' :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textThird" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>ima status osobe sa posebnim potrebama</label></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check" for="note">Odnosi u porodici</label>
              <div class="row no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,5)"></Checkbox></div>
                    <div class="right"><label>Dobri</label></div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,6)"></Checkbox></div>
                    <div class="right"><label>Odlični</label></div>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,7)"></Checkbox></div>
                    <div class="right"><label>Problematični</label></div>
                  </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check" for="note">Mjesečni prihodi porodice <span class="grey">(odabrati vrstu i navesti iznos)</span></label>
              <div class="row no-padding">
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textForth' :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textFive" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textSix' :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textSeven" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding">
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                    <CheckInput :text='this.textEight' :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                  <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                    <CheckInput :text="this.textNine" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <div class="row no-padding">
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                  <label class="control-label label-check left-bs-padding" for="note">Porodica stanuje u</label>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Kući</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Stanu</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Ostalo</label></div>
                  </div>
                </div>
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                  <label class="control-label label-check left-bs-padding" for="note">Uslovi stanovanja</label>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Dobri</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Odlični</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,1)"></Checkbox></div>
                    <div class="right"><label>Zadovoljavajući</label></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group no-padding">
              <label class="control-label label-check" for="note">Stambeni objekat je</label>
              <div class="row no-padding">
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                    <div class="right"><label>U sopstvenom vlasništvu</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                    <div class="right"><label>Iznajmljen</label></div>
                  </div>
                </div>
                <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding">
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <div class="left"><Checkbox @onChecked="setCheckbox($event,4)"></Checkbox></div>
                    <div class="right"><label>Vlasništvu roditelja/srodnika</label></div>
                  </div>
                  <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 no-padding check-box">
                    <CheckInput :text="this.text" :disabled="true" @sendInputToParent="readInput"></CheckInput>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group form-group-btns">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="submit()" class="button_save" type="submit"><p class="save-text">Save</p></button>
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
export default{
  name: 'Form',
  components: {
    Checkbox,
    CompositeButton,
    CheckInput
  },
  props: ['formData'],
  data () {
    return {
      type: [
        { value: null, text: 'Selektujte opciju', selected: true },
        { value: 'Institucija', text: 'Institucija' },
        { value: 'Fizičko lice', text: 'Fizičko lice' },
        { value: 'Pravno lice', text: 'Pravno lice' }
      ],
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
      textNine: 'Ostali prihodi'
    }
  },
  methods: {
    save: function () {
      this.$emit('onDataEmit', this.formData)
      console.log(this.formData)
    },
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.save()
        } else {
        }
      })
    },
    setFieldGoingToSchool (event) {
      this.formData.child.goingToSchool = event
    },
    setFieldGoingToGarden (event) {
      // this.formData.child.goingToGarden = event
    },
    setCheckboxHealthState (event) {
      this.formData.child.healthState = event
      console.log(event)
    },
    prev () {
      this.step--
    },
    next () {
      this.step++
    },
    submit () {
      alert('Submit to blah and show blah and etc.')
    },
    setCheckbox (event, number) {
      console.log(number)
      console.log(event)
    },
    readInput (event) {
      console.log(event)
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/styles/mixins";
@import "../../assets/styles/form";
@import "../../assets/styles/general";

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
  .modal-close
  {
    background: transparent;
    float: right;
    border: none;
    @include font(2, 500, $red);
    margin-right: -2.5em;
    margin-top: -0.3em;
    &:focus
    {
      border: none;
      outline: none;
    }
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
}

</style>
