<template>
  <div class="col-12 row wrap justify-center">
    <div
      class="text-h5 col-12 q-pb-lg"
      style="text-align:center"
    >
      Povprečna ocena
    </div>
    <div
      class="col-12 row justify-center items-center"
    >
      <q-icon
        :name="firstStar"
        :size="$q.screen.width > 599 ? '4rem' : '3rem'"
        color="positive"
        class="avg-rating-stars-top"
      />
      <q-icon
        :name="secondStar"
        :size="$q.screen.width > 599 ? '4rem' : '3rem'"
        color="positive"
        class="avg-rating-stars-top"
      />
      <q-icon
        :name="thirdStar"
        :size="$q.screen.width > 599 ? '4rem' : '3rem'"
        color="positive"
        class="avg-rating-stars-top"
      />
      <q-icon
        :name="fourthStar"
        :size="$q.screen.width > 599 ? '4rem' : '3rem'"
        color="positive"
        class="avg-rating-stars-top"
      />
      <q-icon
        :name="fifthStar"
        :size="$q.screen.width > 599 ? '4rem' : '3rem'"
        color="positive"
        class="q-pr-lg avg-rating-stars-top"
      />

      <span class="avg-rating-text text-positive">{{ (Math.round(avgRating * 100) / 100) }}/5</span>
    </div>
    <div
      class="col-8 num-ratings-text text-positive q-pl-sm q-pt-sm text-center"
    >
      Število mnenj: {{ numRatings }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantRating',

  props: ['avgRating', 'numRatings'],

  computed: {
    firstStar () {
      if (this.avgRating <= 0.25) { return 'star_border' } else if (this.avgRating <= 0.75) { return 'star_half' } else { return 'star' }
    },

    secondStar () {
      if (this.avgRating <= 1.25) { return 'star_border' } else if (this.avgRating <= 1.75) { return 'star_half' } else { return 'star' }
    },

    thirdStar () {
      if (this.avgRating <= 2.25) { return 'star_border' } else if (this.avgRating <= 2.75) { return 'star_half' } else { return 'star' }
    },

    fourthStar () {
      if (this.avgRating <= 3.25) { return 'star_border' } else if (this.avgRating <= 3.75) { return 'star_half' } else { return 'star' }
    },

    fifthStar () {
      if (this.avgRating <= 4.25) { return 'star_border' } else if (this.avgRating <= 4.75) { return 'star_half' } else { return 'star' }
    }
  }

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
