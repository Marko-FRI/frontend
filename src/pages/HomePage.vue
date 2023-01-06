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
      </div>
    </div>
    <div>
      <main-title title="Izpostavljene rastavracije" />
      <popular-restaurant />
      <main-title title="Priljubljene kategorije" />
      <category-list />
      <main-title title="Restavracije" />
      <div class="module q-mx-auto">
        <div class="row restaurant_list-titleGroup">
          <div class="restaurant_list-title col-6">
            Burgerji
          </div>
          <div
            class="col-6"
            style="text-align:right"
          >
            <q-btn
              label="Več"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </div>
        <restaurant-list
          :restaurants="restaurants"
        />
      </div>
      <div class="module q-mx-auto">
        <div class="row restaurant_list-titleGroup">
          <div class="restaurant_list-title col-6">
            Burgerji
          </div>
          <div
            class="col-6"
            style="text-align:right"
          >
            <q-btn
              label="Več"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </div>
        <restaurant-list
          :restaurants="restaurants"
        />
      </div>
      <div class="module q-mx-auto">
        <div class="row restaurant_list-titleGroup">
          <div class="restaurant_list-title col-6">
            Burgerji
          </div>
          <div
            class="col-6"
            style="text-align:right"
          >
            <q-btn
              label="Več"
              color="white"
              flat
              no-caps
              class="bg-green-8"
            />
          </div>
        </div>
        <restaurant-list
          :restaurants="restaurants"
        />
      </div>
      <div class="module q-mx-auto">
        <div class="row restaurant_list-titleGroup">
          <div class="restaurant_list-title col-6">
            Burgerji
          </div>
          <div
            class="col-6"
            style="text-align:right"
          >
            <q-btn
              label="Več"
              color="white"
              flat
              no-caps
              class="bg-positive"
            />
          </div>
        </div>
        <quotations
          :quotations="quotations"
        />
        <restaurant-list
          :restaurants="restaurants"
        />
      </div>
      <main-title title="Mnenja strank" />
      <quotation-list :quotations="quotations" />
    </div>
  </div>
</template>

<script>
import MainTitle from 'src/components/HomePageComponents/MainTitle.vue'
import CategoryList from 'src/components/HomePageComponents/CategoryList.vue'
import PopularRestaurant from '../components/HomePageComponents/PopularRestaurant.vue'
import RestaurantList from '../components/RestaurantList.vue'
import QuotationList from '../components/HomePageComponents/QuotationList.vue'

export default {
  components: {
    MainTitle,
    CategoryList,
    PopularRestaurant,
    RestaurantList,
    QuotationList
  },
  data () {
    return {
      restaurants: [
        {
          id_restaurant: 0,
          name: 'test',
          image_path: '../pages/food.png',
          address: 'naslov_test',
          is_open: true,
          avg_rating: 4.3
        },
        {
          id_restaurant: 0,
          name: 'test',
          image_path: '../pages/food.png',
          address: 'naslov_test',
          is_open: true,
          avg_rating: 4.3
        },
        {
          id_restaurant: 0,
          name: 'test',
          image_path: '../pages/food.png',
          address: 'naslov_test',
          is_open: true,
          avg_rating: 4.3
        }
      ],
      quotations: [
        {
          user_name: 'Miha',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        },
        {
          user_name: 'Luka',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        },
        {
          user_name: 'Mojca',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        },
        {
          user_name: 'Janez',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        },
        {
          user_name: 'Štefan',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        },
        {
          user_name: 'Klemen',
          user_image_path: '../pages/food.png',
          comment: 'naslov_test',
          restaurant_id: 1,
          restaurant_name: true,
          rating: 4.3
        }
      ]
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
  .restaurant_list-title {
    font-size: 26px;
  }
  .restaurant_list-titleGroup{

    margin: 0 20% 60px 20%;
    border-bottom:2px solid #759242;
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

  .pejt-gor {
    margin-top: -420px;
  }

  .outer {
    position:relative;
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

.border-rad {
    border-radius: 5px !important;
}

.image-first {
    text-align: center;
    display: inline-block;
}

.headline1 {
  position: absolute;
  top: 45%;
  width: 100%;
  color: white;
  font-size: 7vw;
}
.image2 {
    position:relative;
    text-align: center;
    display: inline-block;
    width: 80%;
}

.image2 img {
    width: 100%;
}

.image2-inside {
    float: left;
    position: absolute;
    right: 60px;
    bottom: 60px;
    z-index: 1;
    background-color: black;
    background: rgba(0,0,0,.6);
    padding: 20px;
    color: #FFFFFF;
    width: 600px;
    height: 300px;
    border-radius: 5px;
    text-align: center;
    /* scale: 0%; */
}

.image2-inside-header {
    font-size: 40px;
    margin-top: 30px;
    display: inline-block;
}

.image2-inside-content {
    display: inline-block;
    width: 60%;
    margin-top: 10px;
}

.image2-inside-button {
    display: block;
    margin-top: 40px;
}

.single-category {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 30px;
}

.link-category {
    text-decoration: none !important;
    color: rgb(57, 57, 57) !important;
}

.reviews-grid {
    display: grid;
    padding: 0px 60px 40px 60px;
    gap: 30px;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
}

.review {
    width: 350px;
    min-height: 300px;
}

.restaurant-cover {
    width: 100%;
    -webkit-filter: brightness(40%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.green-line {
    background-color: #759242;
    height: 3px;
}

.profile-frame {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.user-content {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #dcdcdc;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.name {
    font-size: 15px;
}

.comment {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}

.stars {
    color: #374709;
    font-size: 25px ;
}

.texted {
    font-size: 15px;
    margin: 0px 0px 0px 5px;
}

.restaurant-content {
    position: relative;
}

.restaurant-name {
    z-index: 1;
    position: absolute;
    left: 2px;
    bottom: 0;
}

.link-restaurant {
    color: white;
}

.dots-cover {
    float: right;
    width: 20%;
}

.headline3 {
    margin-top: 2000px;
}
.text-center {
  text-align: center !important;
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

h3, .h3 {
  font-size: 1.75rem;
}

fa-star {
  orphans: 3;
  widows: 3;
}

@media (min-width: 576px) {
  .card-deck {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-deck .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

</style>
