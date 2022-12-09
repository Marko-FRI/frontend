<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<!-- Manjka ikona za favorite in ikona za lokacijo -->
<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<template>
  <div class="col-12 col-md-4 col-sm-6 q-mb-lg ">
    <router-link :to="'restaurant/'+id">
      <div class="whole_card">
        <div class="upper_card">
          <div
            :style="{'background-image': 'url('+restaurant_image+')'}"
            class="restaurant_image"
          />
          <div class="restaurant_name">
            {{ name }}
          </div>
        </div>
        <!-- <span v-if="is_favorited === true"> *</span> -->
        <div class="lower_card">
          <div class="left">
            <div class="location_text">
              {{ location }}
            </div>
            <div class="isOpen_text">
              Trenutno: <span v-if="is_open === true">odprto</span> <span
                v-if="is_open === false"
                style="color: rgb(122,122,122)"
              >zaprto</span>
            </div>
          </div>

          <div class="right">
            <div class="rating_text">
              {{ rating }}
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RestaurantElement',

  props: ['restaurant'],

  data () {
    return {
      id: this.restaurant.id_restaurant,
      name: this.restaurant.name,
      location: this.restaurant.location,
      restaurant_image: this.restaurant.restaurant_image,
      rating: this.restaurant.rating,
      is_open: this.restaurant.is_open,
      is_favorited: this.restaurant.is_favorited // not finished
    }
  }
}
</script>

<style scoped>
  .whole_card {
    width: 307px;
    height: 269px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
  }

  .upper_card {
    width: 100%;
    height: 76%;
  }

  .upper_card .restaurant_image {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: -1;
    position: relative;
    border-radius: 4px 4px 0px 0px;
    box-shadow: inset 0px -50px 23px -13px rgba(0,0,0,0.61);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url("image_path");  // it's in <div style="..."> tag*/
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
  }

  .lower_card .left {
      width: 78%;
      float: left;
      padding-top: 11px;
      padding-left: 7px;
      padding-bottom: 7px;
  }

  .lower_card .right {
    width: 42px;
    height: 42px;
    margin: 12px;
    margin-top: 9px;
    background-color: #d9d9d9;
    border-radius: 4px;
    float: right;
    padding: 11px;
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
    margin-top: 11px;
  }

  .lower_card .right .rating_text {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-decoration-line: underline;
    color: #212517;
  }
</style>
