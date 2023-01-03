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
        :max-pages="6"
        direction-links
        color="positive"
        class="custom-position"
        :disable="loading"
      />
    </div>
  </div>
</template>

<script>
import RestaurantOfferElement from './RestaurantOfferElement.vue'

export default {
  name: 'RestaurantOfferList',

  components: {
    RestaurantOfferElement
  },

  props: ['menus', 'numMenus', 'loading'],

  data () {
    return {
      currentPage: 1
    }
  },

  computed: {
    numPages () {
      return parseInt(Math.ceil(this.numMenus / 6))
    }
  },

  watch: {
    currentPage (newCurrentPage) {
      this.$emit('onChangePage', newCurrentPage)
    }
  }
}
</script>
