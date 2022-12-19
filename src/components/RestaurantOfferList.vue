<template>
  <div>
    <restaurant-offer-element
      v-for="menu in menus"
      :key="menu.id_menu"
      :menu="menu"
    />
    <div class="q-mb-xl flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="numPages"
        :max-pages="4"
        direction-links
        color="green-8"
        class="custom-position"
      />
    </div>
    <!-- :disable="loading"
      @click="onChangePage" -->
  </div>
</template>

<script>
import RestaurantOfferElement from './RestaurantOfferElement.vue'

export default {
  name: 'RestaurantOfferList',

  components: {
    RestaurantOfferElement
  },

  props: ['menus'],

  data () {
    return {
      currentPage: 1,
      numPages: 10
    }
  }
}
</script>
