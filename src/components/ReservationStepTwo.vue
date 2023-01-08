<template>
  <div>
    <div
      :class="(isAvailable) ? 'text-positive text-h6' : 'text-red-7 text-h6'"
      style="text-align: center"
    >
      Vaš termin {{ (isAvailable) ? 'je' : 'ni' }} na voljo
    </div>
    <div
      style="text-align: center"
      class="text-h6 q-mt-md q-mb-xl"
    >
      Če želite, lahko že naročite jed in se izognite čakanju.
    </div>
    <div class="grey-bg q-py-lg q-my-lg">
      <reservation-offer-element
        v-for="(menu, index) in menusList"
        :key="menu.id_menu"
        :menu="menu"
        :index="index"
        :num-of-orders-parent="getNumOfOrders(menu.id_menu)"
        @onChangePickedOrders="onChangePickedOrders"
      />

      <div class="flex flex-center">
        <q-pagination
          v-model="currentPage"
          :max="numPages"
          :max-pages="4"
          direction-links
          color="positive"
          class="custom-position"
          :disable="loading"
        />
      </div>
    </div>
    <div>
      <div
        class="text-h4 q-mb-lg"
        style="text-align: center"
      >
        Vaše naročilo
      </div>
      <div
        class="text-h6 q-mx-auto"
        style="max-width: 500px;"
      >
        <div
          v-for="(pickedMenu) in pickedMenus"
          :key="pickedMenu.id_menu"
          class="row no-wrap"
        >
          <span class="col-8">{{ pickedMenu.name }} {{ pickedMenu.quantity }}x</span>
          <span
            class="col-4"
            style="text-align: right"
          >{{ (Math.round((pickedMenu.price * pickedMenu.quantity) * 100) / 100).toFixed(2) }} €</span>
        </div>
        <q-separator
          color="black"
          class="q-my-md"
        />
        <div
          class="row text-h5 q-mx-auto text-right justify-between"
          style="max-width: 700px"
        >
          <span>Skupaj</span>
          <span>{{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €</span>
        </div>
        <div class="q-mt-xl">
          <div class="text-h6">
            Opomba
          </div>
          <div class="q-mb-md col-12 row">
            <textarea
              id="userComment"
              v-model="note"
              class="col-12"
              rows="4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'
import ReservationOfferElement from '../components/ReservationOfferElement.vue'

export default {
  name: 'ReservationStepTwo',

  components: {
    ReservationOfferElement
  },

  props: ['menus', 'numMenus', 'isAvailable'],

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      numOfMenus: 4,
      pickedMenus: [],
      totalPrice: 0,
      currentPage: 1,
      menusList: [],
      note: '',
      loading: false
    }
  },

  computed: {
    numPages () {
      return parseInt(Math.ceil(this.numMenus / 6))
    }
  },

  watch: {
    currentPage (newCurrentPage) {
      this.onChangePage(newCurrentPage)
    },

    note (newNote) {
      this.$emit('onChangeNote', newNote)
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    this.menusList = this.menus
  },

  methods: {
    getNumOfOrders (idMenu) {
      let quantity = 0

      this.pickedMenus.forEach(pickedMenu => {
        if (pickedMenu.id_menu === idMenu) {
          quantity = pickedMenu.quantity
        }
      })

      return quantity
    },

    onChangePickedOrders (newNumOfOrders, oldNumOfOrders, index) {
      let menuIndex = -1
      this.pickedMenus.forEach((menu, ind) => {
        if (menu.id_menu === this.menusList[index].id_menu) {
          menuIndex = ind
        }
      })

      if (menuIndex === -1) {
        this.pickedMenus.push({
          id_menu: this.menusList[index].id_menu,
          name: this.menusList[index].name,
          price: this.menusList[index].price,
          quantity: newNumOfOrders
        })
      } else {
        if (newNumOfOrders < 1) {
          this.pickedMenus.splice(menuIndex, 1)
        } else {
          this.pickedMenus[menuIndex].quantity = newNumOfOrders
        }
      }

      this.$emit('onChangePickedMenus', this.pickedMenus)

      if (newNumOfOrders > oldNumOfOrders) {
        this.totalPrice += this.menusList[index].price * (newNumOfOrders - oldNumOfOrders)
      } else {
        this.totalPrice -= this.menusList[index].price * (oldNumOfOrders - newNumOfOrders)
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
        this.menusList = reply.data.menus.data
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
    .grey-bg {
        background-color: #F2F2EF;
    }

    .custom-margin {
      margin-left: 15rem;
      margin-right: 15rem;
    }
</style>
