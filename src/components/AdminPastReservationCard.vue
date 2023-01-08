<template>
  <div>
    <div class="row wrap q-px-md self-stretch">
      <div class="col-8 text-h5">
        {{ pastReservation.userName }} {{ pastReservation.userSurname }}
      </div>
      <div
        class="col-4 text-positive text-h5"
        style="text-align: right"
      >
        {{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 custom-font-color text-h6 q-mb-md">
        {{ pastReservation.userEmail }}
      </div>
      <div class="col-12 text-h5 custom-font-color">
        {{ pastReservation.number_of_personel }}
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
        Naročilo
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
        v-if="pastReservation.note !== null"
        class="col-10 q-mx-auto custom-font-color q-mt-md text-h6"
      >
        <span class="text-h5">(</span>Opomba: {{ pastReservation.note }}<span class="text-h5">)</span>
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
  </div>
</template>

<script>
export default {
  name: 'AdminPastReservationCard',

  props: ['pastReservation'],

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
    const d = new Date(this.pastReservation.date_and_time_of_reservation.split(' '))
    this.date = d.getDate() + '. ' + (d.getMonth() + 1) + '. ' + d.getFullYear()
    this.time = d.getHours() + ':' + d.getMinutes()

    this.pastReservation.pickedMenus.forEach(pickedMenu => {
      this.totalPrice += (pickedMenu.quantity * pickedMenu.price)
    })
  },

  methods: {
    deleteReservation () {
      this.$emit('deleteReservation', this.pastReservation.id_reservation)
    }
  }
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
