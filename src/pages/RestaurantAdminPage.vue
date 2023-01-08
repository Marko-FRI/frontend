<template>
  <div>
    <img
      class="header-img"
      :src="headerImage"
      alt="default"
    >
    <div class="row no-wrap change-position-top">
      <div class="q-pl-xl col-8 custom-text">
        {{ restaurantName }}
      </div>
      <div class="col-4">
        <q-btn
          label="Odjava"
          color="white"
          flat
          no-caps
          size="1.15rem"
          class="bg-red-8 border-rad q-px-lg button-float q-mr-xl no-wrap"
          @click="confirmLogout = true"
        />
        <!-- :disable="userStore.token === null" -->
      </div>
    </div>

    <div class="q-mt-xl">
      <q-tabs
        v-model="tab"
        inline-label
        outside-arrows
        mobile-arrows
        align="justify"
      >
        <q-tab
          name="past_reservations"
          :label="'Pretekle rezervacije (' + numPastReservations + ')'"
          no-caps
        />
        <q-tab
          name="active_reservations"
          :label="'Aktivne rezervacije (' + numActiveReservations + ')'"
          no-caps
        />
      </q-tabs>
      <q-separator
        color="grey"
        inset
        class="q-mx-lg"
      />
      <q-tab-panels
        v-model="tab"
        animated
        class="q-my-xl"
      >
        <q-tab-panel
          name="past_reservations"
        >
          <admin-past-reservations
            :past-reservations="pastReservations"
            :num-past-reservations="numPastReservations"
            :loading="loading"
            @loadMorePastReservations="loadMorePastReservations"
          />
        </q-tab-panel>
        <q-tab-panel
          name="active_reservations"
        >
          <admin-active-reservations
            :active-reservations="activeReservations"
            :num-active-reservations="numActiveReservations"
            :loading="loading"
            @loadMoreActiveReservations="loadMoreActiveReservations"
            @deleteReservation="deleteReservation"
          />
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <q-dialog
      v-model="confirmLogout"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center text-h5 q-pa-xl">
          <span class="q-ml-sm">Ali ste prepričani, da se želite odjaviti?</span>
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
            @click="confirmLogout = false"
          />
          <q-btn
            v-close-popup
            flat
            label="Da"
            color="white"
            no-caps
            style="font-size: 1rem"
            class="bg-red-8 border-rad q-ma-sm"
            to="/logout"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'
import AdminActiveReservations from '../components/AdminActiveReservations.vue'
import AdminPastReservations from '../components/AdminPastReservations.vue'

export default {
  name: 'RestaurantAdminPage',

  components: {
    AdminActiveReservations,
    AdminPastReservations
  },

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      tab: 'active_reservations',
      headerImage: '',
      restaurantName: 'Gostilna pri lipci',
      numPastReservations: 0,
      pastReservations: [],
      currentPastReservationOffset: 10,
      numActiveReservations: 0,
      activeReservations: [],
      currentActiveReservationOffset: 1,
      confirmLogout: false,
      loading: false
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    this.getData()
  },

  methods: {
    async getData () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/adminRestaurantData', {
          params: {
            reservationOffset: this.currentActiveReservationOffset,
            id_restaurant: this.userStore.data.id_restaurant
          }
        })

        if (this.userStore.data.is_user !== reply.data.id_user) {
          this.$router.push('/')
        }

        this.headerImage = reply.data.restaurant_header_image
        this.restaurantName = reply.data.restaurantName
        this.activeReservations = reply.data.activeReservations
        this.numActiveReservations = reply.data.numOfActiveReservations
        this.pastReservations = reply.data.pastReservations
        this.numPastReservations = reply.data.numOfPastReservations
        // console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
        this.$router.push('/')
      }
    },

    async deleteReservation (idReservation) {
      try {
        this.loading = true

        const reply = await api.delete('/deleteAdminReservation', {
          params: {
            id_reservation: idReservation,
            id_restaurant: this.userStore.data.id_restaurant,
            reservationOffset: this.currentActiveReservationOffset
          }
        })

        this.activeReservations = reply.data.activeReservations
        this.numActiveReservations = reply.data.numOfActiveReservations
        // console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    },

    async loadMoreActiveReservations (actResLen) {
      try {
        this.loading = true

        this.currentActiveReservationOffset = actResLen + 10

        const reply = await api.get('/moreAdminActiveReservations', {
          params: {
            id_restaurant: this.userStore.data.id_restaurant,
            reservationOffset: this.currentActiveReservationOffset
          }
        })

        this.activeReservations = reply.data.activeReservations
        // console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    },

    async loadMorePastReservations (pastResLen) {
      try {
        this.loading = true

        this.currentPastReservationOffset = pastResLen + 10

        const reply = await api.get('/moreAdminPastReservations', {
          params: {
            id_restaurant: this.userStore.data.id_restaurant,
            reservationOffset: this.currentPastReservationOffset // dobim nazaj pastResLen + 10 aktivnih rezervacij
          }
        })

        this.pastReservations = reply.data.pastReservations
        // console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    }
  }
}

// ko dobim podatke, dobim se user_id iz restavracije in pogledam če se ujema s tem, ki je zdaj tukaj.
</script>

<style scoped>
    .border-rad {
        border-radius: 5px;
    }

    .header-img {
        filter: brightness(35%);
        width: 100%;
        height: auto;
        z-index: -1;
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

    :deep(.q-tab__label) {
        font-size: 1.5rem;
    }
</style>
