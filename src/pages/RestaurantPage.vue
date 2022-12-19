<template>
  <div>
    <img
      class="header-img"
      src="./restaurant_header_picture.png"
      alt="default"
    >
    <div class="col-12 row no-wrap change-position-top">
      <div class="q-pl-xl col-8 custom-text">
        Gostilna Pod Lipco
      </div>
      <div class="col-4">
        <q-btn
          label="Dodaj med priljubljene"
          color="white"
          flat
          no-caps
          size="1.15rem"
          class="bg-green-7 border-rad q-px-lg button-float q-mr-xl"
        />
      </div>
    </div>

    <div class="col-12 row items-start">
      <div class="col-8 row wrap justify-start q-gutter-y-md q-ma-none">
        <div
          class="col-12 row q-pa-none q-ma-none"
        >
          <q-tabs
            v-model="tab"
            class="col-9 row q-pa-none q-ma-none"
          >
            <!-- Ko se izbere enega, se spremeni barva v zeleno -->
            <q-tab
              name="ponudba"
              label="Ponudba"
              color="green-8"
              no-caps
              class="offset-2 col-3"
            />
            <q-tab
              name="mnenja"
              label="Mnenja"
              no-caps
              class="col-3"
            />
            <q-tab
              name="informacije"
              label="Informacije"
              no-caps
              class="col-3"
            />
          </q-tabs>
          <q-btn
            label="Rezerviraj"
            color="white"
            flat
            no-caps
            style="font-size: 1.5rem"
            class="col-3 bg-green-7 border-rad q-ma-none q-pa-none"
          />
        </div>
        <q-separator
          color="grey"
          width="100%"
          inset
        />
        <div
          class="col-12 wrap"
        >
          <q-tab-panels
            v-model="tab"
            animated
            class="col-12 row wrap"
          >
            <q-tab-panel
              name="mnenja"
              class="col-12 row wrap"
            >
              <div
                class="text-h5 col-12 q-pb-lg"
                style="text-align:center"
              >
                Povprečna ocena
              </div>
              <div
                class="offset-4 col-8"
              >
                <q-icon
                  name="star"
                  size="4rem"
                  color="green-7"
                  class="avg-rating-stars-top"
                />
                <q-icon
                  name="star"
                  size="4rem"
                  color="green-7"
                  class="avg-rating-stars-top"
                />
                <q-icon
                  name="star"
                  size="4rem"
                  color="green-7"
                  class="avg-rating-stars-top"
                />
                <q-icon
                  name="star_half"
                  size="4rem"
                  color="green-7"
                  class="avg-rating-stars-top"
                />
                <q-icon
                  name="star_border"
                  size="4rem"
                  color="green-7"
                  class="q-pr-lg avg-rating-stars-top"
                />

                <span class="avg-rating-text text-green-7">3.4/5</span>
              </div>
              <div
                class="offset-4 col-8 num-ratings-text text-green-7 q-pl-sm q-pt-sm"
              >
                Število mnenj: 63
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
      <div class="col-4 row wrap">
        <div class="col-12 row q-mb-lg">
          <fieldset class="offset-2 col-8">
            <legend>Odpiralni čas</legend>
            <div class="q-mb-sm q-mt-md font-right-side-schedule align-center-schedule">
              Ponedeljek: 7:00 - 18.00
            </div>
            <div class="q-mb-sm font-right-side-schedule align-center-schedule">
              Torek: 7:00 - 18.00
            </div>
            <div class="q-mb-sm font-right-side-schedule align-center-schedule">
              Sreda: 7:00 - 18.00
            </div>
            <div class="q-mb-sm font-right-side-schedule align-center-schedule">
              Četrtek: 7:00 - 18.00
            </div>
            <div class="q-mb-sm font-right-side-schedule align-center-schedule">
              Petek: 7:00 - 18.00
            </div>
            <div class="q-mb-sm font-right-side-schedule align-center-schedule">
              Sobota: 7:00 - 18.00
            </div>
            <div class="q-mb-md font-right-side-schedule align-center-schedule">
              Nedelja: zaprto
            </div>
          </fieldset>
        </div>
        <div class="col-12 row q-mb-lg">
          <fieldset class="offset-2 col-8">
            <legend>Kontakt</legend>
            <div
              class="q-mb-md q-mt-md font-right-side-contact align-center-contact"
            >
              <q-icon name="place" />
              Stožice 26, 1000 Ljubljana
            </div>
            <div class="q-mb-md font-right-side-contact align-center-contact">
              <q-icon name="mail" />
              <span class="underline q-ml-sm">lipca.gostilna@gmail.com</span>
            </div>
            <div class="q-mb-md font-right-side-contact align-center-contact">
              <q-icon name="phone" />
              <span class="underline q-ml-sm">01 566 24 44</span>
            </div>
          </fieldset>
        </div>
        <div class="col-12 row q-mb-lg">
          <fieldset class="offset-2 col-8 row">
            <legend>Vaše mnenje</legend>
            <div class="offset-1 col-10 q-my-md font-right-side-comment">
              <div>Vaša ocena:</div>
              <div class="q-gutter-y-md column q-mb-md">
                <q-rating
                  v-model="userRating"
                  size="xl"
                  max="5"
                  color="green-7"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                />
              </div>
              <div>Napiši Komentar</div>
              <div class="q-mb-md col-12 row">
                <textarea
                  class="col-12"
                  rows="4"
                />
              </div>
              <q-btn
                label="Dodaj komentar"
                color="white"
                flat
                no-caps
                style="font-size: 1rem"
                class="bg-green-7 border-rad"
              />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantPage',

  data () {
    return {
      tab: 'mnenja',
      userRating: 0
    }
  }
}
</script>

<style scoped>
  .header-img {
    filter: brightness(35%);
    width: 100%;
    height: auto;
    z-index: -1;
  }

  .border-rad {
    border-radius: 5px;
  }

  .change-position-top {
    margin-top: -65px;
    margin-bottom: 37px;
  }

  .custom-text {
    color: white;
    font-size: 30px;
    z-index: 1;
  }

  .button-float {
    float: right;
    margin-top: -8px;
  }

  :deep .q-tab__label {
   font-size: 1.5rem;
  }

  fieldset {
    border: 2px solid #759242;
    border-radius: 5px;
    width: 100%;
    margin-left: -1px;
  }

  legend {
    color: black;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    padding-left: 5px;
    padding-right: 5px;
  }

  .font-right-side-schedule {
    font-size: 1.1rem;
  }

  .font-right-side-contact {
    font-size: 1.2rem;
  }

  .align-center-schedule {
    margin-left: 20%;
  }

  .align-center-contact {
    margin-left: 10%;
  }

  .underline {
    text-decoration: underline;
  }

  .font-right-side-comment {
    font-size: 1.3rem;
    color: #757575;
  }

  textarea {
    resize: none;
    font-size: 1.1rem;
    border-radius: 3px;
  }

  textarea:focus {
    outline: none !important;
    border:2px solid #3f8dd9;
  }

  .pejt-gor {
    margin-top: -420px;
  }

  .avg-rating-text {
    text-decoration: underline;
    font-size: 2rem;
  }

  .avg-rating-stars-top {
    margin-top: -0.9rem;
  }

  .num-ratings-text {
    text-decoration: underline;
    font-size: 1.2rem;
  }
</style>
