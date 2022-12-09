<template>
  <div>
    <div v-if="isLoggedIn === false">
      <router-link
        to="/login"
        style="text-decoration: none; color: black;"
      >
        <q-btn>
          Login
        </q-btn>
      </router-link>
      <router-link
        to="/register"
        style="text-decoration: none; color: black;"
      >
        <q-btn>
          Register
        </q-btn>

        <br><br>
      </router-link>
    </div>
    <div v-if="isLoggedIn === true">
      <router-link
        to="/logout"
        style="text-decoration: none; color: black;"
      >
        <q-btn>
          Logout
        </q-btn>
      </router-link>
      <br><br>
    </div>
    <div class="fit row wrap justify-center items-start content-start">
      <category-list :categories="categories" />
    </div>
    <div class="fit row wrap justify-center items-start content-start">
      <restaurant-list :restaurants="restaurants" />
    </div>
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue'
import CategoryList from '../components/CategoryList.vue'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'IndexPage',

  components: {
    RestaurantList,
    CategoryList
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
          is_favorited: 1
        },
        {
          id_restaurant: 1,
          name: 'Spar Restavracija',
          location: 'Beblerjev trg 9, Ljubljana 1000',
          restaurant_image: 'http://localhost:8000/images/food_images/food.jpg',
          rating: 8.5,
          is_open: false,
          is_favorited: 0
        },
        {
          id_restaurant: 2,
          name: 'Etna',
          location: 'Setnica 3, Polhov Gradec 1355',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 9.3,
          is_open: true,
          is_favorited: 0
        },
        {
          id_restaurant: 3,
          name: 'Lipca Index',
          location: 'Gabrje 60A, Dobrova 1356',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 6.5,
          is_open: true,
          is_favorited: 1
        },
        {
          id_restaurant: 4,
          name: 'Lipca Index',
          location: 'Gabrje 60A, Dobrova 1356',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 6.5,
          is_open: true,
          is_favorited: 1
        },
        {
          id_restaurant: 5,
          name: 'Lipca Index',
          location: 'Gabrje 60A, Dobrova 1356',
          restaurant_image: 'src/pages/restaurant.jpg',
          rating: 6.5,
          is_open: true,
          is_favorited: 1
        }
      ],
      categories: [
        {
          category_id: 0,
          category_name: 'Burgerji',
          category_icon: 'nekineki'
        },
        {
          category_id: 1,
          category_name: 'Solate',
          category_icon: 'nekineki'
        },
        {
          category_id: 2,
          category_name: 'Jedi iz žara',
          category_icon: 'nekineki'
        },
        {
          category_id: 3,
          category_name: 'Pica',
          category_icon: 'nekineki'
        },
        {
          category_id: 4,
          category_name: 'Pica',
          category_icon: 'nekineki'
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
