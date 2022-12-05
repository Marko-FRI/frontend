<template>
  <div>
    <div v-if="isLoggedIn === false">
      <router-link to="/login">
        <q-btn>
          Login
        </q-btn>
      </router-link>
      <router-link to="/register">
        <q-btn>
          Register
        </q-btn>

        <br><br>
      </router-link>
    </div>
    <div v-if="isLoggedIn === true">
      <router-link to="/logout">
        <q-btn>
          Logout
        </q-btn>
      </router-link>
      <br><br>
    </div>
    <restaurant-list :restaurants="restaurants" />
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'IndexPage',

  components: {
    RestaurantList
  },

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      restaurants: [
        {
          id_restaurant: 0,
          name: 'Lipca Index',
          location: 'Gabrje 60A, Dobrova 1356',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 6.5,
          is_open: true,
          is_favorited: true
        },
        {
          id: 1,
          name: 'Spar Restavracija',
          location: 'Beblerjev trg 9, Ljubljana 1000',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 8.5,
          is_open: false,
          is_favorited: false
        },
        {
          id: 2,
          name: 'Etna',
          location: 'Setnica 3, Polhov Gradec 1355',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 9.3,
          is_open: true,
          is_favorited: false
        }
      ],
      isLoggedIn: false
    }
  },

  mounted () {
    this.isLoggedIn = this.userStore.token !== null
    console.log(this.isLoggedIn)
  }
}
</script>
