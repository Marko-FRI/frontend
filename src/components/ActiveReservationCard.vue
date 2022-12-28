<template>
  <div class="row wrap">
    <img
      src="../pages/food.jpg"
      class="col-4"
    >
    <div class="col-8 row wrap q-px-md">
      <div class="col-8 text-h5 q-mb-md">
        {{ activeReservation.name }}
      </div>
      <div
        class="col-4 text-green-7 text-h5"
        style="text-align: right"
      >
        {{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ activeReservation.numPersons }}
        <q-icon
          name="person"
          color="green-7"
        />
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ activeReservation.date }}
        <q-icon
          name="event"
          color="green-7"
        />
      </div>
      <div class="col-4 text-h5 custom-font-color">
        {{ activeReservation.time }}
        <q-icon
          name="schedule"
          color="green-7"
        />
      </div>
      <div
        class="col-8 text-h6 custom-font-color"
        style="text-align: right"
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
        class="text-h6 offset-3 col-6 custom-font-color"
      >
        <div
          v-for="(pickedMenu) in activeReservation.pickedMenus"
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
      <div class="offset-3 col-6">
        <q-separator
          color="black"
          width="100%"
          class="q-my-md"
        />
      </div>
      <div class="offset-3 col-6 row no-wrap text-h6 custom-font-color">
        <span class="col-8">Skupaj</span>
        <span
          class="col-4"
          style="text-align: right"
        >{{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €</span>
      </div>
      <div
        class="col-12 q-mt-xl"
        style="text-align: center"
      >
        <q-btn
          label="Prekliči rezervacijo"
          color="white"
          flat
          no-caps
          size="1.15rem"
          class="bg-red-8 border-rad q-px-lg button-float q-mr-xl"
          @click="confirmDelete = true"
        />
      </div>
      <div
        class="col-12 q-mt-xl"
        style="text-align: right"
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
    <q-dialog
      v-model="confirmDelete"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center text-h5 q-pa-xl">
          <span class="q-ml-sm">Ali ste prepričani, da želite preklicati rezervacijo?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            label="Ne"
            color="primary"
            no-caps
            style="font-size: 1rem"
            class="border-rad text-grey-7"
            @click="confirmDelete = false"
          />
          <q-btn
            v-close-popup
            flat
            label="Da"
            color="white"
            no-caps
            style="font-size: 1rem"
            class="bg-red-8 border-rad q-ma-sm"
            @click="deleteReservation"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'ActiveReservationCard',

  props: ['activeReservation'],

  data () {
    return {
      confirmDelete: false,
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

    .border-rad {
        border-radius: 5px;
    }
</style>
