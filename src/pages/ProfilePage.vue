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
          label="Priljubljene"
          no-caps
        />
        <q-tab
          name="previus_reservations"
          label="Pretekle rezervacije (14)"
          no-caps
        />
        <q-tab
          name="active_reservations"
          label="Aktivne rezervacije (1)"
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
          <profile-past-reservations :past-reservations="pastReservations" />
        </q-tab-panel>

        <q-tab-panel
          name="active_reservations"
        >
          <profile-active-reservations :active-reservations="activeReservations" />
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
      numResults: 0
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    this.loadRestaurants()
    console.log('UserData:')
    console.log(this.userStore.data)
  },

  methods: {
    async loadProfile () {
      try {
        this.loading = true

        // const reply = await api.get('/favoriteRestaurants', {
        const reply = await api.post('/profile')

        /*
          Potrebujem:
            restaurants (tako kot prej, le da je treba preveriti za isFavorited)
            num_of_restaurants (za pravilen pagination restavracij)
            pastReservations: [ (to je tabela takih objektov) (treba gledati da niso več aktivne)
              {
                id_reservation: 0,
                image: 'pot_do_slike',
                name: '',
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
                  }
                ]
              }
            ]
            activeReservations (dejansko čisto iste kot pastReservations, le da je treba gledati, da so trenutno aktivne)
        */

        this.restaurants = reply.data.restaurants.data
        this.numResults = reply.data.num_of_restaurants
        this.pastReservations = reply.data.past_reservations
        this.activeReservations = reply.data.active_reservations

        console.log(reply)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    },

    async loadRestaurants () {
      try {
        this.loading = true

        // const reply = await api.get('/favoriteRestaurants', {
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
