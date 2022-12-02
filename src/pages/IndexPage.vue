<template>
  <restaurant-list :restaurants="restaurants" />
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
