<template>
  <div class="col-12">
    <div class="row wrap justify-start items-start content-start">
      <restaurant-element
        v-for="restaurant in restaurants"
        :key="restaurant.id_restaurant"
        :restaurant="restaurant"
      />
    </div>
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
