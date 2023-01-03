<template>
  <div class="row wrap">
    <div class="col-12 col-sm-4 self-baseline">
      <q-img
        src="../pages/food.jpg"
        fit
      />
    </div>

    <div class="col-12 col-sm-8 row wrap q-px-md self-stretch">
      <div class="col-8 text-h5 q-mb-md">
        {{ pastReservation.name }}
      </div>
      <div
        class="col-4 text-positive text-h5"
        style="text-align: right"
      >
        {{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ pastReservation.numPersons }}
        <q-icon
          name="person"
          color="positive"
        />
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ pastReservation.date }}
        <q-icon
          name="event"
          color="positive"
        />
      </div>
      <div class="col-4 text-h5 custom-font-color">
        {{ pastReservation.time }}
        <q-icon
          name="schedule"
          color="positive"
        />
      </div>
      <div
        class="col-12 col-sm-8 text-h6 text-right custom-font-color"
      >
        <span
          v-if="!showMoreInfo"
          class="info-button"
          @click="showMoreInfo = true"
        >Več informacij o naročilu</span>
      </div>
    </div>
    <div
      v-if="showMoreInfo"
      class="col-12 row wrap"
    >
      <div
        class="text-h5 q-my-lg col-12"
        style="text-align: center"
      >
        Vaše naročilo
      </div>
      <div
        class="text-h6 col-10 custom-font-color q-mx-auto"
      >
        <div
          v-for="(pickedMenu) in pastReservation.pickedMenus"
          :key="pickedMenu.id_menu"
        >
          <div
            class="row no-wrap"
          >
            <span class="col-8">{{ pickedMenu.name }} {{ pickedMenu.quantity }}x</span>
            <span
              class="col-4"
              style="text-align: right"
            >{{ (Math.round((pickedMenu.price * pickedMenu.quantity) * 100) / 100).toFixed(2) }} €</span>
          </div>
        </div>
      </div>
      <div class="col-10 q-mx-auto">
        <q-separator
          color="black"
          width="100%"
          class="q-my-md"
        />
      </div>
      <div class="col-10 q-mx-auto row no-wrap text-h6 custom-font-color">
        <span class="col-8">Skupaj</span>
        <span
          class="col-4"
          style="text-align: right"
        >{{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €</span>
      </div>
      <div
        class="col-10 q-mx-auto q-mt-xl text-right"
      >
        <span
          class="info-button text-h6 custom-font-color"
          @click="showMoreInfo = false"
        >
          Manj informacij o naročilu
        </span>
      </div>
    </div>
    <div
      class="col-12"
      style="margin-left: -1rem"
    >
      <q-separator
        color="grey"
        width="100%"
        inset
        :class="(showMoreInfo) ? 'q-mt-md q-mb-xl' : 'q-mt-xl q-mb-xl'"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PastReservationCard',

  props: ['pastReservation'],

  data () {
    return {
      showMoreInfo: false,
      totalPrice: 23.20
    }
  }

//   mounted () {
//     this.totalPrice
//   }
}
</script>

<style scoped>
    .custom-font-color {
        color: #504A3E;
    }

    .info-button:hover {
        cursor: pointer;
    }
</style>
