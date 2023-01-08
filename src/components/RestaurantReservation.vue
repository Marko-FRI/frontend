<template>
  <div class="col-12 row wrap q-mt-md justify-center">
    <div
      v-if="$q.screen.width < 700"
      class="col-12 back-button text-grey-7 text-center"
    >
      <span
        @click="$emit('back_to_restaurant')"
      >Nazaj na restavracijo</span>
    </div>
    <div
      class="col-12 text-h3"
      style="text-align: center"
    >
      Rezervacija
    </div>
    <div
      v-if="$q.screen.width > 699"
      class="col-12 back-button text-grey-7 q-pl-xl"
      style="margin-top: -40px;"
    >
      <span
        @click="$emit('back_to_restaurant')"
      >Nazaj na restavracijo</span>
    </div>
    <q-stepper
      v-model="step"
      animated
      header-nav
      swipeable="false"
      flat
      class="col-12 col-md-8 q-my-xl"
    >
      <q-step
        :name="1"
        title="Povpraševanje"
        color="positive"
        :done="step > 1"
      >
        <reservation-step-one
          :loading="loading"
          @onChangeDate="onChangeDate"
          @onChangeTime="onChangeTime"
          @onChangeNumPersons="onChangeNumPersons"
        />

        <div
          v-if="errorMessage != ''"
          class="text-red-7 text-h6 q-ma-lg"
          style="text-align: center"
        >
          {{ errorMessage }}
        </div>

        <q-stepper-navigation
          style="text-align: right"
        >
          <q-btn
            label="Naprej >"
            color="white"
            flat
            no-caps
            style="font-size: 1rem"
            class="bg-positive border-rad"
            :disable="loading"
            @click="goToStepTwo"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Izbira"
        :color="(step > 1) ? 'positive' : 'grey-7'"
        :done="step > 2"
      >
        <reservation-step-two
          :menus="menus"
          :num-menus="numMenus"
          :is-available="isAvailable"
          @onChangePickedMenus="onChangePickedMenus"
          @onChangeNote="onChangeNote"
        />
        <q-dialog
          v-model="confirm"
          persistent
        >
          <q-card>
            <q-card-section class="row items-center text-h5 q-pa-xl">
              <span class="q-ml-sm">Ali ste prepričani, da želite rezervirati?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                v-close-popup
                flat
                label="Prekliči"
                color="primary"
                no-caps
                style="font-size: 1rem"
                class="border-rad text-grey-7"
                @click="confirm = false"
              />
              <q-btn
                v-close-popup
                flat
                label="Rezerviraj"
                color="white"
                no-caps
                style="font-size: 1rem"
                class="bg-positive border-rad q-ma-sm"
                :disable="loading"
                @click="confirmReservation"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-stepper-navigation class="row no-wrap">
          <div class="col-6">
            <q-btn
              flat
              no-caps
              label="< Nazaj"
              class="border-rad text-grey-7"
              @click="step = 1"
            />
          </div>
          <div
            class="col-6"
            style="text-align: right"
          >
            <q-btn
              label="Rezerviraj"
              color="white"
              flat
              no-caps
              style="font-size: 1rem"
              class="bg-positive border-rad"
              :disable="loading"
              @click="confirm = true"
            />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Potrditev"
        :color="(step > 2) ? 'positive' : 'grey-7'"
        active-icon="done"
      >
        <reservation-step-three />

        <q-stepper-navigation style="text-align: center">
          <q-btn
            label="Domov"
            color="white"
            flat
            no-caps
            style="font-size: 1rem"
            class="bg-positive border-rad"
            @click="$router.push('/')"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'
import ReservationStepOne from '../components/ReservationStepOne.vue'
import ReservationStepTwo from '../components/ReservationStepTwo.vue'
import ReservationStepThree from '../components/ReservationStepThree.vue'

export default {
  name: 'RestaurantReservation',

  components: {
    ReservationStepOne,
    ReservationStepTwo,
    ReservationStepThree
  },

  props: ['menus', 'numMenus'],

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      step: 1,
      buttonConfirm: false,
      errorMessage: '',
      confirm: false,
      date: '',
      time: '',
      numPersons: '',
      isAvailable: false,
      pickedMenus: [],
      note: '',
      loading: false
    }
  },

  watch: {
    step (newStep, oldStep) {
      if (oldStep === 3) {
        this.step = 3
      } else if (newStep > oldStep) {
        if (!this.buttonConfirm) { this.step = oldStep } else { this.buttonConfirm = false }
      }
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/restaurant/' + this.$route.params.id_restaurant) }
  },

  methods: {
    onChangeDate (newDate) {
      this.date = newDate
    },

    onChangeTime (newTime) {
      this.time = newTime
    },

    onChangeNumPersons (newNumPersons) {
      this.numPersons = newNumPersons
    },

    onChangePickedMenus (newPickedMenus) {
      this.pickedMenus = newPickedMenus
    },

    onChangeNote (newNote) {
      this.note = newNote
    },

    async goToStepTwo () {
      if (this.date !== '' && this.time !== '' && this.numPersons > 0) {
        // pošlji request in dobi response (preveri, če štima response)
        try {
          const dateTime = this.date.replace(/\//g, '-') + ' ' + this.time + ':00'
          this.loading = true
          await api.get('/sanctum/csrf-cookie')
          const reply = await api.post('/restaurantAvaliability', {
            id_restaurant: this.$route.params.id_restaurant,
            dateTime,
            numPersons: this.numPersons
          })

          this.isAvailable = reply.data.available
          console.log(reply)
          this.loading = false
          this.errorMessage = ''
          this.buttonConfirm = true
          this.step = 2
        } catch (error) {
          console.log(error)
          this.loading = false
          this.errorMessage = error.response.data.message
        }
      } else { this.errorMessage = 'Potrebno je izpolniti vsa polja!' }
    },

    async confirmReservation () {
      try {
        const menus = []
        this.pickedMenus.forEach(pickedMenu => {
          const menu = {
            id_menu: pickedMenu.id_menu,
            quantity: pickedMenu.quantity
          }
          menus.push(menu)
        })
        console.log('Menus')
        console.log(menus)

        const dateTime = this.date.replace(/\//g, '-') + ' ' + this.time + ':00'

        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/reserveRestaurant', {
          id_restaurant: this.$route.params.id_restaurant,
          dateTime,
          numPersons: this.numPersons,
          pickedMenus: menus,
          note: this.note
        })

        console.log(reply)
        this.loading = false
        this.buttonConfirm = true
        this.step = 3
      } catch (error) {
        console.log('Napaka')
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
    .back-button {
        text-decoration: underline;
        font-size: 1.25rem;
        margin-top: -2rem;
    }

    .back-button span:hover {
        cursor: pointer;
    }

    .border-rad {
        border-radius: 5px;
    }
</style>
