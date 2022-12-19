<template>
  <div class="col-12 row wrap">
    <div
      class="text-h5 col-12 q-pb-lg"
      style="text-align:center"
    >
      Povprečna ocena
    </div>
    <div
      class="offset-4 col-8"
    >
      <q-icon
        name="star"
        size="4rem"
        color="green-7"
        class="avg-rating-stars-top"
      />
      <q-icon
        name="star"
        size="4rem"
        color="green-7"
        class="avg-rating-stars-top"
      />
      <q-icon
        name="star"
        size="4rem"
        color="green-7"
        class="avg-rating-stars-top"
      />
      <q-icon
        name="star_half"
        size="4rem"
        color="green-7"
        class="avg-rating-stars-top"
      />
      <q-icon
        name="star_border"
        size="4rem"
        color="green-7"
        class="q-pr-lg avg-rating-stars-top"
      />

      <span class="avg-rating-text text-green-7">3.4/5</span>
    </div>
    <div
      class="offset-4 col-8 num-ratings-text text-green-7 q-pl-sm q-pt-sm"
    >
      Število mnenj: 63
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantRating'
}
</script>

<style scoped>
    .avg-rating-text {
    text-decoration: underline;
    font-size: 2rem;
  }

  .avg-rating-stars-top {
    margin-top: -0.9rem;
  }

  .num-ratings-text {
    text-decoration: underline;
    font-size: 1.2rem;
  }
</style>
