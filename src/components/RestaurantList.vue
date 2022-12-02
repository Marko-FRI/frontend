<template>
  <div>
    <restaurant-element
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
</template>

<script>
import RestaurantElement from './RestaurantElement.vue'

export default {
  name: 'RestaurantList',

  components: {
    RestaurantElement
  },

  props: ['restaurants']
}
</script>
