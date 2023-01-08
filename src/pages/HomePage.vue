<template>
  <div class="outer">
    <div>
      <div class="image1">
        <img
          src="../pages/food.png"
          alt="food"
        >

        <div class="headline1">
          BOOK MY RESTAURANT
        </div>
        <div class="scrolling-down">
          Scroll down v
        </div>
      </div>
    </div>
    <div>
      <main-title title="Izpostavljene rastavracije" />
      <popular-restaurant-list :popular-restaurants="popularRestaurants" />
      <main-title title="Priljubljene kategorije" />
      <category-list :categories="categories" />
      <main-title title="Restavracije" />

      <restaurants-by-category
        v-for="(restaurantList,index) in restaurantsbycategory"
        :key="index"
        :restaurants="restaurantList"
        :show-button="index==0"
      />
      <main-title title="Mnenja strank" />
      <quotation-list
        :quotations="quotations"
        @loadMoreReviews="loadMoreReviews"
      />
    </div>
  </div>
</template>

<script>
import MainTitle from 'src/components/HomePageComponents/MainTitle.vue'
import CategoryList from 'src/components/HomePageComponents/CategoryList.vue'
import PopularRestaurantList from '../components/HomePageComponents/PopularRestaurantList.vue'
import QuotationList from '../components/HomePageComponents/QuotationList.vue'

import { api } from 'src/boot/axios'
import RestaurantsByCategory from '../components/HomePageComponents/RestaurantsByCategory.vue'
export default {
  components: {
    MainTitle,
    CategoryList,
    PopularRestaurantList,
    QuotationList,
    RestaurantsByCategory
  },
  data () {
    return {
      popularRestaurants: [
        {
          id_restaurant: 0,
          name: 'Nalaganje...',
          description: 'Jejte v najboljših restavracijah'
        }
      ],
      restaurants: [
        {
          id_restaurant: 0,
          name: 'Nalaganje...',
          image: '../pages/food.png',
          address: 'Nalaganje...',
          is_open: true,
          avg_rating: null
        },
        {
          id_restaurant: 0,
          name: 'Nalaganje...',
          image: '../pages/food.png',
          address: 'Nalaganje...',
          is_open: true,
          avg_rating: null
        },
        {
          id_restaurant: 0,
          name: 'Nalaganje...',
          image: '../pages/food.png',
          address: 'Nalaganje...',
          is_open: true,
          avg_rating: null
        }
      ],
      restaurantsbycategory: [
        {
          id_category: 0,
          name: 'Nalaganje...',
          image_path: '',
          restaurants: {
            0: {
              id_restaurant: 21,
              name: 'Nalaganje...',
              address: 'Nalaganje...',
              laravel_through_key: 5,
              image: 'http://localhost:8000/images/restaurant_images/restaurant.jpg',
              is_open: false,
              avg_rating: null
            },
            1: {
              id_restaurant: 21,
              name: 'Nalaganje...',
              address: 'Nalaganje...',
              laravel_through_key: 5,
              image: 'http://localhost:8000/images/restaurant_images/restaurant.jpg',
              is_open: false,
              avg_rating: null
            },
            2: {
              id_restaurant: 21,
              name: 'Nalaganje...',
              address: 'Nalaganje',
              laravel_through_key: 5,
              image: 'http://localhost:8000/images/restaurant_images/restaurant.jpg',
              is_open: false,
              avg_rating: null
            }
          }
        }
      ],
      quotations: [
        {
          user_name: 'Nalaganje...',
          user_image_path: '../pages/food.png',
          comment: 'Nalaganje...',
          restaurant_id: 1,
          restaurant_image_path: '../pages/food.png',
          restaurant_name: 'Nalaganje...',
          rating: null
        }
      ],
      categories: [
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        },
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        },
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        },
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        },
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        },
        {
          category_id: 0,
          name: 'Nalaganje...',
          image_path: '../pages/category.png'
        }
      ]
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      try {
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/homePage', {
          params: {
            reviewOffset: 6,
            restaurantOffset: 3,
            categoryRestaurantOffset: 3
          }
        })
        this.quotations = reply.data.reviews
        this.popularRestaurants = reply.data.restaurants
        this.categories = reply.data.categories
        this.restaurantsbycategory = reply.data.categories
        // this.errorMessage = ''
        // this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.response.data.message
        this.password = ''
        // console.log(error)
      }
    },
    async loadMoreReviews (reviewsLen) {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/homePageMoreReviews', {
          params: {
            reviewOffset: reviewsLen + 3
          }
        })
        this.quotations = reply.data.reviews
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    }

  }

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

  textarea {
    resize: none;
    font-size: 1.1rem;
    border-radius: 3px;
  }

  textarea:focus {
    outline: none !important;
    border:2px solid #3f8dd9;
  }

  .outer {
    position:relative;
    font-size: 18px;
    /* display: inline-block; */
}

.image1 {
    position:relative;
    text-align: center;
}

.image1 img {
    width: 100%;
    -webkit-filter: brightness(40%);
}

.headline1 {
  position: absolute;
  top: 45%;
  width: 100%;
  color: white;
  font-size: 7vw;
}
.scrolling-down {
  position: absolute;
  top: 90%;
  width: 100%;
  color: white;
  font-size: 18px;;
}

.image2-inside-header {
    font-size: 40px;
    margin-top: 30px;
    display: inline-block;
}

h3 {
  orphans: 3;
  widows: 3;
}
h2,
h3 {
  page-break-after: avoid;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
</style>
