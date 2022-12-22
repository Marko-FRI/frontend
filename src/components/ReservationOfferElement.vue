<template>
  <div class="row wrap q-px-xl q-my-xl q-pb-md">
    <div
      class="col-3"
      style="text-align: center"
    >
      <img
        src="../pages/food.jpg"
        class="food-image"
      >
    </div>
    <div class="col-9 row wrap">
      <div class="col-6 text-h6">
        Sirov Burek
        <q-icon
          name="info_outlined"
          class="q-pl-md info-icon-top"
        >
          <q-tooltip
            anchor="center right"
            self="center left"
          >
            <span class="text-h6">Alergeni</span>
            <ol class="q-px-lg info-popup-text">
              <li
                v-for="alergen in menu.alergens"
                :key="alergen.id_alergen"
              >
                {{ alergen.name }}
              </li>
            </ol>
          </q-tooltip>
        </q-icon>
      </div>
      <div
        class="col-6 text-green-7 text-h6"
        style="text-align: right"
      >
        3.20 €
      </div>
      <div class="col-12 light-black-text">
        skjgqiewrogj oiegjeoigeorig jerigo jweegio wejg wijg oiwjg wejgewoijgweoi woee weoijw oije2goi ewgjiowej gwiogjweoig
      </div>
      <div
        class="col-12 row no-wrap justify-end"
      >
        <q-btn
          label="-"
          unelevated
          outline
          color="green-7"
          class="col-1 custom-height custom-border-rad-left bg-white"
        />
        <q-input
          type="number"
          square
          outlined
          dense
          align="center"
          color="green-7"
          bg-color="white"
          input-style="text-align: center"
          class="col-1 custom-height custom-border-rad-middle custom-hover"
        />
        <q-btn
          label="+"
          unelevated
          outline
          color="green-7"
          class="col-1 custom-height custom-border-rad-right bg-white"
        />
      </div>
    </div>
    <q-separator
      color="grey"
      width="100%"
      inset
      class="q-mt-xl"
    />
  </div>
</template>

<script>
export default {
  name: 'ReservationOfferElement',

  props: ['menu']
}
</script>

<style scoped>
    .food-image {
        width: 189px;
        height: 144px;
    }

    .light-black-text {
        color: #504A3E;
    }

    .info-popup-text {
        font-size: 0.9rem;
    }

    .info-icon-top {
        margin-top: -0.1rem;
    }

    .info-icon-top:hover {
        cursor: pointer;
    }

    .num-picks-label {
        border: 1px solid black;
    }

    .custom-height {
        height: 40px !important;
    }

    .q-input--outlined .q-input__control:before {
        border: 1px solid green !important;
    }

    .custom-border-rad-left {
        border-radius: 5px 0px 0px 5px;
    }

    .custom-border-rad-right {
        border-radius: 0px 5px 5px 0px;
    }

    .custom-border-rad-middle {
        border-radius: 0px;
    }

    :deep(input[type="number"]::-webkit-outer-spin-button), :deep(input[type="number"]::-webkit-inner-spin-button) {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }

    :deep(input[type="number"]) {
        -moz-appearance: textfield !important;
    }

    :deep(.q-field--outlined .q-field__control:before) {
        border-top: 1px solid #43A047;
        border-bottom: 1px solid #43A047;
        border-left: 0px solid #43A047;
        border-right: 0px solid #43A047;
    }

    :deep(.q-field--outlined:hover .q-field__control:before) {
        border-top: 1px solid #43A047;
        border-bottom: 1px solid #43A047;
        border-left: 0px;
        border-right: 0px;
    }
</style>
