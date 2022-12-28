<template>
  <div>
    <div
      :class="(isAvailable) ? 'text-green-7 text-h6' : 'text-red-7 text-h6'"
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
        @onChangePickedOrders="onChangePickedOrders"
      />

      <div class="flex flex-center">
        <q-pagination
          v-model="currentPage"
          :max="numPages"
          :max-pages="4"
          direction-links
          color="green-8"
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
        class="text-h6 custom-margin"
      >
        <div
          v-for="(pickedMenu) in pickedMenus"
          :key="pickedMenu.id_menu"
        >
          <div
            class="row no-wrap"
          >
            <span class="col-8">{{ pickedMenu.name }} {{ pickedMenu.quantity }}x</span>
            <span
              class="col-4"
              style="text-align: right"
            >{{ (Math.round((pickedMenu.price * pickedMenu.quantity) * 100) / 100).toFixed(2) }} €</span>
          </div>
        </div>
        <q-separator
          color="black"
          class="q-my-md"
        />
      </div>
      <div
        class="row no-wrap text-h5 custom-margin"
      >
        <span class="col-8">Skupaj</span>
        <span
          class="col-4"
          style="text-align: right"
        >{{ (Math.round(totalPrice * 100) / 100).toFixed(2) }} €</span>
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

  props: ['menus', 'numMenus'],

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      numOfMenus: 4,
      pickedMenus: [],
      totalPrice: 0,
      isAvailable: true,
      currentPage: 1,
      menusList: [],
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
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
    this.menusList = this.menus
  },

  // tuki je treba shrant v pickedMenus {id_menu in quantity} (za pol sa pošiljanje)
  // pogugli kko se isce v tabeli po kljucu (kljuc je id_menu)
  methods: {
    // onChangePickedOrders (newNumOfOrders, oldNumOfOrders, index) {
    //   this.pickedMenus[index] = newNumOfOrders
    //   this.$emit('onChangePickedMenus', this.pickedMenus)

    //   if (newNumOfOrders > oldNumOfOrders) {
    //     this.totalPrice += this.menusList[index].price * (newNumOfOrders - oldNumOfOrders)
    //   } else {
    //     this.totalPrice -= this.menusList[index].price * (oldNumOfOrders - newNumOfOrders)
    //   }
    // },

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
