<template>
  <div class="row wrap">
    <div
      style="text-align: center"
      class="text-h4 q-mb-xl col-12"
    >
      Aktivne Rezervacije
    </div>
    <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <active-reservation-card
        v-for="activeReservation in activeReservations"
        :key="activeReservation.id_reservation"
        :active-reservation="activeReservation"
        class="col-6"
        @deleteReservation="deleteReservation"
      />
    </div>
    <div
      style="text-align: center"
      class="col-12 q-my-xl"
    >
      <q-btn
        v-if="activeReservations.length > 3 && numActiveReservations > activeReservations.length"
        label="Naloži več"
        color="white"
        flat
        no-caps
        style="font-size: 1.3rem"
        class="bg-positive border-rad q-px-xl q-py-none"
        :disable="loading"
        @click="loadMoreActiveReservations(activeReservations.length)"
      />
    </div>
  </div>
</template>

<script>
import ActiveReservationCard from '../components/ActiveReservationCard.vue'

export default {
  name: 'ProfileActiveReservations',

  components: {
    ActiveReservationCard
  },

  props: ['activeReservations', 'numActiveReservations', 'loading'],

  methods: {
    deleteReservation (idReservation) {
      this.$emit('deleteReservation', idReservation)
    },

    loadMoreActiveReservations (actResLen) {
      this.$emit('loadMoreActiveReservations', actResLen)
    }
  }

}
</script>
