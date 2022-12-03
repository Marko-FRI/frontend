<template>
  <div>
    <div>
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
    <restaurant-list :restaurants="restaurants" />
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue'

export default {
  name: 'IndexPage',

  components: {
    RestaurantList
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
      ]
    }
  }
}
</script>
