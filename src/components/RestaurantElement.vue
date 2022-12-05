<template>
  <div>
    Ime: {{ name }}
    <span v-if="is_favorited === true"> *</span>
    <br>
    Lokacija: {{ location }}
    <br>
    <img
      :src="restaurant_image"
      width="300"
      height="157"
    >
    <br>
    Ocena: {{ rating }}
    <br>
    <p v-if="is_open === true">
      Odprto
    </p>
    <p v-if="is_open === false">
      Zaprto
    </p>
    <br><br><br>
  </div>
</template>

<script>
export default {
  name: 'RestaurantElement',

  props: ['restaurant'],

  data () {
    return {
      name: this.restaurant.name,
      location: this.restaurant.location,
      restaurant_image: this.restaurant.restaurant_image,
      rating: this.restaurant.rating,
      is_open: this.restaurant.is_open,
      is_favorited: this.restaurant.is_favorited
    }
  }
}
</script>
