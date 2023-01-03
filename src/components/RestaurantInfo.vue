<template>
  <div class="q-py-xl">
    <div
      style="text-align: center"
      class="text-h3"
    >
      {{ restaurantData.name }}
    </div>
    <div class="q-py-md info-text">
      {{ restaurantData.description }}
    </div>
    <div
      class="q-py-xl"
    >
      <q-carousel
        v-if="restaurantData.images.length === undefined || restaurantData.images.length > 0"
        v-model="slide"
        swipeable
        animated
        arrows
        infinite
        control-type="regular"
        control-color="positive"
        control-text-color="white"
        style="max-width: 700px;"
        class="q-mx-auto"
      >
        <q-carousel-slide
          v-for="(image, index) in restaurantData.images"
          :key="index"
          :name="index + 1"
          :img-src="image"
        />
        <!-- <q-carousel-slide
          :name="0"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        /> -->
      </q-carousel>
    </div>
    <!-- {{ restaurantData.images }} -->
    <div
      class="social-networks q-py-xl q-my-md text-center q-mx-auto"
      style="max-width: 700px;"
    >
      <div
        class="text-h4 q-mb-md"
      >
        Socialna omrežja
      </div>
      <div>
        <a
          :href="restaurantData.facebook_link"
          target="_blank"
        >
          <q-icon
            name="facebook"
            color="positive"
            size="md"
            class="q-pr-sm"
          />
        </a>
        <a
          :href="restaurantData.instagram_link"
          target="_blank"
        >
          <q-icon
            name="facebook"
            color="positive"
            size="md"
            class="q-pr-sm"
          />
        </a>
        <a
          :href="restaurantData.twitter_link"
          target="_blank"
        >
          <q-icon
            name="facebook"
            color="positive"
            size="md"
            class="q-pr-sm"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantInfo',

  props: ['restaurantData'],

  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style scoped>
    .info-text {
        font-size: 1.2rem;
    }

    .social-networks {
        background-color: #F2F2EF;
        box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    }

    a {
      text-decoration: none;
    }
</style>
