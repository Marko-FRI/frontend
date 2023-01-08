<template>
  <div>
    <p class="page-title q-mb-xl">
      Domov / Moj Profil
    </p>
    <div style="text-align: center">
      <img
        :src="userStore.data.profile_image_path"
        class="profile-picture"
      >
      <div
        class="q-mt-sm text-h5"
      >
        {{ userStore.data.name }} {{ userStore.data.surname }}
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
        <!-- Ko se izbere enega, se spremeni barva v zeleno -->
        <q-tab
          name="edit_profile"
          label="Uredi profil"
          no-caps
        />
        <q-tab
          name="favourited"
          :label="'Priljubljene (' + numResults + ')'"
          no-caps
        />
        <q-tab
          name="previus_reservations"
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
          name="edit_profile"
        >
          <profile-edit-profile
            :edit-profile-error-message="editProfileErrorMessage"
            :loading-parent="loading"
            @changeProfileData="changeProfileData"
          />
        </q-tab-panel>
        <q-tab-panel
          name="favourited"
        >
          <profile-favourited
            :restaurants="restaurants"
            :num-results="numResults"
            :loading="loading"
            @loadRestaurants="loadRestaurants"
          />
        </q-tab-panel>
        <q-tab-panel
          name="previus_reservations"
        >
          <profile-past-reservations
            :past-reservations="pastReservations"
            :num-past-reservations="numPastReservations"
            :loading="loading"
            @loadMorePastReservations="loadMorePastReservations"
          />
        </q-tab-panel>

        <q-tab-panel
          name="active_reservations"
        >
          <profile-active-reservations
            :active-reservations="activeReservations"
            :num-active-reservations="numActiveReservations"
            :loading="loading"
            @deleteReservation="deleteReservation"
            @loadMoreActiveReservations="loadMoreActiveReservations"
          />
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
      numPastReservations: 0,
      pastReservations: [
        {
          id_reservation: 0,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          price: 23.20,
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 1,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 2,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 3,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        }
      ],
      currentPastReservationOffset: 4,
      numActiveReservations: 0,
      activeReservations: [
        {
          id_reservation: 0,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          price: 23.20,
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 1,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 2,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 3,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        }
      ],
      currentActiveReservationOffset: 4,
      numResults: 0,
      currentPage: 1,
      loading: false,
      editProfileErrorMessage: ''
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    // this.loadRestaurants()
    this.loadProfile()
  },

  methods: {
    async loadProfile () {
      try {
        this.loading = true

        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/profile', {
          params: {
            page: this.currentPage,
            reservationOffset: 4
          }
        })

        this.restaurants = reply.data.restaurants.data
        this.numResults = reply.data.num_of_restaurants
        this.pastReservations = reply.data.pastReservations
        this.activeReservations = reply.data.activeReservations
        this.numPastReservations = reply.data.numOfPastReservations
        this.numActiveReservations = reply.data.numOfActiveReservations

        // console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    },

    async loadRestaurants (newPage) {
      this.currentPage = newPage
      this.loadProfile()
    },

    async changeProfileData (newProfileData) {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        let reply = await api.put('/editProfile', {
          current_password: newProfileData.currentPassword,
          name: newProfileData.name,
          surname: newProfileData.surname,
          password: newProfileData.password,
          image: newProfileData.image
        })

        this.userStore.data = reply.data.userData
        this.editProfileErrorMessage = ''
        // console.log(reply)
        // console.log(newProfileData)

        if (newProfileData.image !== null) {
          const formData = new FormData()
          formData.append('file', newProfileData.image)

          reply = await api.post('/editProfileImage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          this.userStore.data.profile_image_path = reply.data.imageName
        }

        this.loading = false
      } catch (error) {
        this.editProfileErrorMessage = error.response.data.message
        // console.log(error)
        this.loading = false
      }
    },

    async deleteReservation (idReservation) {
      try {
        this.loading = true

        const reply = await api.delete('/deleteReservation', {
          params: {
            id_reservation: idReservation,
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

        this.currentActiveReservationOffset = actResLen + 4

        const reply = await api.get('/moreActiveReservations', {
          params: {
            reservationOffset: this.currentActiveReservationOffset // dobim nazaj actResLen + 4 aktivnih rezervacij
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

        this.currentPastReservationOffset = pastResLen + 4

        const reply = await api.post('/morePastReservations', {
          params: {
            reservationOffset: this.currentPastReservationOffset // dobim nazaj pastResLen + 4 aktivnih rezervacij
          }
        })

        this.pastReservations = reply.data.PastReservations
        // console.log(reply)
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
