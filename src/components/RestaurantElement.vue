<template>
  <div class="col-12 col-md-4 col-sm-6 q-mb-lg q-pa-md">
    <div
      class="col-12 whole_card mx-auto-mobile q-mx-auto"
    >
      <router-link
        :to="'restaurant/' + restaurant.id_restaurant"
        style="text-decoration: none;"
        class="col-12q"
      >
        <div class="upper_card">
          <div
            :style="imageBg"
            class="restaurant_image"
          />
          <div class="restaurant_name">
            {{ restaurant.name }}
          </div>
        </div>
        <div class="lower_card row no-wrap">
          <div class="left col-9 row wrap justify-start items-start content-between">
            <div class="location_text col-12">
              {{ restaurant.address }} <q-icon name="place" />
            </div>
            <div class="isOpen_text col-12">
              Trenutno: <span v-if="restaurant.is_open === true">odprto</span> <span
                v-if="restaurant.is_open === false"
                style="color: rgb(122,122,122)"
              >zaprto</span>
            </div>
          </div>

          <div class="right col-2">
            <div
              class="rating_text"
              :style="(restaurant.avg_rating === null) ? 'text-decoration: none' : 'text-decoration: underline'"
            >
              {{ (restaurant.avg_rating === null) ? '/' : Math.round(restaurant.avg_rating * 10) / 10 }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantElement',

  props: ['restaurant'],

  data () {
    return {
      imageBg: 'background-color: grey'
    }
  },

  mounted () {
    if (this.restaurant.image !== null) {
      this.imageBg = 'background-image: url(' + this.restaurant.image + ')'
      // this.imageBg = 'background-color: grey'
    }
  }
}
</script>

<style scoped>
  .whole_card {
    height: 299px;
    border-radius: 4px;
    max-width: 350px !important;
  }

  .upper_card {
    width: 100%;
    height: 76%;
    overflow: hidden;
  }

  .restaurant_image {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    /* z-index: -1; */
    position: relative;
    border-radius: 4px 4px 0px 0px;
    box-shadow: inset 0px -50px 23px -13px rgba(0,0,0,0.61);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform .3s ease;
    /* background-image: url("image_path");  // it's in <div style="..."> tag*/
  }

  .whole_card:hover .restaurant_image,
  .whole_card:focus .restaurant_image {
    transform: scale(1.2);
  }

  .upper_card .restaurant_name {
    color: white;
    font-size: 15px;
    line-height: 18px;
    position: relative;
    top: -12%;
    left: 3%;
  }

  .lower_card {
    border: 1px solid #759242;
    border-top: 0px;
    border-radius: 0px 0px 4px 4px;
    width: 100%;
    height: 23%;
    text-decoration: none;
  }

  .lower_card .left {
      padding-top: 11px;
      padding-left: 7px;
      padding-bottom: 7px;
  }

  .lower_card .right {
    height: 42px;
    margin: 12px;
    margin-top: 9px;
    background-color: #d9d9d9;
    border-radius: 4px;
    float: right;
    padding: 11px;
    text-align: center;
  }

  .lower_card .left .location_text {
    color: #212517;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }

  .lower_card .left .isOpen_text {
    color: #759242;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }

  .lower_card .right .rating_text {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-decoration-line: underline;
    color: #212517;
  }

  @media (min-width: 576px) {
    .mx-auto-mobile {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
</style>
