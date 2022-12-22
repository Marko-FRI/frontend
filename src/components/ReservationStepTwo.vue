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
    <div class="grey-bg q-py-lg">
      <reservation-offer-element
        v-for="menu in menus"
        :key="menu.id_menu"
        :menu="menu"
      />
    </div>
    <div>
      <div>Vašo naročilo</div>
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
      isAvailable: true
    }
  }
}
</script>

<style scoped>
    .grey-bg {
        background-color: #F2F2EF;
    }
</style>
