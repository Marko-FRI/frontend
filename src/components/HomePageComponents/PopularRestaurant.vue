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
          name="style"
          class="no-wrap flex-center popular_restaurant-slide row"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              Gostilna pod lipco
            </div>
            <div class="popular_restaurant-content-text">
              {{ lorem }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="drugi_slide"
          class="no-wrap flex-center popular_restaurant-slide row"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              Gostilna pod lipco2
            </div>
            <div class="popular_restaurant-content-text">
              {{ lorem }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="trert_slide"
          class="no-wrap flex-center popular_restaurant-slide row"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              Gostilna pod lipco2
            </div>
            <div class="popular_restaurant-content-text">
              {{ lorem }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="cesa_slide"
          class="no-wrap flex-center popular_restaurant-slide row"
        >
          <div class="text-center col-sm-0 col-0 col-md-6" />
          <div class="popular_restaurant-content text-center col-sm-12 col-12 col-md-6">
            <div class="popular_restaurant-content-title">
              Gostilna pod lipco2
            </div>
            <div class="popular_restaurant-content-text">
              {{ lorem }}
            </div>
            <q-btn
              label="OBIŠČI"
              color="white"
              flat
              no-caps
              class="bg-green-8"
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
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style scoped>
.popular_restaurant {
    margin: 0 15%;
}
.popular_restaurant-slide{
    background-image: url('../HomePageComponents/cheff.png') !important;
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
