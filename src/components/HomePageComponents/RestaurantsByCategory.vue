<template>
  <div class="module q-mx-auto">
    <div class="row restaurant_list-titleGroup">
      <div class="restaurant_list-title col-6">
        {{ restaurants.name }}
      </div>
      <div
        class="col-6"
        style="text-align:right"
      >
        <q-btn
          v-if="showButton"
          label="Pokaži vse restavracije"
          color="white"
          flat
          no-caps
          class="bg-positive q-mx-auto"
          to="/restaurants"
        />
      </div>
    </div>
    <restaurant-list
      :restaurants="restaurants.restaurants"
    />
  </div>
</template>

<script>
import RestaurantList from '../RestaurantList.vue'

export default {
  name: 'RestaurantsByCategory',

  components: {
    RestaurantList
  },

  props: ['restaurants', 'showButton']

}
</script>
<style scoped>
.module {
    margin-bottom: 120px;
  }
  @media (min-width:576px)  {
    .restaurant_list-titleGroup{
      margin: 60px 0 !important;
    }
    .module {
      width: 90%;
    }
  }
  @media (min-width:1025px) {
    .module {
      width: 70%;
    }
  }
  .restaurant_list-titleGroup{

    margin: 0 20% 60px 20%;
    border-bottom:2px solid #759242;
  }
  .restaurant_list-title {
    font-size: 26px;
  }
</style>
