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
                  <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('jmbg') }" name="jmbg" type="text" v-model="formData.jmbg" class="form-control" id="jmbg" placeholder="">
                  <span v-show="errors.has('jmbg')" class="help-block">{{ errors.first('jmbg') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('dateOfBirth')}">
                <label class="control-label" for="dateOfBirth">Datum rođenja</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('dateOfBirth') }" name="dateOfBirth" type="date" v-model="formData.dateOfBirth" class="form-control" id="dateOfBirth" placeholder="">
                  <span v-show="errors.has('dateOfBirth')" class="help-block">{{ errors.first('dateOfBirth') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('placeOfBirth')}">
                <label class="control-label" for="address">Mjesto rođenja</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('placeOfBirth') }" name="placeOfBirth" type="text" v-model="formData.placeOfBirth" class="form-control" id="placeOfBirth" placeholder="">
                  <span v-show="errors.has('placeOfBirth')" class="help-block">{{ errors.first('placeOfBirth') }}</span>
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
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('postNumber')}">
                <label class="control-label" for="amount">Dijete ide u školu</label>
                <b-button-group size="lg">
                  <b-button variant="outline-success lg" class="toggle-btn">
                    Da
                  </b-button>
                  <b-button variant="outline-success lg" class="toggle-btn">
                    Ne
                  </b-button>
                </b-button-group>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group">
                <div class="horizontal_line"></div>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('diagnose')}">
                <label class="control-label" for="diagnose">Dijagnoza</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('diagnose') }" name="diagnose" type="text" v-model="formData.diagnose" class="form-control" id="diagnose" placeholder="">
                  <span v-show="errors.has('diagnose')" class="help-block">{{ errors.first('diagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('dateOfDiagnose')}">
                <label class="control-label" for="dateOfDiagnose">Datum dijagnoze</label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required|date'" :class="{'input': true, 'has-error': errors.has('dateOfDiagnose') }" name="dateOfDiagnose" type="date" v-model="formData.dateOfDiagnose" class="form-control" id="dateOfDiagnose" placeholder="">
                  <span v-show="errors.has('dateOfDiagnose')" class="help-block">{{ errors.first('dateOfDiagnose') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('note')}">
                <label class="control-label" for="note">Napomena<span class="grey">(ukoliko dijete ima posebne potrebe ili ograničenja, upisati iste)</span></label>
                <p :class="{ 'control': true }">
                  <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('note') }" name="note" type="text" v-model="formData.note" class="form-control" id="note" placeholder="">
                  <span v-show="errors.has('note')" class="help-block">{{ errors.first('note') }}</span>
                </p>
              </div>
              <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 form-group min-row-height">
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 px-0 no-padding">
                  <label class="control-label" for="note">Zdravsteno stanje djeteta<span class="grey">(trenutno)</span></label>
                </div>
                <div class="col-12 col-xl-12 col-md-12 col-xs-12 col-lg-12 px-0 no-padding">
                    <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                      <div class="left"><Checkbox :checked="true"></Checkbox></div>
                      <div class="right"><label>Izliječeno</label></div>
                    </div>
                    <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                      <div class="left"><Checkbox></Checkbox></div>
                      <div class="right"><label>Na održavanju</label></div>
                    </div>
                    <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                      <div class="left"><Checkbox></Checkbox></div>
                      <div class="right"><label>Završilo sa liječenjem i održavanjem</label></div>
                    </div>
                    <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 no-padding check-box">
                      <div class="left"><Checkbox></Checkbox></div>
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
        <div class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <label class="control-label" ><p>OTAC DJETETA</p>
              </label>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('company')}">
              <label class="control-label" for="company">Naziv kompanije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('company') }" id="company" name="company" type="text" v-model="formData.company" class="form-control" placeholder="">
                <span v-show="errors.has('company')" class="help-block">{{ errors.first('company') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
              <label class="control-label" for="name">Ime i prezime*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
                <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('email')}">
              <label class="control-label" for="email">Email*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
                <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
              <label class="control-label" for="address">Adresa*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address" placeholder="">
                <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
              <label class="control-label" for="address">Grad*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
                <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('amount')}">
              <label class="control-label" for="amount">Iznos donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('amount') }" name="amount" type="number" v-model="formData.amount" class="form-control donation_amount" id="amount" placeholder="00">
                <span v-show="errors.has('amount')" class="help-block">{{ errors.first('amount') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('cause')}">
              <label class="control-label" for="cause">Svrha donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('cause') }" id="cause" name="cause" type="text" v-model="formData.cause" class="form-control" placeholder="">
                <span v-show="errors.has('cause')" class="help-block">{{ errors.first('cause') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="step === 3">
        <div class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <label class="control-label" ><p>MAJKA DJETETA</p>
              </label>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('company')}">
              <label class="control-label" for="company">Naziv kompanije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('company') }" id="company" name="company" type="text" v-model="formData.company" class="form-control" placeholder="">
                <span v-show="errors.has('company')" class="help-block">{{ errors.first('company') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
              <label class="control-label" for="name">Ime i prezime*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
                <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('email')}">
              <label class="control-label" for="email">Email*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
                <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
              <label class="control-label" for="address">Adresa*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address" placeholder="">
                <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
              <label class="control-label" for="address">Grad*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
                <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('amount')}">
              <label class="control-label" for="amount">Iznos donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('amount') }" name="amount" type="number" v-model="formData.amount" class="form-control donation_amount" id="amount" placeholder="00">
                <span v-show="errors.has('amount')" class="help-block">{{ errors.first('amount') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('cause')}">
              <label class="control-label" for="cause">Svrha donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('cause') }" id="cause" name="cause" type="text" v-model="formData.cause" class="form-control" placeholder="">
                <span v-show="errors.has('cause')" class="help-block">{{ errors.first('cause') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="next()" class="button_save" type="submit"><p class="save-text">Dalje</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="step === 4">
        <div class="newEntryForm heartForm" @submit.prevent="validateBeforeSubmit">
          <div slot="top-right">
            <button @click="$modal.hide('modal_entry')" class="modal-close">
              X
            </button>
          </div>
          <h3 class="form-header">Novi unos</h3>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group min-row-height">
              <label class="control-label" ><p>PODACI O PORODICI</p>
              </label>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('company')}">
              <label class="control-label" for="company">Naziv kompanije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('company') }" id="company" name="company" type="text" v-model="formData.company" class="form-control" placeholder="">
                <span v-show="errors.has('company')" class="help-block">{{ errors.first('company') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('name')}">
              <label class="control-label" for="name">Ime i prezime*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('name') }" name="name" type="text" v-model="formData.name" class="form-control" id="name" placeholder="">
                <span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('email')}">
              <label class="control-label" for="email">Email*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'has-error': errors.has('email') }" name="email" type="text" v-model="formData.email" class="form-control" id="email" placeholder="">
                <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('address')}">
              <label class="control-label" for="address">Adresa*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('address') }" name="address" type="text" v-model="formData.address" class="form-control" id="address" placeholder="">
                <span v-show="errors.has('address')" class="help-block">{{ errors.first('address') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('city')}">
              <label class="control-label" for="address">Grad*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('city') }" name="city" type="text" v-model="formData.city" class="form-control" id="city" placeholder="">
                <span v-show="errors.has('city')" class="help-block">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div class="col-12 col-xl-6 col-md-6 col-xs-6 col-lg-6 form-group min-row-height" v-bind:class="{'has-error':errors.has('amount')}">
              <label class="control-label" for="amount">Iznos donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required|numeric'" :class="{'input': true, 'has-error': errors.has('amount') }" name="amount" type="number" v-model="formData.amount" class="form-control donation_amount" id="amount" placeholder="00">
                <span v-show="errors.has('amount')" class="help-block">{{ errors.first('amount') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 form-group min-row-height" v-bind:class="{'has-error':errors.has('cause')}">
              <label class="control-label" for="cause">Svrha donacije*</label>
              <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'has-error': errors.has('cause') }" id="cause" name="cause" type="text" v-model="formData.cause" class="form-control" placeholder="">
                <span v-show="errors.has('cause')" class="help-block">{{ errors.first('cause') }}</span>
              </p>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 form-group">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="prev()" class="button_save_left" type="submit"><p class="save-text">Nazad</p></button>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 form-group">
                <button @click.prevent="submit()" class="button_save" type="submit"><p class="save-text">Save</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Checkbox from '@/components/partials/Checkbox'
export default{
  name: 'Form',
  components: {
    Checkbox
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
      registration: {
        name: null,
        email: null,
        street: null,
        city: null,
        state: null,
        numtickets: 0,
        shirtsize: 'XL'
      }
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
    prev () {
      this.step--
    },
    next () {
      this.step++
    },
    submit () {
      alert('Submit to blah and show blah and etc.')
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
}

</style>
