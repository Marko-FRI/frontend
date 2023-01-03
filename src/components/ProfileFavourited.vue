<template>
  <div>
    <div
      style="text-align: center"
      class="text-h4 q-mb-lg"
    >
      Priljubljene
    </div>
    <div class="row wrap justify-center">
      <div class="col-12 q-mb-md text-h6 text-center">
        Priljubljene restavracije
        <q-icon
          name="favorite"
          color="positive"
          size="md"
        />
      </div>
      <div class="col-12">
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

  props: ['restaurants', 'numResults'],

  computed: {
    numPages () {
      return parseInt(Math.ceil(this.numResults / 9))
    }
  },

  methods: {
    onChangePage () {
      console.log('Current Page: ' + this.currentPage)
    }
  }

}
</script>
