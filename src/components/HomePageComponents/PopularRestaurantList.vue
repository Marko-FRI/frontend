<template>
  <div class="q-pa-md popular_restaurant">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        padding
        arrows
        height="350px"
        class="bg-grey-2 text-white rounded-borders"
      >
        <q-carousel-slide
          v-if="popularRestaurants[0]"
          name="style"
          class="no-wrap flex-center popular_restaurant-slide row"
          :style="'background-image: url(' + popularRestaurants[0].restaurant_image_path + ')'"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              {{ popularRestaurants[0].name }}
            </div>
            <div class="popular_restaurant-content-text">
              {{ popularRestaurants[0].description }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-positive"
              :to="'/restaurant/' + popularRestaurants[0].id_restaurant"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          v-if="popularRestaurants[1]"
          name="drugi_slide"
          class="no-wrap flex-center popular_restaurant-slide row"
          :style="'background-image: url(' + popularRestaurants[1].restaurant_image_path + ')'"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              {{ popularRestaurants[1].name }}
            </div>
            <div class="popular_restaurant-content-text">
              {{ popularRestaurants[1].description }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-positive"
              :to="'/restaurant/' + popularRestaurants[0].id_restaurant"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          v-if="popularRestaurants[2]"
          name="trert_slide"
          class="no-wrap flex-center popular_restaurant-slide row"
          :style="'background-image: url(' + popularRestaurants[2].restaurant_image_path + ')'"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              {{ popularRestaurants[2].name }}
            </div>
            <div class="popular_restaurant-content-text">
              {{ popularRestaurants[2].description }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-positive"
              :to="'/restaurant/' + popularRestaurants[0].id_restaurant"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['popularRestaurants'],
  setup () {
    return {
      slide: ref('style')
    }
  }
}
</script>

<style scoped>
.popular_restaurant {
    margin: 0 15%;
}
.popular_restaurant-slide{
    background-image: url('../HomePageComponents/cheff.png');
}
.popular_restaurant-content {
    background: rgba(0, 0, 0, 0.58);
    padding: 2%;
    overflow:inherit;
    max-height: 250px;
    overflow: auto;
}
.popular_restaurant-content-text{
    margin-bottom: 30px;
    font-size: 14px;
}
.popular_restaurant-content-title{
    font-size: 32px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>
