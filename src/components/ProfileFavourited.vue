<template>
  <div>
    <div
      style="text-align: center"
      class="text-h4 q-mb-lg"
    >
      Priljubljene
    </div>
    <div class="row wrap">
      <div class="offset-2 col-8 q-pl-md q-mb-md text-h6">
        Priljubljene restavracije
        <q-icon
          name="favorite"
          color="green-7"
          size="md"
          class="q-ml-sm"
        />
      </div>
      <div class="offset-2 col-8">
        <restaurant-list :restaurants="restaurants" />
      </div>
      <div
        class="offset-2 col-8 q-mb-xl flex flex-center"
      >
        <q-pagination
          v-model="currentPage"
          :max="numPages"
          :max-pages="6"
          direction-links
          color="green-8"
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
