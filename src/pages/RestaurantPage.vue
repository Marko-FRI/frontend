<template>
  <div>
    <img
      class="header-img"
      :src="headerImage"
      alt="default"
    >
    <div class="col-12 row no-wrap change-position-top">
      <div class="q-pl-xl col-8 custom-text">
        {{ restaurantData.name }}
      </div>
      <div class="col-4">
        <q-btn
          :label="(!isFavourited || userStore.token === null) ? 'Dodaj med priljubljene' : 'Odstrani iz priljubljenih'"
          color="white"
          flat
          :disable="userStore.token === null"
          no-caps
          size="1.15rem"
          class="bg-positive border-rad q-px-lg button-float q-mr-xl no-wrap"
          @click="onChangeIsFavourited"
        />
      </div>
    </div>

    <div class="col-12 row items-start">
      <div
        v-if="!reservation"
        class="col-8 row wrap justify-start q-gutter-y-md q-ma-none"
        :class="$q.screen.width < 1160 ? 'col-12' : 'col-8'"
      >
        <div
          class="col-12 row q-pa-none q-ma-none justify-center"
        >
          <q-tabs
            v-model="tab"
            class="col-8 row q-pa-none q-ma-none"
            inline-label
            outside-arrows
            mobile-arrows
            align="justify"
          >
            <!-- Ko se izbere enega, se spremeni barva v zeleno -->
            <q-tab
              name="ponudba"
              label="Ponudba"
              color="positive"
              no-caps
            />
            <q-tab
              name="mnenja"
              label="Mnenja"
              no-caps
            />
            <q-tab
              name="informacije"
              label="Informacije"
              no-caps
            />
          </q-tabs>
          <q-btn
            label="Rezerviraj"
            color="white"
            flat
            :disable="userStore.token === null"
            no-caps
            :style="$q.screen.width > 599 ? 'font-size: 1.5rem' : 'font-size: 1rem'"
            class="col-3 bg-positive border-rad q-ma-none q-pa-none"
            @click="reservation = true"
          />
        </div>
        <q-separator
          color="grey"
          width="100%"
        />

        <q-tab-panels
          v-model="tab"
          animated
          class="col-12 row wrap"
        >
          <q-tab-panel
            name="ponudba"
            class="col-12 row wrap"
          >
            <restaurant-offer-list
              class="col-12"
              :menus="menus"
              :num-menus="numMenus"
              :loading="loading"
              @onChangePage="onChangePage"
            />
          </q-tab-panel>
          <q-tab-panel
            name="mnenja"
            class="col-12 row wrap"
          >
            <restaurant-rating
              :avg-rating="avgRating"
              :num-ratings="numRatings"
            />
            <comment-list
              :num-comments="numComments"
              :comments="comments"
              :loading="loading"
              class="col-12 q-pt-xl"
              @loadMoreComments="loadMoreComments"
            />
          </q-tab-panel>
          <q-tab-panel
            name="informacije"
            class="col-12 row wrap"
          >
            <restaurant-info
              class="col-12"
              :restaurant-data="restaurantData"
            />
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <div
        v-if="!reservation && $q.screen.width >= 1160"
        class="col-4 row wrap"
      >
        <div class="col-12 row q-mb-lg justify-center">
          <fieldset class="col-8 row justify-center">
            <legend>Odpiralni čas</legend>
            <div>
              <div class="q-mb-sm q-mt-md font-right-side-schedule">
                Ponedeljek: {{ (openingHours[0] !== '/') ? openingHours[0].start_of_shift.substring(0,5) + ' - ' + openingHours[0].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-sm font-right-side-schedule">
                Torek: {{ (openingHours[1] !== '/') ? openingHours[1].start_of_shift.substring(0,5) + ' - ' + openingHours[1].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-sm font-right-side-schedule">
                Sreda: {{ (openingHours[2] !== '/') ? openingHours[2].start_of_shift.substring(0,5) + ' - ' + openingHours[2].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-sm font-right-side-schedule">
                Četrtek: {{ (openingHours[3] !== '/') ? openingHours[3].start_of_shift.substring(0,5) + ' - ' + openingHours[3].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-sm font-right-side-schedule">
                Petek: {{ (openingHours[4] !== '/') ? openingHours[4].start_of_shift.substring(0,5) + ' - ' + openingHours[4].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-sm font-right-side-schedule">
                Sobota: {{ (openingHours[5] !== '/') ? openingHours[5].start_of_shift.substring(0,5) + ' - ' + openingHours[5].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
              <div class="q-mb-md font-right-side-schedule">
                Nedelja: {{ (openingHours[6] !== '/') ? openingHours[6].start_of_shift.substring(0,5) + ' - ' + openingHours[6].end_of_shift.substring(0,5) : 'zaprto' }}
              </div>
            </div>
          </fieldset>
        </div>
        <div class="col-12 row q-mb-lg justify-center">
          <fieldset class="col-8 row justify-start q-px-lg">
            <legend>Kontakt</legend>
            <div
              class="q-mb-md q-mt-md font-right-side-contact"
            >
              <q-icon name="place" />
              {{ restaurantData.address }}
            </div>
            <div class="q-mb-md font-right-side-contact">
              <q-icon name="mail" />
              <span class="underline q-ml-sm">
                {{ restaurantData.email }}
              </span>
            </div>
            <div class="q-mb-md font-right-side-contact">
              <q-icon name="phone" />
              <span class="underline q-ml-sm">
                {{ restaurantData.phone_number }}
              </span>
            </div>
          </fieldset>
        </div>
        <div class="col-12 row q-mb-lg">
          <fieldset class="offset-2 col-8 row">
            <legend>Vaše mnenje</legend>
            <div class="offset-1 col-10 q-my-md font-right-side-comment">
              <div>Vaša ocena:</div>
              <div class="q-gutter-y-md column q-mb-md">
                <q-rating
                  v-model="userRating"
                  :disable="loading || userStore.token === null"
                  :size="$q.screen.width > 1439 ? 'xl' : 'md'"
                  max="5"
                  color="positive"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                />
              </div>
              <div>Napiši Komentar</div>
              <div class="q-mb-md col-12 row">
                <textarea
                  id="userComment"
                  :disabled="loading || userStore.token === null"
                  class="col-12"
                  rows="4"
                />
              </div>
              <q-btn
                label="Dodaj mnenje"
                color="white"
                flat
                no-caps
                style="font-size: 1rem"
                class="bg-positive border-rad"
                :disable="loading || userStore.token === null"
                @click="addReview"
              />
            </div>
            <div
              v-if="commentErrorMessage !== ''"
              class="text-red-7 text-h6 offset-1 col-10"
            >
              {{ commentErrorMessage }}
            </div>
          </fieldset>
        </div>
      </div>
      <div
        v-if="reservation && (userStore.token !== null)"
        class="col-12"
      >
        <restaurant-reservation
          class="col-12"
          :menus="menus"
          :num-menus="numMenus"
          @back_to_restaurant="reservation = false"
        />
      </div>
    </div>
    <!-- DIALOG BUTTONS -->
    <q-page-sticky
      v-if="$q.screen.width < 1160"
      position="right"
      :offset="[18, 0]"
    >
      <div class="column q-gutter-y-sm">
        <q-btn
          round
          icon="schedule"
          color="green"
          size="lg"
          @click="openingHoursDialog = true"
        />
        <q-btn
          round
          icon="place"
          color="green"
          size="lg"
          @click="contactsDialog = true"
        />
        <q-btn
          round
          icon="star"
          color="green"
          size="lg"
          @click="reviewDialog = true"
        />
      </div>
    </q-page-sticky>
    <!-- DIALOGS -->
    <q-dialog
      v-model="openingHoursDialog"
      position="right"
    >
      <div
        class="row col-12 bg-white q-pa-md overflow-hidden"
        style="width: 70vw; min-width: min(300px, 100vw); max-width: 500px;"
      >
        <fieldset class="col-12 row justify-center">
          <legend>Odpiralni čas</legend>
          <div>
            <div class="q-mb-sm q-mt-md font-right-side-schedule ">
              Ponedeljek: {{ (openingHours[0] !== '/') ? openingHours[0].start_of_shift.substring(0,5) + ' - ' + openingHours[0].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-sm font-right-side-schedule ">
              Torek: {{ (openingHours[1] !== '/') ? openingHours[1].start_of_shift.substring(0,5) + ' - ' + openingHours[1].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-sm font-right-side-schedule ">
              Sreda: {{ (openingHours[2] !== '/') ? openingHours[2].start_of_shift.substring(0,5) + ' - ' + openingHours[2].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-sm font-right-side-schedule ">
              Četrtek: {{ (openingHours[3] !== '/') ? openingHours[3].start_of_shift.substring(0,5) + ' - ' + openingHours[3].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-sm font-right-side-schedule ">
              Petek: {{ (openingHours[4] !== '/') ? openingHours[4].start_of_shift.substring(0,5) + ' - ' + openingHours[4].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-sm font-right-side-schedule">
              Sobota: {{ (openingHours[5] !== '/') ? openingHours[5].start_of_shift.substring(0,5) + ' - ' + openingHours[5].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
            <div class="q-mb-md font-right-side-schedule">
              Nedelja: {{ (openingHours[6] !== '/') ? openingHours[6].start_of_shift.substring(0,5) + ' - ' + openingHours[6].end_of_shift.substring(0,5) : 'zaprto' }}
            </div>
          </div>
        </fieldset>
      </div>
    </q-dialog>
    <q-dialog
      v-model="contactsDialog"
      position="right"
    >
      <div
        class="col-12 row bg-white q-pa-md overflow-hidden"
        style="width: 70vw; min-width: min(300px, 100vw); max-width: 500px;"
      >
        <fieldset class="col-12 justify-start q-px-sm">
          <legend>Kontakt</legend>
          <div
            class="q-mb-md q-mt-md font-right-side-contact align-center-contact"
          >
            <q-icon name="place" />
            {{ restaurantData.address }}
          </div>
          <div class="q-mb-md font-right-side-contact align-center-contact">
            <q-icon name="mail" />
            <span class="underline q-ml-sm">
              {{ restaurantData.email }}
            </span>
          </div>
          <div class="q-mb-md font-right-side-contact align-center-contact">
            <q-icon name="phone" />
            <span class="underline q-ml-sm">
              {{ restaurantData.phone_number }}
            </span>
          </div>
        </fieldset>
      </div>
    </q-dialog>
    <q-dialog
      v-model="reviewDialog"
      position="right"
    >
      <div
        class="col-12 row bg-white q-pa-md overflow-hidden"
        style="width: 70vw; min-width: min(300px, 100vw); max-width: 500px;"
      >
        <fieldset class="col-12 row">
          <legend>Vaše mnenje</legend>
          <div class="offset-1 col-10 q-my-md font-right-side-comment">
            <div>Vaša ocena:</div>
            <div class="q-gutter-y-md column q-mb-md">
              <q-rating
                v-model="userRating"
                :disable="loading || userStore.token === null"
                :size="$q.screen.width > 599 ? 'xl' : 'lg'"
                max="5"
                color="positive"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
              />
            </div>
            <div>Napiši Komentar</div>
            <div class="q-mb-md col-12 row">
              <textarea
                id="userComment"
                :disabled="loading || userStore.token === null"
                class="col-12"
                rows="4"
              />
            </div>
            <q-btn
              label="Dodaj mnenje"
              color="white"
              flat
              no-caps
              style="font-size: 1rem"
              class="bg-positive border-rad"
              :disable="loading || userStore.token === null"
              @click="addReview"
            />
          </div>
          <div
            v-if="commentErrorMessage !== ''"
            class="text-red-7 text-h6 offset-1 col-10"
          >
            {{ commentErrorMessage }}
          </div>
        </fieldset>
      </div>
    </q-dialog>
  </div>
</template>

<!-- //////////////////////////////////////////////
POTREBNO JE ŠE isFavourited in userRating (na začetku)
    //////////////////////////////////////////////-->

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'
import CommentList from '../components/CommentList.vue'
import RestaurantRating from '../components/RestaurantRating.vue'
import RestaurantOfferList from '../components/RestaurantOfferList.vue'
import RestaurantInfo from '../components/RestaurantInfo.vue'
import RestaurantReservation from '../components/RestaurantReservation.vue'

export default {
  name: 'RestaurantPage',

  components: {
    CommentList,
    RestaurantRating,
    RestaurantOfferList,
    RestaurantInfo,
    RestaurantReservation
  },

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      headerImage: '',
      loading: false,
      isFavourited: false,
      openingHours: ['/', '/', '/', '/', '/', '/', '/'],
      openingHoursDialog: false,
      contactsDialog: false,
      reviewDialog: false,
      restaurantData: {
        images: []
      },
      numMenus: 0,
      menus: [],
      avgRating: 2.7,
      numRatings: 42,
      reservation: false,
      tab: 'ponudba',
      userRating: 0,
      commentErrorMessage: '',
      numComments: 0,
      comments: [
        {
          id_review: 0,
          name: '',
          surname: '',
          comment: '',
          profile_image: '',
          rating: 0,
          time_ago: ''
        }
      ]
    }
  },

  mounted () {
    this.getRestaurantInfo()
  },

  methods: {
    async getRestaurantInfo () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/restaurant/' + this.$route.params.id_restaurant)

        this.restaurantData = reply.data.restaurant_data
        this.openingHours = reply.data.schedule
        this.numMenus = reply.data.numMenus
        this.menus = reply.data.menus.data
        this.numRatings = reply.data.numRatings
        this.avgRating = this.restaurantData.rating
        this.numComments = reply.data.numReviews
        this.comments = reply.data.reviews
        this.headerImage = reply.data.restaurant_header_image
        console.log(reply)
        if (this.userStore.token !== null) {
          this.userRating = (reply.data.restaurant_data.userReview === null) ? 0 : reply.data.restaurant_data.userReview.rating
          document.getElementById('userComment').value = (reply.data.restaurant_data.userReview === null) ? '' : reply.data.restaurant_data.userReview.comment
          this.isFavourited = reply.data.restaurant_data.isFavourited
        }
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },

    async onChangePage (newCurrentPage) {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/restaurant/' + this.$route.params.id_restaurant, {
          params: {
            page: newCurrentPage
          }
        })
        this.numMenus = reply.data.numMenus
        this.menus = reply.data.menus.data
        // console.log(reply)
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },

    async onChangeIsFavourited () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/favourite', {
          id_restaurant: this.$route.params.id_restaurant,
          isFavourited: this.isFavourited
        })
        console.log(reply)
        this.loading = false
        this.isFavourited = !this.isFavourited
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },

    async addReview () {
      try {
        const userComment = document.getElementById('userComment').value
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/addReview', {
          commentOffset: 4,
          id_restaurant: this.$route.params.id_restaurant,
          rating: this.userRating,
          comment: userComment
        })
        this.numRatings = reply.data.numReviews
        this.avgRating = reply.data.rating
        this.numComments = reply.data.numReviews
        this.comments = reply.data.reviews
        // document.getElementById('userComment').value = ''
        this.commentErrorMessage = ''
        // console.log(reply)
        this.loading = false
      } catch (error) {
        console.log(error)
        this.commentErrorMessage = error.response.data.message
        this.loading = false
      }
    },

    async loadMoreComments (commentsLength) {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/moreReviews', {
          params: {
            commentOffset: commentsLength + 4, // dobim nazaj commentLength + 4 komentarje
            id_restaurant: this.$route.params.id_restaurant
          }
        })
        this.comments = reply.data.reviews
        // console.log(reply)
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .header-img {
    filter: brightness(35%);
    width: 100%;
    height: auto;
    z-index: -1;
  }

  .border-rad {
    border-radius: 5px;
  }

  .change-position-top {
    margin-top: -65px;
    margin-bottom: 37px;
  }

  .custom-text {
    color: white;
    font-size: 30px;
    z-index: 1;
  }

  .button-float {
    float: right;
    margin-top: -8px;
  }

  :deep .q-tab__label {
   font-size: 1.5rem;
  }

  fieldset {
    border: 2px solid #759242;
    border-radius: 5px;
    width: 100%;
    margin-left: -1px;
  }

  legend {
    color: black;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    padding-left: 5px;
    padding-right: 5px;
  }

  .font-right-side-schedule {
    font-size: 1.1rem;
  }

  .font-right-side-contact {
    font-size: 1.2rem;
  }
  .underline {
    text-decoration: underline;
  }

  .font-right-side-comment {
    font-size: 1.3rem;
    color: #757575;
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

</style>
