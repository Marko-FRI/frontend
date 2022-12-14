<template>
  <div>
    <p class="page-title q-mb-xl">
      Domov / Vse Restavracije
    </p>

    <div class="fit row no-wrap justify-start items-start content-start">
      <div class="col-3">
        <div class="fit row no-wrap">
          <category-list
            :categories="categories"
            :loading="loading"
            @onChangeCategory="onChangeCategory"
          />
        </div>
      </div>
      <div class="col-9">
        <div class="q-mb-xl row no-wrap justify-start items-start content-start">
          <q-input
            v-model="search"
            class="col-6"
            label="Iskanje Restavracij"
            :input-style="{ fontSize: '18px', margin: '10px 0px 0px 2px' }"
            style="margin-top: -4px"
            dense
            :disable="loading"
          />
          <q-btn
            label="Iskanje"
            color="white"
            flat
            no-caps
            class="col-1 q-ml-lg bg-green-8 border-rad"
            :disable="loading"
            @click="onChangeSearch"
          />
        </div>
        <div class="q-mb-lg row no-wrap justify-start items-start content-start">
          <div class="col-4">
            1-9 od {{ numResults }} rezultatov
          </div>
          <div class="col-8">
            <div style="width: 180px; float: right; margin-right: 70px;">
              Sortiraj po:
              <q-btn-dropdown
                outline
                unelevated
                no-caps
                :label="sortBy"
                color="green"
                text-color="black"
                class="q-ml-md q-pr-none border-rad"
                :disable="loading"
              >
                <q-list>
                  <q-item
                    v-close-popup
                    clickable
                  >
                    <q-item-section @click="onChangeSortBy('Ocena')">
                      <q-item-label>Ocena</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    v-close-popup
                    clickable
                  >
                    <q-item-section @click="onChangeSortBy('Ime')">
                      <q-item-label>Ime</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
        <div class="row wrap justify-start items-start content-start">
          <restaurant-list
            v-if="restaurants.length > 0"
            :restaurants="restaurants"
          />
        </div>
        <div class="q-mb-xl flex flex-center">
          <q-pagination
            v-model="currentPage"
            :max="numPages"
            :max-pages="6"
            direction-links
            color="green-8"
            class="custom-position"
            :disable="loading"
            @click="onChangePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue'
import CategoryList from '../components/CategoryList.vue'
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'

export default {
  name: 'IndexPage',

  components: {
    RestaurantList,
    CategoryList
  },

  setup () {
    const userStore = useUserStore()
    return { userStore }
  },

  data () {
    return {
      restaurants: [],
      categories: [],
      pickedCategories: [],
      search: '',
      isLoggedIn: false,
      currentPage: 1,
      numResults: 0,
      sortBy: 'Ocena',
      loading: false
    }
  },

  computed: {
    numPages () {
      return parseInt(Math.ceil(this.numResults / 9))
    }
  },

  mounted () {
    this.isLoggedIn = this.userStore.token !== null
    this.getAllRestaurantsPageInfo()
  },

  methods: {
    async getAllRestaurantsPageInfo () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')

        const reply = await api.get('/restaurantsFirstLoad')

        this.restaurants = reply.data.restaurants.data
        this.categories = reply.data.categories
        this.numResults = reply.data.num_of_restaurants
        // console.log(reply)
        // console.log(this.restaurants)
        this.loading = false
      } catch (error) {
        // console.log(error)
        this.loading = false
      }
    },

    async onChangeCategory (newCategories) {
      this.loading = true
      this.currentPage = 1
      this.pickedCategories = newCategories

      const reply = await api.get('/restaurants', {
        params: {
          currentPage: this.currentPage,
          search: this.search,
          pickedCategories: this.pickedCategories,
          sortBy: this.sortBy
        }
      })

      this.restaurants = reply.data.restaurants.data
      this.numResults = reply.data.num_of_restaurants
      this.loading = false

      // console.log('Sprememba kategorije: ' + newCategories)
    },

    async onChangeSortBy (newSortBy) {
      this.loading = true
      this.currentPage = 1
      this.sortBy = newSortBy

      const reply = await api.get('/restaurants', {
        params: {
          currentPage: this.currentPage,
          search: this.search,
          pickedCategories: this.pickedCategories,
          sortBy: this.sortBy
        }
      })

      this.restaurants = reply.data.restaurants.data
      this.numResults = reply.data.num_of_restaurants
      this.loading = false

      // console.log('Sprememba sortiranja: ' + newSortBy)
    },

    async onChangeSearch () {
      this.loading = true
      this.currentPage = 1

      const reply = await api.get('/restaurants', {
        params: {
          currentPage: this.currentPage,
          search: this.search,
          pickedCategories: this.pickedCategories,
          sortBy: this.sortBy
        }
      })

      this.restaurants = reply.data.restaurants.data
      this.numResults = reply.data.num_of_restaurants
      this.loading = false

      // console.log('Sprememba iskanja: ' + this.search)
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// /////////////////                NEKI CUDN DELA onChangePage             ////////////////////////////////////
    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    async onChangePage () {
      this.loading = true

      const reply = await api.get('/restaurants', {
        params: {
          currentPage: this.currentPage,
          search: this.search,
          pickedCategories: this.pickedCategories,
          sortBy: this.sortBy
        }
      })

      this.restaurants = reply.data.restaurants.data
      this.numResults = reply.data.num_of_restaurants
      this.loading = false

      // console.log('Sprememba strani: ' + this.currentPage)
    }
  }
}
</script>

<style scoped>
  .page-title {
    background-color: #F2F2EF !important;
    padding: 30px 100px 30px !important;
    font-size: 22px !important;
    width: 100% !important;
  }

  .border-rad {
    border-radius: 5px !important;
  }

  .custom-position {
    margin-left: -100px;
  }
</style>
