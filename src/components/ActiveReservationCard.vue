<template>
  <div class="row wrap">
    <div class="col-12 col-sm-4 self-baseline">
      <q-img
        :src="activeReservation.image"
        alt="Ni slike"
        fit
      />
    </div>

    <div class="col-12 col-sm-8 row wrap q-px-md self-stretch">
      <router-link
        :to="'/restaurant/' + activeReservation.id_restaurant"
        class="col-8 text-h5 q-mb-md custom-link"
      >
        <div>
          {{ activeReservation.name }}
        </div>
      </router-link>
      <div
        class="col-4 text-positive text-h5"
        style="text-align: right"
      >
        {{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ activeReservation.number_of_personel }}
        <q-icon
          name="person"
          color="positive"
        />
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ date }}
        <q-icon
          name="event"
          color="positive"
        />
      </div>
      <div class="col-4 text-h5 custom-font-color">
        {{ time }}
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
        v-if="activeReservation.note !== null"
        class="col-10 q-mx-auto custom-font-color q-mt-md text-h6"
      >
        <span class="text-h5">(</span>Opomba: {{ activeReservation.note }}<span class="text-h5">)</span>
      </div>
      <div
        class="col-10 q-mx-auto q-mt-lg text-right"
      >
        <q-btn
          label="Prekliči rezervacijo"
          color="white"
          flat
          no-caps
          size="1.15rem"
          class="bg-red-8 border-rad button-float"
          @click="confirmDelete = true"
        />
      </div>
      <div
        class="col-10 q-mx-auto q-mt-xl text-right"
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
      totalPrice: 0,
      time: '',
      date: ''
    }
  },

  mounted () {
    const d = new Date(this.activeReservation.date_and_time_of_reservation.split(' '))
    this.date = d.getDate() + '. ' + (d.getMonth() + 1) + '. ' + d.getFullYear()
    this.time = d.getHours() + ':' + d.getMinutes()

    this.activeReservation.pickedMenus.forEach(pickedMenu => {
      this.totalPrice += (pickedMenu.quantity * pickedMenu.price)
    })

    console.log(this.activeReservation)
  },

  methods: {
    deleteReservation () {
      this.$emit('deleteReservation', this.activeReservation.id_reservation)
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

    .custom-link {
      text-decoration: none;
      color: black;
    }

    .info-button:hover {
        cursor: pointer;
    }

    .border-rad {
        border-radius: 5px;
    }
</style>
