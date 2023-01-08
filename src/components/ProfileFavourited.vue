<template>
  <div>
    <div
      style="text-align: center"
      class="text-h4 q-mb-xl"
    >
      Priljubljene restavracije
    </div>
    <div class="row wrap justify-center">
      <div class="col-12 col-md-11 col-lg-8">
        <restaurant-list :restaurants="restaurants" />
      </div>
      <div
        class="col-8 q-mb-xl flex flex-center"
      >
        <q-pagination
          v-model="currentPage"
          :max="numPages"
          :max-pages="6"
          direction-links
          color="positive"
          :disable="loading"
          @click="onChangePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue'

export default {
  name: 'ProfileFavourited',

  components: {
    RestaurantList
  },

  props: ['restaurants', 'numResults', 'loading'],

  data () {
    return {
      currentPage: 1
    }
  },

  computed: {
    numPages () {
      return parseInt(Math.ceil(this.numResults / 9))
    }
  },

  methods: {
    onChangePage () {
      this.$emit('loadRestaurants', this.currentPage)
    }
  }

}
</script>
