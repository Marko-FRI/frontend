<template>
  <div class="row wrap">
    <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <admin-past-reservation-card
        v-for="pastReservation in pastReservations"
        :key="pastReservation.id_reservation"
        :past-reservation="pastReservation"
        class="col-6"
      />
      <div
        v-if="pastReservations.length === 0"
        class="col-12 text-h4 text-center"
      >
        Ni nobenih preteklih rezervacij!
      </div>
    </div>
    <div
      style="text-align: center"
      class="col-12 q-my-xl"
    >
      <q-btn
        v-if="pastReservations.length > 9 && numPastReservations > pastReservations.length"
        label="Naloži več"
        color="white"
        flat
        no-caps
        style="font-size: 1.3rem"
        class="bg-positive border-rad q-px-xl q-py-none"
        :disable="loading"
        @click="loadMorePastReservations(pastReservations.length)"
      />
    </div>
  </div>
</template>

<script>
import AdminPastReservationCard from '../components/AdminPastReservationCard.vue'

export default {
  name: 'AdminPastReservations',

  components: {
    AdminPastReservationCard
  },

  props: ['pastReservations', 'numPastReservations', 'loading'],

  methods: {
    loadMorePastReservations (pastResLen) {
      this.$emit('loadMorePastReservations', pastResLen)
    }
  }

}
</script>
