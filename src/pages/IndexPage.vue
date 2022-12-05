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
          id: 0,
          name: 'Lipca Index'
        },
        {
          id: 1,
          name: 'Spar Restavracija'
        },
        {
          id: 2,
          name: 'Etna'
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
