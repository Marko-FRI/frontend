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
        v-for="(menu, index) in menus"
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
          v-for="(numOfOrders, index) in pickedMenus"
          :key="index"
        >
          <div
            v-if="numOfOrders > 0"
            class="row no-wrap"
          >
            <span class="col-8">{{ menus[index].name }} {{ numOfOrders }}x</span>
            <span
              class="col-4"
              style="text-align: right"
            >{{ (Math.round((menus[index].price * numOfOrders) * 100) / 100).toFixed(2) }} €</span>
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
import ReservationOfferElement from '../components/ReservationOfferElement.vue'

export default {
  name: 'ReservationStepTwo',

  components: {
    ReservationOfferElement
  },

  props: ['menus'],

  data () {
    return {
      numOfMenus: 4,
      pickedMenus: [],
      totalPrice: 0,
      isAvailable: true,
      currentPage: 1,
      numPages: 10
    }
  },

  mounted () {
    for (let i = 0; i < this.numOfMenus; i++) {
      this.pickedMenus[i] = 0
    }
  },

  methods: {
    onChangePickedOrders (newNumOfOrders, oldNumOfOrders, index) {
      this.pickedMenus[index] = newNumOfOrders

      if (newNumOfOrders > oldNumOfOrders) {
        this.totalPrice += this.menus[index].price * (newNumOfOrders - oldNumOfOrders)
      } else {
        this.totalPrice -= this.menus[index].price * (oldNumOfOrders - newNumOfOrders)
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
