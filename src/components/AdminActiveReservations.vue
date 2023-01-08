<template>
  <div class="row wrap">
    <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <admin-active-reservation-card
        v-for="activeReservation in activeReservations"
        :key="activeReservation.id_reservation"
        :active-reservation="activeReservation"
        class="col-6"
        @deleteReservation="deleteReservation"
      />
      <div
        v-if="activeReservations.length === 0"
        class="text-h4 col-12 text-center"
      >
        Ni nobenih aktivnih rezervacij!
      </div>
    </div>
    <div
      style="text-align: center"
      class="col-12 q-my-xl"
    >
      <q-btn
        v-if="activeReservations.length > 0 && numActiveReservations > activeReservations.length"
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
import AdminActiveReservationCard from '../components/AdminActiveReservationCard.vue'

export default {
  name: 'AdminActiveReservations',

  components: {
    AdminActiveReservationCard
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
