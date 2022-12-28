<template>
  <div>
    <p class="page-title q-mb-xl">
      Domov / Moj Profil
    </p>
    <div style="text-align: center">
      <img
        src="../pages/food.jpg"
        class="profile-picture"
      >
      <div
        class="q-mt-sm text-h5"
      >
        Jan Merhar
      </div>
    </div>
    <div class="q-mt-xl">
      <q-tabs
        v-model="tab"
        class="row no-wrap q-mx-lg"
      >
        <!-- Ko se izbere enega, se spremeni barva v zeleno -->
        <q-tab
          name="edit_profile"
          label="Uredi profil"
          no-caps
          class="col-3"
        />
        <q-tab
          name="favourited"
          label="Priljubljene"
          no-caps
          class="col-3"
        />
        <q-tab
          name="previus_reservations"
          label="Pretekle rezervacije (14)"
          no-caps
          class="col-3"
        />
        <q-tab
          name="active_reservations"
          label="Aktivne rezervacije (1)"
          no-caps
          class="col-3"
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
          name="edit_profile"
        >
          <profile-edit-profile />
        </q-tab-panel>
        <q-tab-panel
          name="favourited"
        >
          <profile-favourited
            :restaurants="restaurants"
            :num-results="numResults"
          />
        </q-tab-panel>
        <q-tab-panel
          name="previus_reservations"
        >
          <profile-past-reservations />
        </q-tab-panel>

        <q-tab-panel
          name="active_reservations"
        >
          <profile-active-reservations />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'
import ProfileEditProfile from '../components/ProfileEditProfile.vue'
import ProfileFavourited from '../components/ProfileFavourited.vue'
import ProfilePastReservations from '../components/ProfilePastReservations.vue'
import ProfileActiveReservations from '../components/ProfileActiveReservations.vue'

export default {
  name: 'ProfilePage',

  components: {
    ProfileEditProfile,
    ProfileFavourited,
    ProfilePastReservations,
    ProfileActiveReservations
  },

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      tab: 'edit_profile',
      restaurants: [],
      numResults: 0
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    this.loadRestaurants()
  },

  methods: {
    async loadRestaurants () {
      try {
        this.loading = true

        const reply = await api.get('/restaurants', {
          params: {
            currentPage: this.currentPage,
            search: '',
            pickedCategories: [],
            sortBy: 'ocena'
          }
        })

        this.restaurants = reply.data.restaurants.data
        this.numResults = reply.data.num_of_restaurants
        console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
    .page-title {
        background-color: #F2F2EF !important;
        padding: 30px 100px 30px !important;
        font-size: 22px !important;
        width: 100% !important;
    }

    .profile-picture {
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

    :deep(.q-tab__label) {
        font-size: 1.2rem;
    }
</style>
