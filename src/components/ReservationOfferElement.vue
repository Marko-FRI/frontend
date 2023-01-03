<template>
  <div class="row wrap q-px-xl q-my-xl q-pb-md">
    <div
      class="col-3"
      style="text-align: center"
    >
      <img
        :src="menu.image_path"
        class="food-image"
      >
    </div>
    <div class="col-9 row wrap">
      <div class="col-6 text-h6">
        Meni {{ menu.name }}
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
                v-for="(alergen, alergenIndex) in menu.alergens"
                :key="alergenIndex"
              >
                {{ alergen }}
              </li>
            </ol>
          </q-tooltip>
        </q-icon>
      </div>
      <div
        class="col-6 text-positive text-h6"
        style="text-align: right"
      >
        {{ (Math.round(menu.price * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 light-black-text">
        {{ menu.description }}
      </div>
      <div
        class="col-12 row no-wrap justify-end"
      >
        <q-btn
          label="-"
          unelevated
          outline
          color="positive"
          class="col-1 custom-height custom-border-rad-left bg-white"
          @click="decrementNumOfOrders"
        />
        <q-input
          v-model="numOfOrders"
          type="number"
          square
          outlined
          dense
          align="center"
          color="positive"
          bg-color="white"
          input-style="text-align: center"
          class="col-1 custom-height custom-border-rad-middle custom-hover"
          @input="onInput"
          @keydown="keyHandler"
        />
        <q-btn
          label="+"
          unelevated
          outline
          color="positive"
          class="col-1 custom-height custom-border-rad-right bg-white"
          @click="incrementNumOfOrders"
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
// imas tabelo, toliko veliko kot je elementov, če se poveča +,
// dodamo v tabelo +1 na index_menija (če je page npr 2. damo index + 4*(2-1))

export default {
  name: 'ReservationOfferElement',

  props: ['menu', 'index', 'numOfOrdersParent'],

  data () {
    return {
      numOfOrders: 0
    }
  },

  watch: {
    numOfOrders (newNumOfOrders, oldNumOfOrders) {
      this.$emit('onChangePickedOrders', newNumOfOrders, oldNumOfOrders, this.index)
    }
  },

  mounted () {
    this.numOfOrders = this.numOfOrdersParent
  },

  methods: {
    onInput (val) {
      this.numOfOrders = val
      if (val && val < 0) {
        this.numOfOrders = 0
      }
      if (val && (val - Math.floor(val)) === 0) {
        this.numOfOrders = Math.floor(val)
      }
    },

    keyHandler (evt) {
      if (this.numOfOrders < 1 && evt.key === 'ArrowDown') {
        evt.preventDefault()
      }
      if (evt.key === '-') {
        evt.preventDefault()
      }
      if (evt.key === '.') {
        evt.preventDefault()
      }
      if (evt.key === ',') {
        evt.preventDefault()
      }
    },

    incrementNumOfOrders () {
      this.numOfOrders++
    },

    decrementNumOfOrders () {
      if (this.numOfOrders >= 1) { this.numOfOrders-- }
    }
  }
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
        border: 1px solid #759242 !important;
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
